import { createContext, useContext, useEffect, useState } from 'react'
import {
  AbsoluteFill,
  Audio,
  Sequence,
  continueRender,
  delayRender,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion'
import {
  Bird,
  Bug,
  Cat,
  CircleDot,
  Dna,
  Fish,
  GitBranch,
  Leaf,
  Network,
  PawPrint,
  Sprout,
  TreePine,
} from 'lucide-react'
import { bio101Motion as motion } from '../pages/bio101/motion/bio101.motion.js'
import {
  CellStage,
  EcologyStage,
  HookCast,
  RecipeBeat,
  SevenAlive,
  TRAIT_STAGES,
} from './lifeScenes.jsx'
import { SpokenSteps } from './chapter1Scenes.jsx'

const { palette } = motion
const fontFamily = '"Geist", "Inter", ui-sans-serif, system-ui, sans-serif'
const FilmContext = createContext(motion)

function useFilm() {
  return useContext(FilmContext)
}

function useScenePresence(scene) {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()
  const fade = 8
  const fadeIn = scene.from === 0
    ? 1
    : interpolate(frame, [0, fade], [0, 1], { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' })
  const fadeOut = scene.visual === 'close'
    ? 1
    : interpolate(frame, [scene.duration - fade, scene.duration - 1], [1, 0], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    })

  return { frame, fps, opacity: fadeIn * fadeOut }
}

function enterStyle(frame, fps, delay = 0) {
  const value = spring({
    frame: frame - delay,
    fps,
    config: { damping: 18, stiffness: 140, mass: 0.7 },
  })
  return {
    opacity: value,
    transform: `translateY(${(1 - value) * 22}px)`,
  }
}

function Backdrop({ frame }) {
  const drift = Math.sin(frame / 48) * 24
  return (
    <AbsoluteFill style={{ backgroundColor: palette.ink, overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute',
          width: 980,
          height: 980,
          left: -220,
          top: -320,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(45,212,191,0.22), transparent 68%)',
          transform: `translate3d(${drift}px, 0, 0)`,
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: 760,
          height: 760,
          right: -200,
          bottom: -260,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(250,204,21,0.10), transparent 70%)',
          transform: `translate3d(0, ${-drift}px, 0)`,
        }}
      />
    </AbsoluteFill>
  )
}

function Chrome() {
  const film = useFilm()
  return (
    <div
      style={{
        position: 'absolute',
        top: 42,
        left: 72,
        right: 72,
        display: 'flex',
        justifyContent: 'space-between',
        color: palette.mist,
        fontFamily,
        fontSize: 22,
        fontWeight: 500,
        zIndex: 4,
      }}
    >
      <span>{film.mark || 'BIO 101'}</span>
      <span>TestMancer</span>
    </div>
  )
}

function Rail({ frame }) {
  const film = useFilm()
  return (
    <div
      style={{
        position: 'absolute',
        left: 72,
        right: 72,
        bottom: 42,
        display: 'flex',
        gap: 8,
        zIndex: 4,
      }}
    >
      {film.scenes.map((scene) => {
        const progress = interpolate(
          frame,
          [scene.from, scene.from + scene.duration],
          [0, 1],
          { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' },
        )
        return (
          <div
            key={scene.id}
            style={{
              flex: scene.duration,
              height: 4,
              borderRadius: 99,
              background: 'rgba(244,247,246,0.14)',
              overflow: 'hidden',
            }}
          >
            <div style={{ width: `${progress * 100}%`, height: '100%', background: palette.teal }} />
          </div>
        )
      })}
    </div>
  )
}

function Kicker({ children }) {
  return (
    <div style={{ color: palette.teal, fontSize: 26, fontWeight: 500, fontFamily }}>
      {children}
    </div>
  )
}

function Headline({ children, size = 92 }) {
  return (
    <div
      style={{
        marginTop: 18,
        maxWidth: 980,
        color: palette.paper,
        fontFamily,
        fontSize: size,
        fontWeight: 500,
        letterSpacing: '-0.03em',
        lineHeight: 0.98,
      }}
    >
      {children}
    </div>
  )
}

const RANK_LIFE = [Bird, Fish, Bug, Cat, Leaf, Sprout, PawPrint]
const CHAPTER_ICONS = [Sprout, Network, TreePine, CircleDot, Dna, GitBranch]

function PictureCaption({ kicker, title, line, index, bottom = 118 }) {
  return (
    <div
      style={{
        position: 'absolute',
        left: 80,
        right: 80,
        bottom,
        zIndex: 3,
        fontFamily,
      }}
    >
      <div style={{ color: palette.teal, fontSize: 22, fontWeight: 500 }}>{kicker}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginTop: 8 }}>
        {index != null && (
          <div style={{ color: 'rgba(45,212,191,0.55)', fontSize: 40, fontWeight: 500, letterSpacing: '-0.04em' }}>
            {String(index + 1).padStart(2, '0')}
          </div>
        )}
        <div style={{ color: palette.paper, fontSize: 64, fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 0.95 }}>
          {title}
        </div>
      </div>
      {line ? (
        <div style={{ marginTop: 8, color: palette.mist, fontSize: 30 }}>{line}</div>
      ) : null}
    </div>
  )
}

function Helix({ frame }) {
  const count = 20
  const rows = Array.from({ length: count }, (_, index) => {
    const t = index / (count - 1)
    const y = 36 + t * 620
    const phase = t * Math.PI * 5 + frame * 0.11
    return {
      index,
      y,
      x1: 170 + Math.sin(phase) * 92,
      x2: 170 + Math.sin(phase + Math.PI) * 92,
      front: Math.cos(phase) > 0,
    }
  })

  return (
    <svg width="340" height="700" viewBox="0 0 340 700">
      {rows.map((row) => (
        <line
          key={`bar-${row.index}`}
          x1={row.x1}
          y1={row.y}
          x2={row.x2}
          y2={row.y}
          stroke="rgba(45,212,191,0.35)"
          strokeWidth="2"
        />
      ))}
      {rows.map((row) => (
        <g key={row.index}>
          <circle cx={row.x1} cy={row.y} r={row.front ? 8 : 5} fill={row.front ? palette.teal : palette.mist} />
          <circle cx={row.x2} cy={row.y} r={row.front ? 5 : 8} fill={row.front ? palette.mist : palette.gold} />
        </g>
      ))}
    </svg>
  )
}

function Hook({ scene }) {
  const { frame, opacity } = useScenePresence(scene)
  return (
    <AbsoluteFill style={{ opacity, fontFamily }}>
      <HookCast frame={frame} chips={scene.chips} punch={scene.punch} />
      <div style={{ position: 'absolute', left: 80, top: 120, width: 860, zIndex: 3 }}>
        <Kicker>{scene.kicker}</Kicker>
        <Headline>{scene.headline}</Headline>
      </div>
    </AbsoluteFill>
  )
}

function traitBeat(scene, frame) {
  let cursor = 0
  for (let index = 0; index < scene.items.length; index += 1) {
    const length = scene.items[index].frames
    if (frame < cursor + length) {
      return { index, local: frame - cursor }
    }
    cursor += length
  }
  const last = scene.items.length - 1
  return { index: last, local: frame - (cursor - scene.items[last].frames) }
}

function TraitLegend({ items, index }) {
  return (
    <div style={{ position: 'absolute', left: 72, right: 72, bottom: 72, display: 'flex', gap: 10, zIndex: 3 }}>
      {items.map((trait, traitIndex) => {
        const active = traitIndex === index
        const done = traitIndex < index
        return (
          <div
            key={trait.word}
            style={{
              flex: 1,
              borderRadius: 999,
              padding: '12px 8px',
              textAlign: 'center',
              fontSize: 18,
              fontWeight: 500,
              fontFamily,
              color: active ? '#042f2e' : palette.paper,
              background: active ? palette.teal : 'transparent',
              border: `1px solid ${active || done ? palette.teal : 'rgba(244,247,246,0.16)'}`,
              opacity: done || active ? 1 : 0.45,
            }}
          >
            {trait.word}
          </div>
        )
      })}
    </div>
  )
}

function Traits({ scene }) {
  const { frame, fps, opacity } = useScenePresence(scene)
  const outro = scene.outroAt != null && frame >= scene.outroAt
  const { index, local } = traitBeat(scene, frame)
  const item = scene.items[index]
  const Stage = TRAIT_STAGES[item.word]
  const pop = spring({ frame: local, fps, config: { damping: 16, stiffness: 150, mass: 0.55 } })

  if (outro) {
    return (
      <AbsoluteFill style={{ opacity, fontFamily }}>
        <SevenAlive frame={frame} items={scene.items} />
        <PictureCaption kicker={scene.kicker} title={scene.caption} />
      </AbsoluteFill>
    )
  }

  return (
    <AbsoluteFill style={{ opacity, fontFamily }}>
      <div style={{ opacity: pop, transform: `scale(${0.98 + pop * 0.02})`, width: '100%', height: '100%' }}>
        {Stage ? <Stage frame={frame} local={local} duration={item.frames} /> : null}
      </div>
      <PictureCaption kicker={scene.kicker} title={item.word} line={item.line} index={index} bottom={168} />
      <TraitLegend items={scene.items} index={index} />
    </AbsoluteFill>
  )
}

function Ladder({ scene }) {
  const { frame, fps, opacity } = useScenePresence(scene)
  return (
    <AbsoluteFill style={{ opacity, fontFamily }}>
      <div style={{ position: 'absolute', left: 96, top: 150, width: 1500 }}>
        <div style={enterStyle(frame, fps, 0)}>
          <Kicker>{scene.kicker}</Kicker>
          <Headline size={78}>{scene.headline}</Headline>
        </div>
        <div style={{ marginTop: 36, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {scene.items.map((label, index) => {
            const appear = spring({
              frame: frame - 56 - index * 26,
              fps,
              config: { damping: 18, stiffness: 140 },
            })
            const last = index === scene.items.length - 1
            return (
              <div
                key={label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 22,
                  opacity: appear,
                  transform: `translateY(${(1 - appear) * 14}px)`,
                }}
              >
                <div style={{ width: 170, textAlign: 'right', color: last ? palette.gold : palette.mist, fontSize: 26, fontWeight: 500 }}>
                  {label}
                </div>
                <div
                  style={{
                    height: 28,
                    width: 720 - index * 70,
                    borderRadius: 999,
                    background: last ? palette.teal : 'rgba(45,212,191,0.16)',
                    border: '1px solid rgba(45,212,191,0.45)',
                  }}
                />
                <div style={{ display: 'flex', gap: 8 }}>
                  {RANK_LIFE.slice(0, RANK_LIFE.length - index).map((Icon, iconIndex) => (
                    <Icon
                      key={iconIndex}
                      size={26}
                      color={last ? palette.gold : palette.teal}
                      strokeWidth={1.75}
                      style={{ transform: `translateY(${Math.sin((frame + iconIndex * 8) / 12) * 3}px)` }}
                    />
                  ))}
                </div>
            </div>
          )
        })}
        </div>
        <div style={{ ...enterStyle(frame, fps, 52), marginTop: 26, color: palette.mist, fontSize: 30 }}>
          {scene.caption}
        </div>
      </div>
    </AbsoluteFill>
  )
}

function Web({ scene }) {
  const { frame, opacity } = useScenePresence(scene)
  return (
    <AbsoluteFill style={{ opacity, fontFamily }}>
      <EcologyStage frame={frame} items={scene.items} />
      <PictureCaption kicker={scene.kicker} title={scene.headline} line={scene.caption} />
    </AbsoluteFill>
  )
}

function CellScene({ scene }) {
  const { frame, fps, opacity } = useScenePresence(scene)
  const crossover = scene.switchAt ?? Math.floor(scene.duration * 0.48)
  const nucleus = interpolate(frame, [crossover - 8, crossover + 12], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })
  const item = scene.items[frame < crossover ? 0 : 1]
  const local = frame < crossover ? frame : frame - crossover
  const pop = spring({ frame: local, fps, config: { damping: 16, stiffness: 140, mass: 0.6 } })

  return (
    <AbsoluteFill style={{ opacity, fontFamily }}>
      <CellStage frame={frame} nucleus={nucleus} />
      <div style={{ opacity: pop, width: '100%', height: '100%' }}>
        <PictureCaption kicker={item.word} title={scene.headline} line={item.line} />
      </div>
    </AbsoluteFill>
  )
}

function geneBeat(scene, frame) {
  const timed = scene.items.every((item) => item.frames)
  if (!timed) {
    const span = scene.duration / scene.items.length
    const index = Math.min(scene.items.length - 1, Math.floor(frame / span))
    return { index, local: frame - index * span, span }
  }

  let cursor = 0
  for (let index = 0; index < scene.items.length; index += 1) {
    const span = scene.items[index].frames
    if (frame < cursor + span || index === scene.items.length - 1) {
      return { index, local: frame - cursor, span }
    }
    cursor += span
  }

  const last = scene.items.length - 1
  return { index: last, local: 0, span: scene.items[last].frames }
}

function Genes({ scene }) {
  const { frame, opacity } = useScenePresence(scene)
  const { index, local, span } = geneBeat(scene, frame)
  const item = scene.items[index]

  return (
    <AbsoluteFill style={{ opacity, fontFamily }}>
      <div style={{ position: 'absolute', left: 40, top: 80 }}>
        <Helix frame={frame} />
      </div>
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: 300,
          background: 'linear-gradient(180deg, rgba(7,20,18,0), rgba(7,20,18,0.94))',
          zIndex: 2,
        }}
      />
      <div style={{ position: 'absolute', left: 520, top: 130, width: 1280, zIndex: 3 }}>
        <Kicker>{scene.kicker}</Kicker>
        <Headline size={68}>{scene.headline}</Headline>
        <div style={{ marginTop: 36 }}>
          <RecipeBeat frame={frame} index={index} local={local} span={span} />
        </div>
      </div>
      <PictureCaption kicker={item.word} title={item.line} bottom={168} />
      <div style={{ position: 'absolute', left: 520, right: 80, bottom: 72, display: 'flex', gap: 10, zIndex: 3 }}>
        {scene.items.map((gene, geneIndex) => {
          const active = geneIndex === index
          return (
            <div
              key={gene.word}
              style={{
                borderRadius: 999,
                padding: '10px 18px',
                fontSize: 20,
                fontWeight: 500,
                color: active ? '#042f2e' : palette.paper,
                background: active ? palette.teal : 'transparent',
                border: `1px solid ${active ? palette.teal : 'rgba(244,247,246,0.16)'}`,
                opacity: active || geneIndex < index ? 1 : 0.45,
              }}
            >
              {gene.word}
            </div>
          )
        })}
      </div>
    </AbsoluteFill>
  )
}

function Close({ scene }) {
  const { frame, fps, opacity } = useScenePresence(scene)
  return (
    <AbsoluteFill style={{ opacity, fontFamily }}>
      <div style={{ position: 'absolute', left: 96, right: 96, top: 170 }}>
        <div style={enterStyle(frame, fps, 0)}>
          <Kicker>{scene.kicker}</Kicker>
          <Headline>{scene.headline}</Headline>
          <div style={{ marginTop: 18, color: palette.mist, fontSize: 32 }}>{scene.caption}</div>
        </div>
        <div
          style={{
            marginTop: 42,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: 16,
            maxWidth: 1400,
          }}
        >
          {scene.items.map((item, index) => {
            const Icon = CHAPTER_ICONS[index] || Leaf
            return (
            <div
              key={item.n}
              style={{
                ...enterStyle(frame, fps, 16 + index * 5),
                borderRadius: 22,
                border: '1px solid rgba(45,212,191,0.35)',
                background: 'rgba(45,212,191,0.08)',
                padding: '18px 20px',
                display: 'flex',
                gap: 16,
                alignItems: 'center',
              }}
            >
              <Icon size={28} color={palette.teal} strokeWidth={1.75} />
              <div>
                <div style={{ color: palette.teal, fontSize: 18, fontWeight: 500 }}>{item.n}</div>
                <div style={{ marginTop: 4, color: palette.paper, fontSize: 26, fontWeight: 500 }}>{item.title}</div>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </AbsoluteFill>
  )
}

function SceneView({ scene }) {
  if (scene.visual === 'hook') return <Hook scene={scene} />
  if (scene.visual === 'traits') return <Traits scene={scene} />
  if (scene.visual === 'ladder') return <Ladder scene={scene} />
  if (scene.visual === 'web') return <Web scene={scene} />
  if (scene.visual === 'cell') return <CellScene scene={scene} />
  if (scene.visual === 'genes') return <Genes scene={scene} />
  if (scene.visual === 'close') return <Close scene={scene} />
  if (scene.visual === 'steps') return <SpokenSteps scene={scene} />
  return null
}

export const Bio101Explainer = ({ motion: film = motion }) => {
  const frame = useCurrentFrame()
  const [handle] = useState(() => delayRender('Loading Geist'))

  useEffect(() => {
    let settled = false
    const finish = () => {
      if (settled) return
      settled = true
      continueRender(handle)
    }

    if (document.fonts?.check?.('500 64px Geist')) {
      finish()
      return undefined
    }

    const linkId = 'bio101-geist'
    if (!document.getElementById(linkId)) {
      const link = document.createElement('link')
      link.id = linkId
      link.rel = 'stylesheet'
      link.href = 'https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&display=swap'
      document.head.appendChild(link)
    }

    const timer = window.setTimeout(finish, 400)
    document.fonts.load('500 64px Geist').then(finish).catch(finish)

    return () => {
      window.clearTimeout(timer)
      finish()
    }
  }, [handle])

  return (
    <FilmContext.Provider value={film}>
      <AbsoluteFill style={{ backgroundColor: palette.ink, fontFamily }}>
        <Backdrop frame={frame} />
        {film.scenes.map((scene) => (
          <Sequence key={scene.id} from={scene.from} durationInFrames={scene.duration} layout="none">
            <SceneView scene={scene} />
          </Sequence>
        ))}
        <Audio
          src={staticFile(film.music.src)}
          loop
          volume={(musicFrame) => {
            const level = film.music.volume
            const fade = 20
            const end = film.durationInFrames
            const fadeIn = interpolate(musicFrame, [0, fade], [0, level], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            })
            const fadeOut = interpolate(musicFrame, [end - fade, end - 1], [level, 0], {
              extrapolateLeft: 'clamp',
              extrapolateRight: 'clamp',
            })
            return Math.min(fadeIn, fadeOut)
          }}
        />
        {film.audio.map((cue) => (
          <Sequence
            key={cue.id}
            from={cue.from}
            durationInFrames={cue.durationInFrames}
            premountFor={20}
            style={{ pointerEvents: 'none' }}
          >
            <Audio src={staticFile(cue.src)} volume={1} />
          </Sequence>
        ))}
        {film.effects.map((cue) => (
          <Sequence
            key={cue.id}
            from={cue.from}
            durationInFrames={cue.durationInFrames}
            premountFor={20}
            style={{ pointerEvents: 'none' }}
          >
            <Audio src={staticFile(cue.src)} volume={cue.volume} />
          </Sequence>
        ))}
        <Chrome />
        <Rail frame={frame} />
      </AbsoluteFill>
    </FilmContext.Provider>
  )
}
