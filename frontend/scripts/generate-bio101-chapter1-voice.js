import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { EdgeTTS } from 'node-edge-tts'
import { parseFile } from 'music-metadata'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const outDir = path.join(root, 'public', 'motion', 'bio101', 'chapter1')
const fps = 30

const lines = [
  { id: 'hook', text: 'Chapter one. Biology studies living things. What they do, how, and why. A stone is not alive.' },
  { id: 'traits', text: 'Seven activities set life apart. Nutrition: plants make food, animals eat it. Respiration releases energy. A leopard runs. A plant still leans. Excretion clears waste. Growth adds cells. Reproduction makes new life. Sensitivity answers the world. Only the living do all seven.' },
  { id: 'ladder', text: 'Sort them from kingdom to species. A species can breed fertile young. One easy trait is artificial. Real kinship is natural. Naming them is taxonomy.' },
  { id: 'cell', text: 'Life is made of cells, and new cells come from old cells. No nucleus: prokaryote. A nucleus: eukaryote. Cells stay small so materials can cross in time.' },
  { id: 'genes', text: 'Genes are instructions in DNA, on chromosomes, one set from each parent. The set is the genotype. What you show is the phenotype. A changed letter is a mutation.' },
  { id: 'close', text: 'Alive, named, and built of cells.' },
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
    src: `motion/bio101/chapter1/${file}`,
    seconds: Number(seconds.toFixed(2)),
    frames,
    text: line.text,
  })
  console.log(`${line.id}\t${seconds.toFixed(2)}s\t${frames}f`)
}

await writeFile(path.join(outDir, 'cues.json'), JSON.stringify(cues, null, 2))
console.log('wrote', path.join(outDir, 'cues.json'))
