import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { EdgeTTS } from 'node-edge-tts'
import { parseFile } from 'music-metadata'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const outDir = path.join(root, 'public', 'motion', 'bio101')
const fps = 30
const padFrames = 8

const lines = [
  { id: 'hook', text: 'What is alive? A tree, a bird, you. A stone is not alive.' },
  { id: 'trait-nutrition', text: 'Nutrition. Take in food.' },
  { id: 'trait-respiration', text: 'Respiration. Release energy.' },
  { id: 'trait-movement', text: 'Movement. A leopard runs. A plant still leans.' },
  { id: 'trait-excretion', text: 'Excretion. Waste leaves the cell.' },
  { id: 'trait-growth', text: 'Growth. New cells, for good.' },
  { id: 'trait-reproduction', text: 'Reproduction. Life makes life.' },
  { id: 'trait-sensitivity', text: 'Sensitivity. The body answers.' },
  { id: 'trait-close', text: 'Only a living thing does all seven.' },
  { id: 'ladder', text: 'Then we name them. Kingdom, phylum, class, order, family, genus, species.' },
  { id: 'web', text: 'Nothing lives alone. Ecology is the study of that home.' },
  { id: 'cell', text: 'Life starts in a cell. Prokaryotes have no nucleus. Eukaryotes keep their genes in one.' },
  { id: 'genes', text: 'Genes are the recipe. Heredity passes it on. Evolution rewrites what works.' },
  { id: 'close', text: 'Biology One. Six chapters. Start with what is alive.' },
]

const tts = new EdgeTTS({
  voice: 'en-NG-EzinneNeural',
  lang: 'en-NG',
  outputFormat: 'audio-24khz-48kbitrate-mono-mp3',
  rate: '+8%',
  pitch: '+0Hz',
  timeout: 30000,
})

await mkdir(outDir, { recursive: true })

const cues = []
for (const line of lines) {
  const file = `${line.id}.mp3`
  const absolute = path.join(outDir, file)
  await tts.ttsPromise(line.text, absolute)
  const metadata = await parseFile(absolute)
  const seconds = metadata.format.duration
  const frames = Math.ceil(seconds * fps)
  cues.push({
    id: line.id,
    src: `motion/bio101/${file}`,
    seconds: Number(seconds.toFixed(2)),
    frames,
    hold: frames + padFrames,
    text: line.text,
  })
  console.log(`${line.id}\t${seconds.toFixed(2)}s\t${frames}f`)
}

await writeFile(path.join(outDir, 'cues.json'), JSON.stringify(cues, null, 2))
console.log('wrote', path.join(outDir, 'cues.json'))
