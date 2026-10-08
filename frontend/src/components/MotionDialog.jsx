import { useEffect } from 'react'
import { Player } from '@remotion/player'
import { X } from 'lucide-react'
import { Bio101Explainer } from '../motion/Bio101Explainer.jsx'

export default function MotionDialog({ resource, onClose }) {
  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previous
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  const seconds = Math.round(resource.durationInFrames / resource.fps)

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-[#071412]/80 p-4 sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-label={resource.title}
      onClick={onClose}
    >
      <div
        className="w-full max-w-5xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-3 flex items-end justify-between gap-4 text-white">
          <div>
            <p className="text-sm font-medium text-[#5eead4]">{resource.mark || resource.courseCode}</p>
            <h2 className="mt-1 text-xl font-medium tracking-[-0.02em]">{resource.title}</h2>
            <p className="mt-1 text-sm text-white/70">{seconds} seconds</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 items-center gap-2 rounded-full border border-white/20 px-4 text-sm font-medium text-white hover:bg-white/10"
          >
            <X className="h-4 w-4" strokeWidth={1.75} />
            Close
          </button>
        </div>
        <div className="overflow-hidden rounded-3xl border border-white/15 bg-[#071412]">
          <div style={{ aspectRatio: `${resource.width} / ${resource.height}` }}>
            <Player
              component={Bio101Explainer}
              inputProps={{ motion: resource }}
              durationInFrames={resource.durationInFrames}
              compositionWidth={resource.width}
              compositionHeight={resource.height}
              fps={resource.fps}
              autoPlay
              controls
              clickToPlay
              showVolumeControls
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
