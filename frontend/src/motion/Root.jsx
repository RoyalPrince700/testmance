import { Composition } from 'remotion'
import { Bio101Explainer } from './Bio101Explainer.jsx'
import { bio101Motion } from '../pages/bio101/motion/bio101.motion.js'
import { bio101Chapter1 } from '../pages/bio101/motion/bio101-chapter1.motion.js'

const films = [bio101Motion, bio101Chapter1]

export const RemotionRoot = () => {
  return (
    <>
      {films.map((film) => (
        <Composition
          key={film.id}
          id={film.id}
          component={Bio101Explainer}
          defaultProps={{ motion: film }}
          durationInFrames={film.durationInFrames}
          fps={film.fps}
          width={film.width}
          height={film.height}
        />
      ))}
    </>
  )
}
