import { Bio101Explainer } from '../motion/Bio101Explainer.jsx'
import { getMotionResource } from '../motion/catalog.js'
import MotionPlayer from './MotionPlayer.jsx'

const PLAYERS = {
  'BIO 101': Bio101Explainer,
}

export default function CourseMotion({ courseCode }) {
  const resource = getMotionResource(courseCode)
  const Component = PLAYERS[resource?.courseCode]
  if (!resource || !Component) return null

  const seconds = Math.round(resource.durationInFrames / resource.fps)

  return (
    <section className="mx-auto max-w-6xl px-5 pt-12 md:px-8" aria-label="Course motion">
      <p className="text-sm font-medium text-accent">Motion</p>
      <h2 className="mt-3 max-w-2xl text-3xl font-medium tracking-[-0.02em] text-ink md:text-5xl md:leading-[1.1]">
        {resource.title}
      </h2>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-graphite">
        {resource.summary} {seconds} seconds.
      </p>
      <div className="mt-8 overflow-hidden rounded-3xl border border-line">
        <div style={{ aspectRatio: `${resource.width} / ${resource.height}` }}>
          <MotionPlayer resource={resource} component={Component} />
        </div>
      </div>
      {/* <details className="mt-4 rounded-2xl border border-line bg-surface px-5 py-4">
        <summary className="cursor-pointer text-sm font-medium text-ink">Read the script</summary>
        <p className="mt-3 whitespace-pre-wrap text-[15px] leading-relaxed text-graphite">
          {resource.script}
        </p>
      </details> */}
    </section>
  )
}
