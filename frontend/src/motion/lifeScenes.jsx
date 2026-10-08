import { AbsoluteFill, interpolate } from 'remotion'
import {
  Apple,
  Droplets,
  Egg,
  Eye,
  Flame,
  Footprints,
  Leaf,
  PawPrint,
  Sprout,
  Sun,
  Wind,
  Zap,
} from 'lucide-react'
import { bio101Motion } from '../pages/bio101/motion/bio101.motion.js'

const { palette } = bio101Motion
const font = '"Geist", "Inter", ui-sans-serif, system-ui, sans-serif'

export const TRAIT_ICONS = {
  Nutrition: Apple,
  Respiration: Flame,
  Movement: PawPrint,
  Excretion: Droplets,
  Growth: Sprout,
  Reproduction: Egg,
  Sensitivity: Eye,
}

function clamp01(frame, from, to) {
  return interpolate(frame, [from, to], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })
}

function Glyph({ icon: Icon, x, y, size = 72, color = palette.teal, rotate = 0, opacity = 1, scale = 1 }) {
  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: size,
        height: size,
        color,
        opacity,
        transform: `translate(-50%, -50%) rotate(${rotate}deg) scale(${scale})`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Icon size={size} strokeWidth={1.5} color={color} />
    </div>
  )
}

function Scrim({ edge = 'bottom' }) {
  const bottom = edge === 'bottom'
  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: bottom ? 'auto' : 0,
        bottom: bottom ? 0 : 'auto',
        height: bottom ? 320 : 280,
        background: bottom
          ? 'linear-gradient(180deg, rgba(7,20,18,0) 0%, rgba(7,20,18,0.55) 42%, rgba(7,20,18,0.94) 100%)'
          : 'linear-gradient(180deg, rgba(7,20,18,0.78) 0%, rgba(7,20,18,0.2) 70%, rgba(7,20,18,0) 100%)',
        zIndex: 2,
        pointerEvents: 'none',
      }}
    />
  )
}

function Motes({ frame, count = 14 }) {
  return (
    <svg width="1920" height="1080" viewBox="0 0 1920 1080" style={{ position: 'absolute', inset: 0 }}>
      {Array.from({ length: count }, (_, i) => {
        const speed = 0.35 + (i % 4) * 0.18
        const x = (i * 137 + Math.sin(frame / 28 + i) * 24) % 1920
        const y = (1080 - ((frame * speed + i * 80) % 1120) + 40)
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={1.5 + (i % 3)}
            fill={i % 3 === 0 ? palette.gold : palette.teal}
            opacity={0.28}
          />
        )
      })}
    </svg>
  )
}

function SunBurst({ cx, cy, frame, r = 46 }) {
  return (
    <g>
      {Array.from({ length: 14 }, (_, i) => {
        const angle = (i / 14) * Math.PI * 2 + frame * 0.012
        const inner = r + 18
        const outer = r + 34 + (i % 2) * 22 + Math.sin(frame / 9 + i) * 8
        return (
          <line
            key={i}
            x1={cx + Math.cos(angle) * inner}
            y1={cy + Math.sin(angle) * inner}
            x2={cx + Math.cos(angle) * outer}
            y2={cy + Math.sin(angle) * outer}
            stroke={palette.gold}
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.9"
          />
        )
      })}
    </g>
  )
}

function NucleusHelix() {
  return (
    <g>
      {Array.from({ length: 7 }, (_, i) => {
        const t = i / 6
        const y = -30 + t * 60
        const phase = t * Math.PI * 2.4
        const x1 = Math.sin(phase) * 16
        const x2 = Math.sin(phase + Math.PI) * 16
        return (
          <g key={i}>
            <line x1={x1} y1={y} x2={x2} y2={y} stroke={palette.ink} strokeWidth="2" opacity="0.4" />
            <circle cx={x1} cy={y} r="4.5" fill={palette.ink} />
            <circle cx={x2} cy={y} r="4.5" fill={palette.tealDeep} />
          </g>
        )
      })}
    </g>
  )
}

function Ground({ y = 860 }) {
  return (
    <g>
      <path
        d={`M0 ${y + 70} C 480 ${y - 20}, 1440 ${y - 20}, 1920 ${y + 70} V 1080 H 0 Z`}
        fill="rgba(15,118,110,0.18)"
      />
      <ellipse cx="960" cy={y + 18} rx="760" ry="22" fill="rgba(45,212,191,0.08)" />
    </g>
  )
}

function Leopard({ frame, run = 1 }) {
  const swing = run * Math.sin(frame * 0.55)
  const bob = run ? Math.abs(Math.sin(frame * 0.55)) * -14 : Math.sin(frame / 18) * -4
  const spots = [
    [-78, -6], [-28, 4], [24, -14], [72, -2], [112, -18], [-54, 16], [8, 16],
  ]
  const legs = [
    [-72, 16, 1],
    [-26, 20, -1],
    [46, 14, 1],
    [96, 12, -1],
  ]

  return (
    <g transform={`translate(0 ${bob})`}>
      <ellipse cx="10" cy="46" rx="120" ry="12" fill="rgba(0,0,0,0.28)" />
      <path
        d="M-148 8 C-116 -46 -28 -62 48 -50 C 96 -74 142 -58 170 -24 C 190 -4 176 22 136 26 C 70 42 -36 40 -108 24 C -150 14 -170 22 -148 8 Z"
        fill={palette.gold}
      />
      {spots.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i % 2 ? 7 : 10} fill={palette.ink} />
      ))}
      <path d="M108 -42 L122 -78 L148 -36 Z" fill={palette.gold} />
      <path d="M116 -46 L126 -68 L142 -40 Z" fill="#a16207" />
      <circle cx="158" cy="-16" r="5.5" fill={palette.ink} />
      <circle cx="160" cy="-18" r="1.6" fill={palette.paper} />
      <circle cx="178" cy="-4" r="4" fill={palette.ink} />
      <path d="M186 -10 L214 -16 M186 -2 L216 2 M184 6 L210 16" stroke={palette.ink} strokeWidth="1.5" strokeLinecap="round" />
      <path
        d={`M-136 6 C-186 ${-36 + swing * 12} -214 ${18 - swing * 14} -246 ${-28 + swing * 10}`}
        fill="none"
        stroke={palette.gold}
        strokeWidth="14"
        strokeLinecap="round"
      />
      {legs.map(([x, y, dir], i) => {
        const kick = swing * 34 * dir
        const kneeX = x + kick * 0.45 + dir * 6
        const kneeY = y + 30
        const footX = x + kick
        const footY = y + 64
        return (
          <g key={i}>
            <path
              d={`M ${x} ${y} Q ${kneeX} ${kneeY} ${footX} ${footY}`}
              fill="none"
              stroke="#e7c56a"
              strokeWidth="14"
              strokeLinecap="round"
            />
            <ellipse cx={footX + 4} cy={footY + 4} rx="16" ry="6" fill="#c9a227" />
          </g>
        )
      })}
    </g>
  )
}

function ThornTree({ frame, lean = 0 }) {
  const sway = Math.sin(frame / 26) * 1.4
  return (
    <g transform={`rotate(${lean + sway})`}>
      <rect x="-16" y="-250" width="32" height="250" rx="10" fill={palette.tealDeep} />
      {[-180, -120, -60].map((y) => (
        <path key={y} d={`M16 ${y} L42 ${y + 14} L16 ${y + 26} Z`} fill={palette.paper} opacity="0.8" />
      ))}
      <circle cx="0" cy="-310" r="108" fill={palette.tealDeep} />
      <circle cx="-78" cy="-250" r="72" fill={palette.teal} />
      <circle cx="86" cy="-246" r="78" fill="#149e90" />
      <circle cx="8" cy="-360" r="48" fill="#5eead4" opacity="0.85" />
    </g>
  )
}

function LeaningPlant({ frame, lean }) {
  const sway = Math.sin(frame / 22) * 1.2
  return (
    <g transform={`rotate(${lean + sway})`}>
      <path d="M0 0 C 18 -90 -10 -170 8 -280" stroke={palette.teal} strokeWidth="16" fill="none" strokeLinecap="round" />
      <ellipse cx="-48" cy="-168" rx="62" ry="20" fill={palette.teal} transform="rotate(-28 -48 -168)" />
      <ellipse cx="54" cy="-214" rx="66" ry="20" fill={palette.tealDeep} transform="rotate(22 54 -214)" />
      <ellipse cx="4" cy="-292" rx="40" ry="16" fill="#5eead4" transform="rotate(-12 4 -292)" />
      <circle cx="0" cy="6" r="10" fill="#a16207" />
    </g>
  )
}

function LivingTree({ frame }) {
  const sway = Math.sin(frame / 24) * 2.2
  return (
    <g transform={`rotate(${sway})`}>
      <rect x="-18" y="-210" width="36" height="210" rx="12" fill="#115e59" />
      <circle cx="-70" cy="-230" r="78" fill={palette.tealDeep} />
      <circle cx="74" cy="-220" r="86" fill={palette.teal} />
      <circle cx="0" cy="-300" r="96" fill="#149e90" />
      <circle cx="16" cy="-250" r="36" fill="#5eead4" opacity="0.55" />
    </g>
  )
}

function Bird({ frame }) {
  const wing = Math.sin(frame / 3.2) * 36
  return (
    <g>
      <path d={`M0 0 Q -70 ${-56 - wing} 16 -8`} fill={palette.teal} />
      <path d={`M0 0 Q -70 ${56 + wing} 16 8`} fill={palette.tealDeep} />
      <ellipse cx="18" cy="0" rx="40" ry="16" fill={palette.paper} />
      <path d="M52 -2 L78 4 L52 10 Z" fill={palette.gold} />
      <circle cx="40" cy="-4" r="3" fill={palette.ink} />
    </g>
  )
}

function Person({ frame }) {
  const breath = 1 + Math.sin(frame / 13) * 0.025
  const arm = Math.sin(frame / 18) * 8
  return (
    <g transform={`scale(${breath})`}>
      <ellipse cx="0" cy="78" rx="46" ry="10" fill="rgba(0,0,0,0.25)" />
      <circle cx="0" cy="-168" r="34" fill={palette.paper} />
      <circle cx="12" cy="-174" r="3" fill={palette.ink} />
      <path d="M-8 -154 Q 8 -146 18 -154" stroke={palette.ink} strokeWidth="2" fill="none" />
      <rect x="-26" y="-128" width="52" height="96" rx="22" fill={palette.teal} />
      <line x1="-26" y1="-104" x2={-78} y2={-36 + arm} stroke={palette.paper} strokeWidth="12" strokeLinecap="round" />
      <line x1="26" y1="-104" x2={74} y2={-48 - arm} stroke={palette.paper} strokeWidth="12" strokeLinecap="round" />
      <line x1="-12" y1="-32" x2="-20" y2="70" stroke={palette.paper} strokeWidth="13" strokeLinecap="round" />
      <line x1="14" y1="-32" x2="24" y2="70" stroke={palette.paper} strokeWidth="13" strokeLinecap="round" />
    </g>
  )
}

function Stone() {
  return (
    <g>
      <ellipse cx="4" cy="28" rx="78" ry="14" fill="rgba(0,0,0,0.28)" />
      <path
        d="M-86 8 C-78 -58 -16 -78 18 -66 C 62 -86 104 -28 86 14 C 64 36 -48 40 -86 8 Z"
        fill={palette.mist}
      />
      <path d="M-24 -36 C 8 -16 22 6 6 22" stroke="rgba(7,20,18,0.35)" strokeWidth="4" fill="none" />
    </g>
  )
}

function LivePulse({ cx, cy, frame, r = 78 }) {
  const t = (frame % 48) / 48
  return (
    <circle
      cx={cx}
      cy={cy}
      r={r + t * 20}
      fill="none"
      stroke={palette.teal}
      strokeWidth="2"
      opacity={(1 - t) * 0.4}
    />
  )
}

function FigureLabel({ x, y, text, opacity, color = palette.paper }) {
  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        transform: 'translateX(-50%)',
        opacity,
        color,
        fontFamily: font,
        fontSize: 28,
        fontWeight: 500,
        whiteSpace: 'nowrap',
        zIndex: 3,
      }}
    >
      {text}
    </div>
  )
}

export function HookCast({ frame, chips, punch }) {
  const tree = clamp01(frame, 36, 52)
  const birdIn = clamp01(frame, 68, 84)
  const you = clamp01(frame, 96, 112)
  const stone = clamp01(frame, 126, 144)
  const line = clamp01(frame, 140, 158)
  const flyX = 690 + Math.sin(frame / 16) * 70
  const flyY = 470 + Math.cos(frame / 12) * 28

  return (
    <AbsoluteFill>
      <Motes frame={frame} />
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" style={{ position: 'absolute', inset: 0 }}>
        <Ground y={900} />
        <g opacity={tree} transform="translate(300 900)">
          <LivePulse cx="0" cy="-250" frame={frame} r="78" />
          <LivingTree frame={frame} />
        </g>
        <g opacity={birdIn} transform={`translate(${flyX} ${flyY})`}>
          <LivePulse cx="20" cy="0" frame={frame} r="36" />
          <Bird frame={frame} />
        </g>
        <g opacity={you} transform="translate(1080 860)">
          <LivePulse cx="0" cy="-80" frame={frame} r="72" />
          <Person frame={frame} />
        </g>
        <g opacity={stone} transform="translate(1580 860)">
          <Stone />
        </g>
      </svg>
      <Glyph icon={Leaf} x={300} y={520} size={54} opacity={tree} />
      <FigureLabel x={300} y={968} text={chips[0]} opacity={tree} />
      <FigureLabel x={flyX + 20} y={flyY + 64} text={chips[1]} opacity={birdIn} />
      <FigureLabel x={1080} y={968} text={chips[2]} opacity={you} />
      <FigureLabel x={1580} y={968} text={punch} opacity={line} color={palette.gold} />
      <Scrim edge="top" />
    </AbsoluteFill>
  )
}

export function NutritionStage({ frame, local }) {
  const stem = 250 + Math.sin(frame / 20) * 6
  const rising = [0, 1, 2, 3, 4].map((i) => {
    const t = ((local * 0.018) + i * 0.2) % 1
    return {
      x: 1040 + Math.sin(t * 8 + i) * 10,
      y: 900 - t * (stem + 80),
      opacity: Math.sin(t * Math.PI),
    }
  })
  const light = [0, 1, 2, 3, 4].map((i) => {
    const t = ((local * 0.016) + i * 0.18) % 1
    return {
      x: 360 + t * 620,
      y: 250 + t * 160 + Math.sin(t * Math.PI) * -30,
      opacity: Math.sin(t * Math.PI),
    }
  })
  const bite = ((local % 70) / 70)

  return (
    <AbsoluteFill>
      <Motes frame={frame} count={10} />
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" style={{ position: 'absolute', inset: 0 }}>
        <SunBurst cx={280} cy={230} frame={frame} r={52} />
        {light.map((dot, i) => (
          <circle key={i} cx={dot.x} cy={dot.y} r="6" fill={palette.gold} opacity={dot.opacity} />
        ))}
        <Ground />
        <g transform="translate(1040 900)">
          <path d="M0 0 C -40 30 -120 36 -180 10" stroke="#115e59" strokeWidth="6" fill="none" strokeLinecap="round" />
          <path d="M0 0 C 36 28 110 34 160 8" stroke="#115e59" strokeWidth="6" fill="none" strokeLinecap="round" />
          <path d={`M0 0 C 8 ${-stem * 0.4} -6 ${-stem * 0.7} 0 ${-stem}`} stroke={palette.tealDeep} strokeWidth="18" fill="none" strokeLinecap="round" />
          <ellipse cx="-70" cy={-stem * 0.45} rx="78" ry="26" fill={palette.teal} transform={`rotate(-32 -70 ${-stem * 0.45})`} />
          <ellipse cx="78" cy={-stem * 0.62} rx="84" ry="26" fill={palette.tealDeep} transform={`rotate(26 78 ${-stem * 0.62})`} />
          <ellipse cx="0" cy={-stem - 10} rx="52" ry="22" fill="#5eead4" />
        </g>
        {rising.map((dot, i) => (
          <circle key={`n-${i}`} cx={dot.x} cy={dot.y} r="7" fill={palette.gold} opacity={dot.opacity} />
        ))}
      </svg>
      <Glyph icon={Sun} x={280} y={230} size={92} color={palette.gold} />
      <Glyph icon={Leaf} x={1040} y={900 - stem - 36} size={120} color={palette.paper} />
      <Glyph
        icon={Apple}
        x={420 + bite * 560}
        y={520 - Math.sin(bite * Math.PI) * 80}
        size={86}
        color={palette.gold}
        opacity={Math.sin(bite * Math.PI)}
        rotate={bite * 40}
      />
      <Scrim />
    </AbsoluteFill>
  )
}

export function RespirationStage({ frame }) {
  const cx = 960
  const cy = 430
  const breath = 1 + Math.sin(frame / 11) * 0.02
  const incoming = [0, 1, 2].map((i) => {
    const t = ((frame * 0.02) + i * 0.33) % 1
    return { x: 160 + t * 520, y: 300 + i * 110, opacity: t < 0.85 ? 1 : 1 - (t - 0.85) / 0.15 }
  })
  const energy = [0, 1, 2, 3].map((i) => {
    const t = ((frame * 0.028) + i * 0.22) % 1
    return {
      x: 1180 + t * 520,
      y: 250 + i * 90 + Math.sin(t * 10 + i) * 16,
      opacity: Math.sin(t * Math.PI),
      scale: 0.7 + t * 0.5,
    }
  })

  return (
    <AbsoluteFill>
      <Motes frame={frame} count={8} />
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" style={{ position: 'absolute', inset: 0 }}>
        <g transform={`translate(${cx} ${cy}) scale(${breath}) translate(${-cx} ${-cy})`}>
          <circle cx={cx} cy={cy} r="250" fill="rgba(45,212,191,0.08)" stroke={palette.teal} strokeWidth="4" />
          <ellipse cx={cx} cy={cy + 10} rx="120" ry="48" fill="rgba(250,204,21,0.16)" stroke={palette.gold} strokeWidth="3" />
          <path
            d={`M${cx - 90} ${cy + 10} Q ${cx - 40} ${cy - 20} ${cx} ${cy + 10} T ${cx + 90} ${cy + 10}`}
            fill="none"
            stroke={palette.gold}
            strokeWidth="3"
          />
        </g>
        {incoming.map((dot, i) => (
          <g key={i} opacity={dot.opacity}>
            <circle cx={dot.x} cy={dot.y} r="22" fill="rgba(45,212,191,0.16)" stroke={palette.teal} />
            <text x={dot.x - 14} y={dot.y + 6} fill={palette.paper} fontFamily={font} fontSize="20" fontWeight="500">
              O<tspan fontSize="13" dy="6">2</tspan>
            </text>
          </g>
        ))}
        {[0, 1].map((i) => {
          const t = ((frame * 0.015) + i * 0.5) % 1
          const y = cy - t * 280
          return (
            <text key={i} x={cx + 40} y={y} fill={palette.mist} fontFamily={font} fontSize="22" opacity={Math.sin(t * Math.PI)}>
              CO<tspan fontSize="14" dy="6">2</tspan>
            </text>
          )
        })}
      </svg>
      <Glyph icon={Wind} x={180} y={210} size={72} />
      <Glyph icon={Flame} x={cx} y={cy + 8} size={64} color={palette.gold} scale={breath} />
      {energy.map((dot, i) => (
        <Glyph key={i} icon={Zap} x={dot.x} y={dot.y} size={54} color={palette.gold} opacity={dot.opacity} scale={dot.scale} />
      ))}
      <Scrim />
    </AbsoluteFill>
  )
}

export function MovementStage({ frame, local, duration }) {
  const travel = clamp01(local, 8, duration * 0.72)
  const x = 220 + travel * 860
  const lean = interpolate(local, [duration * 0.12, duration * 0.7], [0, 28], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  })

  return (
    <AbsoluteFill>
      <Motes frame={frame} />
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" style={{ position: 'absolute', inset: 0 }}>
        <SunBurst cx={1680} cy={160} frame={frame} r={40} />
        <Ground y={760} />
        <g transform={`translate(${x} 680)`}>
          <Leopard frame={frame} run={1} />
        </g>
        <g transform="translate(1560 760)">
          <LeaningPlant frame={frame} lean={lean} />
        </g>
      </svg>
      {Array.from({ length: 7 }, (_, i) => {
        const along = (i + 1) / 8
        const seen = clamp01(travel, along - 0.08, along + 0.02)
        return (
          <Glyph
            key={i}
            icon={Footprints}
            x={180 + along * 860}
            y={730 + (i % 2) * 16}
            size={36}
            color={palette.paper}
            opacity={seen * 0.85}
            rotate={-8}
          />
        )
      })}
      <Glyph icon={Sun} x={1680} y={160} size={84} color={palette.gold} />
      <Scrim />
    </AbsoluteFill>
  )
}

export function ExcretionStage({ frame, local }) {
  const cx = 960
  const cy = 420
  const blobs = Array.from({ length: 8 }, (_, i) => {
    const t = ((local * 0.012) + i * 0.125) % 1
    const angle = (i / 8) * Math.PI * 2 + 0.4
    const dist = 30 + t * 390
    const fadeIn = Math.min(1, t / 0.12)
    const fadeOut = t > 0.72 ? 1 - (t - 0.72) / 0.28 : 1
    return {
      x: cx + Math.cos(angle) * dist,
      y: cy + Math.sin(angle) * dist * 0.72,
      opacity: fadeIn * fadeOut,
      scale: 0.6 + t * 0.8,
    }
  })

  return (
    <AbsoluteFill>
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" style={{ position: 'absolute', inset: 0 }}>
        <circle cx={cx} cy={cy} r={230 + Math.sin(frame / 14) * 4} fill="rgba(45,212,191,0.08)" stroke={palette.teal} strokeWidth="4" />
        <circle cx={cx} cy={cy} r="54" fill="rgba(154,171,166,0.25)" />
        {blobs.map((blob, i) => (
          <circle key={i} cx={blob.x} cy={blob.y} r="16" fill={i % 2 ? palette.mist : '#d7e0dc'} opacity={blob.opacity} />
        ))}
      </svg>
      {blobs.filter((_, i) => i % 2 === 0).map((blob, i) => (
        <Glyph
          key={i}
          icon={Droplets}
          x={blob.x}
          y={blob.y}
          size={48}
          color={palette.paper}
          opacity={blob.opacity}
          scale={blob.scale}
        />
      ))}
      <Scrim />
    </AbsoluteFill>
  )
}

export function GrowthStage({ frame, local, duration }) {
  const grow = clamp01(local, 0, duration * 0.86)
  const stem = 36 + grow * 430
  const cells = Math.min(8, Math.floor(grow * 9))

  return (
    <AbsoluteFill>
      <Motes frame={frame} count={8} />
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" style={{ position: 'absolute', inset: 0 }}>
        <Ground y={740} />
        <g transform="translate(860 740)">
          <ellipse cx="0" cy="8" rx={28 - grow * 10} ry="12" fill="#a16207" opacity={1 - grow * 0.4} />
          <path
            d={`M0 0 C 6 ${-stem * 0.45} -4 ${-stem * 0.75} 0 ${-stem}`}
            stroke={palette.tealDeep}
            strokeWidth={10 + grow * 8}
            fill="none"
            strokeLinecap="round"
          />
          {grow > 0.28 && (
            <ellipse cx="-56" cy={-stem * 0.42} rx={70 * Math.min(1, (grow - 0.28) / 0.3)} ry="20" fill={palette.teal} transform={`rotate(-30 -56 ${-stem * 0.42})`} />
          )}
          {grow > 0.48 && (
            <ellipse cx="60" cy={-stem * 0.62} rx={74 * Math.min(1, (grow - 0.48) / 0.3)} ry="20" fill={palette.tealDeep} transform={`rotate(24 60 ${-stem * 0.62})`} />
          )}
        </g>
        {Array.from({ length: cells }, (_, i) => (
          <g key={i}>
            <circle cx={1240 + (i % 4) * 78} cy={500 + Math.floor(i / 4) * 78} r="26" fill="rgba(45,212,191,0.1)" stroke={palette.teal} strokeWidth="2" />
            <circle cx={1240 + (i % 4) * 78} cy={500 + Math.floor(i / 4) * 78} r="8" fill={palette.gold} />
          </g>
        ))}
      </svg>
      <Glyph icon={Sprout} x={860} y={740 - stem - 28} size={72 + grow * 36} color={palette.paper} />
      <Scrim />
    </AbsoluteFill>
  )
}

export function ReproductionStage({ frame, local, duration }) {
  const split = clamp01(local, duration * 0.12, duration * 0.68)
  const sep = split * 280
  const pulse = 1 + Math.sin(frame / 12) * 0.015
  const parent = 960 - sep
  const child = 960 + sep

  return (
    <AbsoluteFill>
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" style={{ position: 'absolute', inset: 0 }}>
        {split < 0.92 && (
          <ellipse cx="960" cy="450" rx={150 * (1 - split)} ry="46" fill="rgba(45,212,191,0.18)" />
        )}
        <g transform={`translate(${parent} 450) scale(${pulse})`}>
          <circle r="148" fill="rgba(45,212,191,0.1)" stroke={palette.teal} strokeWidth="4" />
          <circle r="74" fill={palette.gold} />
          <NucleusHelix />
        </g>
        <g transform={`translate(${child} 450) scale(${0.7 + split * 0.3})`} opacity={split}>
          <circle r="148" fill="rgba(45,212,191,0.1)" stroke={palette.teal} strokeWidth="4" />
          <circle r="74" fill={palette.gold} />
          <NucleusHelix />
        </g>
      </svg>
      <Scrim />
    </AbsoluteFill>
  )
}

export function SensitivityStage({ frame, local, duration }) {
  const light = clamp01(local, 6, duration * 0.5)
  const pupil = 36 - light * 18
  const blink = Math.pow(Math.max(0, Math.sin(frame / 21)), 16)
  const lid = blink * 78
  const cx = 1240
  const cy = 440

  return (
    <AbsoluteFill>
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" style={{ position: 'absolute', inset: 0 }}>
        <SunBurst cx={340} cy={300} frame={frame} r={36 + light * 16} />
        {Array.from({ length: 7 }, (_, i) => {
          const t = ((frame * 0.02) + i * 0.12) % 1
          const x = 460 + t * 620
          const y = 320 + Math.sin(t * Math.PI) * 40 + t * 60
          return <circle key={i} cx={x} cy={y} r="6" fill={palette.gold} opacity={Math.sin(t * Math.PI) * light} />
        })}
        <path d="M480 340 C 760 300, 980 360, 1100 440" fill="none" stroke={palette.teal} strokeWidth="2" strokeDasharray="8 10" opacity={light} />
        <g clipPath="url(#answer-eye)">
          <ellipse cx={cx} cy={cy} rx="168" ry="86" fill={palette.paper} />
          <circle cx={cx} cy={cy} r="78" fill={palette.teal} />
          <circle cx={cx + light * 10} cy={cy} r={pupil} fill={palette.ink} />
          <circle cx={cx - 16 + light * 10} cy={cy - 16} r="8" fill={palette.paper} />
          <rect x={cx - 180} y={cy - 100} width="360" height={lid} fill={palette.ink} />
          <rect x={cx - 180} y={cy + 100 - lid} width="360" height={lid} fill={palette.ink} />
        </g>
        <clipPath id="answer-eye">
          <ellipse cx={cx} cy={cy} rx="168" ry="86" />
        </clipPath>
      </svg>
      <Glyph icon={Sun} x={340} y={300} size={78} color={palette.gold} />
      <Glyph
        icon={Zap}
        x={760}
        y={360}
        size={64}
        color={palette.gold}
        opacity={light}
        scale={0.8 + Math.sin(frame / 6) * 0.08}
      />
      <Scrim />
    </AbsoluteFill>
  )
}

export function SevenAlive({ frame, items }) {
  return (
    <AbsoluteFill>
      <Motes frame={frame} count={16} />
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" style={{ position: 'absolute', inset: 0 }}>
        {items.map((item, i) => {
          const x = 180 + i * 250
          const y = 430 + Math.sin(frame / 14 + i) * 12
          return (
            <g key={item.word} transform={`translate(${x} ${y})`}>
              <LivePulse cx="0" cy="0" frame={frame + i * 6} r="78" />
              <circle r="78" fill="rgba(45,212,191,0.1)" stroke={palette.teal} strokeWidth="2" />
            </g>
          )
        })}
      </svg>
      {items.map((item, i) => {
        const Icon = TRAIT_ICONS[item.word] || Leaf
        const x = 180 + i * 250
        const y = 430 + Math.sin(frame / 14 + i) * 12
        return (
          <div key={item.word}>
            <Glyph icon={Icon} x={x} y={y} size={64} />
            <div
              style={{
                position: 'absolute',
                left: x,
                top: y + 96,
                transform: 'translateX(-50%)',
                color: palette.paper,
                fontFamily: font,
                fontSize: 22,
                fontWeight: 500,
                whiteSpace: 'nowrap',
              }}
            >
              {item.word}
            </div>
          </div>
        )
      })}
      <Scrim />
    </AbsoluteFill>
  )
}

export function EcologyStage({ frame, items }) {
  const draw = clamp01(frame, 8, 50)
  const places = {
    Leopard: { x: 1520, y: 590 },
    'Thorn tree': { x: 700, y: 500 },
    'Food web': { x: 1080, y: 420 },
    Ecology: { x: 250, y: 560 },
  }
  const links = [
    ['Thorn tree', 'Leopard'],
    ['Thorn tree', 'Food web'],
    ['Leopard', 'Food web'],
    ['Food web', 'Ecology'],
    ['Thorn tree', 'Ecology'],
  ]

  return (
    <AbsoluteFill>
      <Motes frame={frame} />
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" style={{ position: 'absolute', inset: 0 }}>
        <SunBurst cx={1660} cy={170} frame={frame} r={42} />
        <Ground y={900} />
        <g transform="translate(700 900)">
          <ThornTree frame={frame} lean={2} />
        </g>
        <g transform={`translate(${860 + Math.sin(frame / 18) * 16} ${390 + Math.cos(frame / 14) * 10})`}>
          <Bird frame={frame} />
        </g>
        <g transform="translate(1240 720)">
          <Leopard frame={frame} run={0.35} />
        </g>
        {links.map(([from, to]) => {
          const a = places[from]
          const b = places[to]
          const length = Math.hypot(b.x - a.x, b.y - a.y)
          return (
            <line
              key={`${from}-${to}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke={palette.teal}
              strokeWidth="2"
              strokeDasharray={length}
              strokeDashoffset={length * (1 - draw)}
              opacity="0.8"
            />
          )
        })}
      </svg>
      <Glyph icon={Sun} x={1660} y={170} size={84} color={palette.gold} />
      {items.map((item) => {
        const place = places[item.label]
        if (!place) return null
        return (
          <div
            key={item.label}
            style={{
              position: 'absolute',
              left: place.x,
              top: place.y,
              transform: `translate(-50%, -50%) scale(${0.92 + draw * 0.08})`,
              opacity: draw,
              borderRadius: 999,
              padding: '10px 18px',
              background: 'rgba(7,20,18,0.82)',
              border: `1px solid ${palette.teal}`,
              color: palette.paper,
              fontFamily: font,
              fontSize: 24,
              fontWeight: 500,
              whiteSpace: 'nowrap',
              zIndex: 3,
            }}
          >
            {item.label}
          </div>
        )
      })}
      <Scrim />
    </AbsoluteFill>
  )
}

export function CellStage({ frame, nucleus = 0 }) {
  const cx = 960
  const cy = 420
  const pulse = 1 + Math.sin(frame / 15) * 0.015
  const genes = [
    [730, 280], [1160, 300], [800, 560], [1200, 540],
    [900, 240], [1080, 600], [680, 430], [1260, 400],
  ]

  return (
    <AbsoluteFill>
      <Motes frame={frame} count={8} />
      <svg width="1920" height="1080" viewBox="0 0 1920 1080" style={{ position: 'absolute', inset: 0 }}>
        <g transform={`translate(${cx} ${cy}) scale(${pulse}) translate(${-cx} ${-cy})`}>
          <circle cx={cx} cy={cy} r="280" fill="rgba(45,212,191,0.08)" stroke={palette.teal} strokeWidth="4" />
          <ellipse cx={cx - 150} cy={cy + 70} rx="34" ry="14" fill="rgba(244,247,246,0.35)" transform={`rotate(-18 ${cx - 150} ${cy + 70})`} />
          <ellipse cx={cx + 160} cy={cy - 90} rx="28" ry="12" fill="rgba(45,212,191,0.75)" />
          <circle cx={cx} cy={cy} r={120 * nucleus} fill={palette.gold} opacity={Math.max(nucleus, 0)} />
          {genes.map(([x, y], i) => {
            const angle = (i / genes.length) * Math.PI * 2 - Math.PI / 2
            const homeX = cx + Math.cos(angle) * 48
            const homeY = cy + Math.sin(angle) * 48
            const driftX = Math.sin(frame / 17 + i) * (1 - nucleus) * 18
            const driftY = Math.cos(frame / 14 + i) * (1 - nucleus) * 14
            const gx = x + (homeX - x) * nucleus + driftX
            const gy = y + (homeY - y) * nucleus + driftY
            return (
              <circle
                key={i}
                cx={gx}
                cy={gy}
                r="11"
                fill={nucleus > 0.55 ? palette.ink : palette.paper}
              />
            )
          })}
        </g>
      </svg>
      <Scrim />
    </AbsoluteFill>
  )
}

function BaseLetter({ letter, hot, dim }) {
  return (
    <div
      style={{
        width: 78,
        height: 92,
        borderRadius: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: font,
        fontSize: 36,
        fontWeight: 500,
        color: hot ? '#042f2e' : palette.paper,
        background: hot ? palette.gold : 'rgba(45,212,191,0.1)',
        border: `1px solid ${hot ? palette.gold : 'rgba(45,212,191,0.45)'}`,
        opacity: dim ? 0.28 : 1,
      }}
    >
      {letter}
    </div>
  )
}

function Tape({ letters, hotIndex = -1, hotSet, reveal }) {
  return (
    <div style={{ display: 'flex', gap: 10 }}>
      {letters.map((letter, i) => (
        <BaseLetter
          key={`${i}-${letter}`}
          letter={letter}
          hot={hotSet ? hotSet.has(i) : hotIndex === i}
          dim={reveal != null && i >= reveal}
        />
      ))}
    </div>
  )
}

export function RecipeBeat({ frame, index, local, span }) {
  const bases = ['A', 'T', 'G', 'C', 'C', 'A', 'T', 'G', 'A', 'A']
  const evolved = ['A', 'T', 'G', 'G', 'C', 'A', 'C', 'G', 'A', 'T']
  const changed = new Set([3, 6, 9])

  if (index === 0) {
    const hotIndex = Math.floor(frame / 7) % bases.length
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        <Tape letters={bases} hotIndex={hotIndex} />
      </div>
    )
  }

  if (index === 1) {
    const reveal = Math.round(interpolate(local, [0, span * 0.8], [0, bases.length], {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }))
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
        <Tape letters={bases} hotIndex={-1} />
        <div style={{ color: palette.teal, fontFamily: font, fontSize: 22, fontWeight: 500 }}>passed on</div>
        <Tape letters={bases} hotIndex={-1} reveal={reveal} />
      </div>
    )
  }

  const flips = Math.round(interpolate(local, [0, span * 0.8], [0, changed.size], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  }))
  const flipped = new Set([...changed].slice(0, flips))
  const letters = bases.map((letter, i) => (flipped.has(i) ? evolved[i] : letter))

  return <Tape letters={letters} hotSet={flipped} />
}

export const TRAIT_STAGES = {
  Nutrition: NutritionStage,
  Respiration: RespirationStage,
  Movement: MovementStage,
  Excretion: ExcretionStage,
  Growth: GrowthStage,
  Reproduction: ReproductionStage,
  Sensitivity: SensitivityStage,
}
