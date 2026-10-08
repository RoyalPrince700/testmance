import { AbsoluteFill, useCurrentFrame } from 'remotion'
import { Bug, Bird, Cat } from 'lucide-react'
import { bio101Motion } from '../pages/bio101/motion/bio101.motion.js'

const { palette } = bio101Motion
const font = '"Geist", "Inter", ui-sans-serif, system-ui, sans-serif'

function beatAt(scene, frame) {
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

function StageFrame({ children }) {
  return (
    <div style={{ position: 'absolute', left: 0, right: 0, top: 0, height: 760, overflow: 'hidden' }}>
      {children}
    </div>
  )
}

function RanksStage({ frame }) {
  const labels = ['Kingdom', 'Phylum', 'Class', 'Order', 'Family', 'Genus', 'Species']
  return (
    <StageFrame>
      <div style={{ position: 'absolute', left: 220, top: 150, width: 1480 }}>
        {labels.map((label, index) => {
          const appear = Math.min(1, Math.max(0, (frame - index * 3) / 7))
          const last = index === labels.length - 1
          return (
            <div
              key={label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 18,
                marginBottom: 12,
                opacity: appear,
                transform: `translateY(${(1 - appear) * 10}px)`,
              }}
            >
              <div style={{ width: 190, textAlign: 'right', color: last ? palette.gold : palette.mist, fontFamily: font, fontSize: 30, fontWeight: 500 }}>
                {label}
              </div>
              <div
                style={{
                  height: 26,
                  width: 980 - index * 100,
                  borderRadius: 99,
                  background: last ? palette.teal : 'rgba(45,212,191,0.16)',
                  border: '1px solid rgba(45,212,191,0.45)',
                }}
              />
            </div>
          )
        })}
      </div>
    </StageFrame>
  )
}

function MiniPerson({ x, y, scale = 1, color = palette.teal, frame = 0 }) {
  const bob = Math.sin(frame / 16) * 4
  return (
    <g transform={`translate(${x} ${y + bob}) scale(${scale})`}>
      <ellipse cx="0" cy="36" rx="42" ry="10" fill="rgba(0,0,0,0.28)" />
      <circle cx="0" cy="-118" r="26" fill={palette.paper} />
      <rect x="-20" y="-86" width="40" height="70" rx="16" fill={color} />
      <line x1="-20" y1="-64" x2="-58" y2="-18" stroke={palette.paper} strokeWidth="10" strokeLinecap="round" />
      <line x1="20" y1="-64" x2="58" y2="-24" stroke={palette.paper} strokeWidth="10" strokeLinecap="round" />
      <line x1="-8" y1="-16" x2="-14" y2="48" stroke={palette.paper} strokeWidth="11" strokeLinecap="round" />
      <line x1="10" y1="-16" x2="16" y2="48" stroke={palette.paper} strokeWidth="11" strokeLinecap="round" />
    </g>
  )
}

function SpeciesStage({ frame }) {
  return (
    <StageFrame>
      <svg width="1920" height="760" viewBox="0 0 1920 760">
        <MiniPerson x={620} y={430} frame={frame} />
        <MiniPerson x={1300} y={430} frame={frame + 8} />
        <MiniPerson x={960} y={500} scale={0.62} color={palette.gold} frame={frame + 4} />
        <text x="620" y="560" textAnchor="middle" fill={palette.mist} fontFamily={font} fontSize="28">Similar</text>
        <text x="1300" y="560" textAnchor="middle" fill={palette.mist} fontFamily={font} fontSize="28">Similar</text>
        <text x="960" y="640" textAnchor="middle" fill={palette.gold} fontFamily={font} fontSize="32" fontWeight="500">Fertile young</text>
      </svg>
    </StageFrame>
  )
}

function ArtificialStage() {
  return (
    <StageFrame>
      <div
        style={{
          position: 'absolute',
          left: 360,
          top: 170,
          width: 1200,
          borderRadius: 36,
          border: `2px solid ${palette.gold}`,
          background: 'rgba(250,204,21,0.08)',
          padding: '36px 48px 48px',
        }}
      >
        <div style={{ color: palette.gold, fontFamily: font, fontSize: 32, fontWeight: 500 }}>
          One easy trait · can fly
        </div>
        <div style={{ marginTop: 36, display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          <div style={{ textAlign: 'center', color: palette.paper }}>
            <Bird size={120} color={palette.teal} strokeWidth={1.4} />
            <div style={{ marginTop: 12, fontFamily: font, fontSize: 28 }}>Bird</div>
          </div>
          <div style={{ textAlign: 'center', color: palette.paper }}>
            <Bug size={120} color={palette.teal} strokeWidth={1.4} />
            <div style={{ marginTop: 12, fontFamily: font, fontSize: 28 }}>Insect</div>
          </div>
        </div>
      </div>
    </StageFrame>
  )
}

function KinshipStage({ frame }) {
  const sway = Math.sin(frame / 20) * 6
  const left = 700 + sway
  const right = 1220 - sway
  return (
    <StageFrame>
      <svg width="1920" height="760" viewBox="0 0 1920 760">
        <path d="M960 600 L960 390" stroke={palette.teal} strokeWidth="8" fill="none" strokeLinecap="round" />
        <path d={`M960 390 L${left} 250`} stroke={palette.teal} strokeWidth="8" fill="none" strokeLinecap="round" />
        <path d={`M960 390 L${right} 250`} stroke={palette.gold} strokeWidth="8" fill="none" strokeLinecap="round" />
        <circle cx="960" cy="612" r="16" fill={palette.teal} />
        <text x="960" y="670" textAnchor="middle" fill={palette.paper} fontFamily={font} fontSize="32" fontWeight="500">Natural group</text>
      </svg>
      <div style={{ position: 'absolute', left: left - 46, top: 148 }}>
        <Cat size={92} color={palette.teal} strokeWidth={1.4} />
      </div>
      <div style={{ position: 'absolute', left: right - 46, top: 148 }}>
        <Cat size={92} color={palette.gold} strokeWidth={1.4} />
      </div>
      <div style={{ position: 'absolute', left: 1040, top: 430, color: palette.mist, fontFamily: font, fontSize: 28 }}>
        Shared structure
      </div>
    </StageFrame>
  )
}

function TaxonomyStage() {
  return (
    <StageFrame>
      <div
        style={{
          position: 'absolute',
          left: 510,
          top: 150,
          width: 900,
          borderRadius: 32,
          border: '1px solid rgba(45,212,191,0.45)',
          background: 'rgba(45,212,191,0.08)',
          padding: '36px 48px 42px',
          fontFamily: font,
        }}
      >
        <div style={{ color: palette.teal, fontSize: 28, fontWeight: 500, letterSpacing: '0.14em' }}>TAXONOMY</div>
        <div style={{ marginTop: 18, color: palette.paper, fontSize: 72, fontWeight: 500, letterSpacing: '-0.03em' }}>
          Panthera leo
        </div>
        <div style={{ marginTop: 8, color: palette.mist, fontSize: 32 }}>The lion, named and sorted.</div>
        <div style={{ marginTop: 28, display: 'flex', gap: 28, color: palette.mist, fontSize: 24 }}>
          <span>Genus Panthera</span>
          <span style={{ color: palette.gold }}>Species leo</span>
        </div>
      </div>
    </StageFrame>
  )
}

function CellBubble({ cx, cy, r, nucleus = 0, genes = 6, frame = 0 }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill="rgba(45,212,191,0.08)" stroke={palette.teal} strokeWidth="4" />
      {nucleus > 0.2 && (
        <circle cx={cx} cy={cy} r={r * 0.38 * nucleus} fill={palette.gold} />
      )}
      {Array.from({ length: genes }, (_, i) => {
        const angle = (i / genes) * Math.PI * 2 + frame * 0.02
        const orbit = nucleus > 0.55 ? r * 0.16 : r * 0.55
        const drift = nucleus > 0.55 ? 0 : Math.sin(frame / 12 + i) * 10
        return (
          <circle
            key={i}
            cx={cx + Math.cos(angle) * orbit + drift}
            cy={cy + Math.sin(angle) * orbit}
            r="8"
            fill={nucleus > 0.55 ? palette.ink : palette.paper}
          />
        )
      })}
    </g>
  )
}

function MadeStage({ frame }) {
  return (
    <StageFrame>
      <svg width="1920" height="760" viewBox="0 0 1920 760">
        <CellBubble cx={960} cy={340} r={210} frame={frame} />
      </svg>
    </StageFrame>
  )
}

function DivideStage({ frame, local }) {
  const split = Math.min(1, local / 24)
  const gap = split * 220
  return (
    <StageFrame>
      <svg width="1920" height="760" viewBox="0 0 1920 760">
        <CellBubble cx={960 - gap} cy={340} r={150 - split * 20} frame={frame} genes={5} />
        <CellBubble cx={960 + gap} cy={340} r={150 - split * 20} frame={frame + 6} genes={5} />
      </svg>
    </StageFrame>
  )
}

function ProkaryoteStage({ frame }) {
  return (
    <StageFrame>
      <svg width="1920" height="760" viewBox="0 0 1920 760">
        <CellBubble cx={960} cy={340} r={210} nucleus={0} frame={frame} genes={8} />
        <text x="960" y="620" textAnchor="middle" fill={palette.mist} fontFamily={font} fontSize="32">Genes float free</text>
      </svg>
    </StageFrame>
  )
}

function EukaryoteStage({ frame }) {
  return (
    <StageFrame>
      <svg width="1920" height="760" viewBox="0 0 1920 760">
        <CellBubble cx={960} cy={340} r={210} nucleus={1} frame={frame} genes={8} />
        <text x="960" y="620" textAnchor="middle" fill={palette.gold} fontFamily={font} fontSize="32">Nucleus holds the genes</text>
      </svg>
    </StageFrame>
  )
}

function ArrowRing({ cx, cy, r, count, reach, frame, color }) {
  return (
    <g>
      {Array.from({ length: count }, (_, i) => {
        const angle = (i / count) * Math.PI * 2
        const travel = ((frame * 2 + i * 18) % 70) / 70
        const inner = r - 16 - travel * reach
        const outer = inner + 28
        return (
          <line
            key={i}
            x1={cx + Math.cos(angle) * outer}
            y1={cy + Math.sin(angle) * outer}
            x2={cx + Math.cos(angle) * inner}
            y2={cy + Math.sin(angle) * inner}
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
          />
        )
      })}
    </g>
  )
}

function SmallStage({ frame }) {
  return (
    <StageFrame>
      <svg width="1920" height="760" viewBox="0 0 1920 760">
        <CellBubble cx={560} cy={340} r={110} frame={frame} genes={4} />
        <ArrowRing cx={560} cy={340} r={110} count={10} reach={70} frame={frame} color={palette.teal} />
        <text x="560" y="520" textAnchor="middle" fill={palette.teal} fontFamily={font} fontSize="30">Small · materials cross</text>
        <CellBubble cx={1320} cy={340} r={200} frame={frame} genes={8} />
        <ArrowRing cx={1320} cy={340} r={200} count={8} reach={24} frame={frame} color={palette.gold} />
        <text x="1320" y="600" textAnchor="middle" fill={palette.gold} fontFamily={font} fontSize="30">Too big · too slow</text>
      </svg>
    </StageFrame>
  )
}

function Letters({ letters, hot = -1, x = 0, y = 0, size = 64, flow = false }) {
  return (
    <div style={flow ? { display: 'flex', gap: 10 } : { position: 'absolute', left: x, top: y, display: 'flex', gap: 10 }}>
      {letters.map((letter, index) => {
        const on = index === hot
        return (
          <div
            key={`${letter}-${index}`}
            style={{
              width: size,
              height: size + 16,
              borderRadius: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: font,
              fontSize: size * 0.48,
              fontWeight: 500,
              color: on ? '#042f2e' : palette.paper,
              background: on ? palette.gold : 'rgba(45,212,191,0.1)',
              border: `1px solid ${on ? palette.gold : 'rgba(45,212,191,0.45)'}`,
            }}
          >
            {letter}
          </div>
        )
      })}
    </div>
  )
}

function DnaStage({ frame }) {
  const letters = ['A', 'T', 'G', 'C', 'C', 'A', 'T', 'G']
  const hot = Math.floor(frame / 8) % letters.length
  return (
    <StageFrame>
      <Letters letters={letters} hot={hot} x={613} y={280} size={78} />
    </StageFrame>
  )
}

function ChromosomeStage() {
  const bands = [180, 230, 290, 430, 490, 540]
  return (
    <StageFrame>
      <svg width="1920" height="760" viewBox="0 0 1920 760">
        <path d="M860 140 C 980 260, 980 360, 860 560" stroke={palette.teal} strokeWidth="28" fill="none" strokeLinecap="round" />
        <path d="M1060 140 C 940 260, 940 360, 1060 560" stroke={palette.gold} strokeWidth="28" fill="none" strokeLinecap="round" />
        {bands.map((y, index) => (
          <rect key={y} x={820 + (index % 2) * 40} y={y} width="70" height="16" rx="6" fill={palette.paper} opacity="0.85" />
        ))}
        <text x="1180" y="360" fill={palette.paper} fontFamily={font} fontSize="36" fontWeight="500">Genes sit on it</text>
      </svg>
    </StageFrame>
  )
}

function ParentsStage() {
  const mother = ['A', 'T', 'G', 'C']
  const father = ['C', 'A', 'T', 'G']
  return (
    <StageFrame>
      <div style={{ position: 'absolute', left: 160, top: 170, width: 1600, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={{ color: palette.teal, fontFamily: font, fontSize: 28, marginBottom: 16 }}>Mother</div>
          <Letters letters={mother} flow size={70} />
        </div>
        <div>
          <div style={{ color: palette.gold, fontFamily: font, fontSize: 28, marginBottom: 16 }}>Father</div>
          <Letters letters={father} flow size={70} />
        </div>
      </div>
      <svg width="1920" height="760" viewBox="0 0 1920 760" style={{ position: 'absolute', inset: 0 }}>
        <path d="M420 360 L800 470" stroke={palette.teal} strokeWidth="4" fill="none" />
        <path d="M1500 360 L1120 470" stroke={palette.gold} strokeWidth="4" fill="none" />
      </svg>
      <div style={{ position: 'absolute', left: 760, top: 490, color: palette.paper, fontFamily: font, fontSize: 32, fontWeight: 500 }}>
        One set from each
      </div>
    </StageFrame>
  )
}

function GenotypeStage() {
  return (
    <StageFrame>
      <div style={{ position: 'absolute', left: 0, right: 0, top: 210, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ color: palette.teal, fontFamily: font, fontSize: 28, fontWeight: 500, marginBottom: 18 }}>The full set</div>
        <Letters letters={['A', 'T', 'G', 'C', 'C', 'A', 'T', 'G', 'A', 'A']} flow size={72} />
      </div>
    </StageFrame>
  )
}

function PhenotypeStage({ frame }) {
  return (
    <StageFrame>
      <svg width="1920" height="760" viewBox="0 0 1920 760">
        <MiniPerson x={700} y={470} scale={1.35} frame={frame} />
      </svg>
      <div style={{ position: 'absolute', left: 980, top: 240, fontFamily: font }}>
        <div style={{ color: palette.gold, fontSize: 28, fontWeight: 500 }}>What you can see</div>
        <div style={{ marginTop: 22, color: palette.paper, fontSize: 40 }}>Height</div>
        <div style={{ marginTop: 12, color: palette.paper, fontSize: 40 }}>Eyes</div>
        <div style={{ marginTop: 12, color: palette.paper, fontSize: 40 }}>Build</div>
      </div>
    </StageFrame>
  )
}

function MutationStage({ frame }) {
  const letters = ['A', 'T', 'G', 'C', 'C', 'A', 'T', 'G']
  const changed = ['A', 'T', 'G', 'G', 'C', 'A', 'T', 'G']
  const show = frame % 36 < 18 ? letters : changed
  return (
    <StageFrame>
      <Letters letters={show} hot={3} x={613} y={280} size={78} />
    </StageFrame>
  )
}

const STAGES = {
  ranks: RanksStage,
  species: SpeciesStage,
  artificial: ArtificialStage,
  kinship: KinshipStage,
  taxonomy: TaxonomyStage,
  made: MadeStage,
  divide: DivideStage,
  prokaryote: ProkaryoteStage,
  eukaryote: EukaryoteStage,
  small: SmallStage,
  dna: DnaStage,
  chromosome: ChromosomeStage,
  parents: ParentsStage,
  genotype: GenotypeStage,
  phenotype: PhenotypeStage,
  mutation: MutationStage,
}

function BeatCaption({ kicker, line }) {
  return (
    <div style={{ position: 'absolute', left: 80, right: 80, bottom: 156, zIndex: 3, fontFamily: font }}>
      <div style={{ color: palette.teal, fontSize: 28, fontWeight: 500 }}>{kicker}</div>
      <div style={{ marginTop: 8, maxWidth: 1600, color: palette.paper, fontSize: 52, fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1.05 }}>
        {line}
      </div>
    </div>
  )
}

function BeatLegend({ items, index }) {
  return (
    <div style={{ position: 'absolute', left: 72, right: 72, bottom: 72, display: 'flex', gap: 10, zIndex: 4 }}>
      {items.map((item, itemIndex) => {
        const active = itemIndex === index
        const done = itemIndex < index
        return (
          <div
            key={item.word}
            style={{
              flex: 1,
              borderRadius: 999,
              padding: '12px 8px',
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 500,
              fontFamily: font,
              color: active ? '#042f2e' : palette.paper,
              background: active ? palette.teal : 'transparent',
              border: `1px solid ${active || done ? palette.teal : 'rgba(244,247,246,0.16)'}`,
              opacity: done || active ? 1 : 0.45,
            }}
          >
            {item.word}
          </div>
        )
      })}
    </div>
  )
}

export function SpokenSteps({ scene }) {
  const frame = useCurrentFrame()
  const { index, local } = beatAt(scene, frame)
  const item = scene.items[index]
  const Stage = STAGES[item.stage]
  const fade = 8
  const fadeIn = scene.from === 0 ? 1 : Math.min(1, frame / fade)
  const fadeOut = Math.min(1, Math.max(0, (scene.duration - 1 - frame) / fade))

  return (
    <AbsoluteFill style={{ opacity: fadeIn * fadeOut, fontFamily: font }}>
      {Stage ? <Stage frame={frame} local={local} /> : null}
      <BeatCaption kicker={item.word} line={item.line} />
      <BeatLegend items={scene.items} index={index} />
    </AbsoluteFill>
  )
}
