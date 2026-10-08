import { useEffect, useState } from 'react'
import { Player } from '@remotion/player'
import { prefetch, staticFile } from 'remotion'

function mediaSources(resource) {
  const sources = []
  if (resource.music?.src) sources.push(resource.music.src)
  for (const cue of resource.audio ?? []) sources.push(cue.src)
  for (const cue of resource.effects ?? []) sources.push(cue.src)
  return [...new Set(sources)]
}

function contentType(src) {
  if (src.endsWith('.mp3')) return 'audio/mpeg'
  if (src.endsWith('.wav')) return 'audio/wav'
  return undefined
}

export default function MotionPlayer({ resource, component: Component, autoPlay = false }) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    let cancelled = false
    const jobs = mediaSources(resource).map((src) => prefetch(staticFile(src), {
      method: 'blob-url',
      contentType: contentType(src),
    }))

    Promise.all(jobs.map((job) => job.waitUntilDone()))
      .catch(() => {})
      .finally(() => {
        if (!cancelled) setReady(true)
      })

    return () => {
      cancelled = true
      for (const job of jobs) job.free()
    }
  }, [resource])

  if (!ready) {
    return (
      <div
        className="flex h-full w-full items-center justify-center bg-[#071412] text-sm text-[#9aaba6]"
        role="status"
      >
        Preparing playback
      </div>
    )
  }

  return (
    <Player
      component={Component}
      inputProps={{ motion: resource }}
      durationInFrames={resource.durationInFrames}
      compositionWidth={resource.width}
      compositionHeight={resource.height}
      fps={resource.fps}
      autoPlay={autoPlay}
      controls
      clickToPlay
      showVolumeControls
      numberOfSharedAudioTags={8}
      audioLatencyHint="interactive"
      bufferStateDelayInMilliseconds={150}
      style={{ width: '100%', height: '100%' }}
    />
  )
}
