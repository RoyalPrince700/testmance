/**
 * BIO 101 chapter 1 motion.
 *
 * Same shape as the course intro in bio101.motion.js: one beat sheet,
 * the explainer only animates it. This film summarises chapter 1
 * (characteristics of life, classification, the cell, genes).
 *
 * Voice lengths come from public/motion/bio101/chapter1/*.mp3.
 */

import { bio101Motion } from './bio101.motion.js'

const FPS = 30
const LEAD = 8
const PAD = 8

const EFFECTS = {
  chime: { frames: 65 },
  click: { frames: 42 },
  ding: { frames: 38 },
  fanfare: { frames: 95 },
  pop: { frames: 6 },
  scroll: { frames: 45 },
  sparkle: { frames: 45 },
  swoosh: { frames: 44 },
}

const scenes = [
  {
    id: 'hook',
    visual: 'hook',
    kicker: 'Chapter 1',
    headline: 'What makes it alive?',
    chips: ['A tree', 'A bird', 'You'],
    punch: 'A stone is not alive.',
    caption: 'Biology studies living things: what they do, how, and why.',
    voice: { id: 'hook', frames: 272 },
  },
  {
    id: 'traits',
    visual: 'traits',
    kicker: 'Seven signs of life',
    headline: 'Only the living do all seven.',
    caption: 'Only the living do all seven.',
    outroWeight: 7,
    voice: { id: 'traits', frames: 738 },
    items: [
      { word: 'Nutrition', line: 'Plants make food. Animals eat it.', weight: 12 },
      { word: 'Respiration', line: 'Release energy.', weight: 3 },
      { word: 'Movement', line: 'A leopard runs. A plant still leans.', weight: 8 },
      { word: 'Excretion', line: 'Waste leaves the body.', weight: 3 },
      { word: 'Growth', line: 'New cells, for good.', weight: 3 },
      { word: 'Reproduction', line: 'Life makes life.', weight: 4 },
      { word: 'Sensitivity', line: 'The body answers.', weight: 4 },
    ],
  },
  {
    id: 'ladder',
    visual: 'steps',
    voice: { id: 'ladder', frames: 373 },
    items: [
      { stage: 'ranks', word: 'Ranks', line: 'Sort them from kingdom to species.', say: 'Sort them from kingdom to species. ', accent: 'scroll' },
      { stage: 'species', word: 'Species', line: 'A species can breed fertile young.', say: 'A species can breed fertile young. ', accent: 'pop' },
      { stage: 'artificial', word: 'Artificial', line: 'One easy trait is artificial.', say: 'One easy trait is artificial. ', accent: 'click' },
      { stage: 'kinship', word: 'Kinship', line: 'Real kinship is natural.', say: 'Real kinship is natural. ', accent: 'ding' },
      { stage: 'taxonomy', word: 'Taxonomy', line: 'Naming them is taxonomy.', say: 'Naming them is taxonomy.', accent: 'sparkle' },
    ],
  },
  {
    id: 'cell',
    visual: 'steps',
    voice: { id: 'cell', frames: 397 },
    items: [
      { stage: 'made', word: 'Cells', line: 'Life is made of cells.', say: 'Life is made of cells, ', accent: 'swoosh' },
      { stage: 'divide', word: 'Division', line: 'New cells come from old cells.', say: 'and new cells come from old cells. ', accent: 'pop' },
      { stage: 'prokaryote', word: 'Prokaryote', line: 'No nucleus: prokaryote.', say: 'No nucleus: prokaryote. ', accent: 'click' },
      { stage: 'eukaryote', word: 'Eukaryote', line: 'A nucleus: eukaryote.', say: 'A nucleus: eukaryote. ', accent: 'ding' },
      { stage: 'small', word: 'Stay small', line: 'Cells stay small so materials can cross in time.', say: 'Cells stay small so materials can cross in time.', accent: 'sparkle' },
    ],
  },
  {
    id: 'genes',
    visual: 'steps',
    voice: { id: 'genes', frames: 373 },
    items: [
      { stage: 'dna', word: 'DNA', line: 'Genes are instructions in DNA.', say: 'Genes are instructions in DNA, ', accent: 'pop' },
      { stage: 'chromosome', word: 'Chromosome', line: 'On chromosomes.', say: 'on chromosomes, ', accent: 'click' },
      { stage: 'parents', word: 'Parents', line: 'One set from each parent.', say: 'one set from each parent. ', accent: 'swoosh' },
      { stage: 'genotype', word: 'Genotype', line: 'The set is the genotype.', say: 'The set is the genotype. ', accent: 'pop' },
      { stage: 'phenotype', word: 'Phenotype', line: 'What you show is the phenotype.', say: 'What you show is the phenotype. ', accent: 'sparkle' },
      { stage: 'mutation', word: 'Mutation', line: 'A changed letter is a mutation.', say: 'A changed letter is a mutation.', accent: 'ding' },
    ],
  },
  {
    id: 'close',
    visual: 'close',
    kicker: 'Chapter 1',
    headline: 'Alive, named, built of cells.',
    caption: 'Seven signs. A name. A cell.',
    voice: { id: 'close', frames: 99 },
    items: [
      { n: '01', title: 'Seven signs of life' },
      { n: '02', title: 'Kingdom to species' },
      { n: '03', title: 'Cells and genes' },
    ],
  },
]

function assignSpeechBeats(scene) {
  if (!scene.items?.some((item) => item.say)) return
  const voice = scene.voice.frames
  const weightOf = (item, index) => {
    const breath = index < scene.items.length - 1 && /[.]/.test(item.say) ? 6 : 0
    return item.say.length + breath
  }
  const total = scene.items.reduce((sum, item, index) => sum + weightOf(item, index), 0)
  let cursor = 0
  scene.items.forEach((item, index) => {
    const isLast = index === scene.items.length - 1
    if (isLast) {
      item.frames = Math.max(1, scene.duration - cursor)
      return
    }
    const share = Math.max(1, Math.round((voice * weightOf(item, index)) / total))
    item.frames = index === 0 ? LEAD + share : share
    cursor += item.frames
  })
}

function assignWeightedBeats(scene) {
  if (!Array.isArray(scene.items)) return
  const parts = scene.items
    .filter((item) => item && item.weight)
    .map((item) => ({ item, weight: item.weight }))
  if (scene.outroWeight) parts.push({ outro: true, weight: scene.outroWeight })
  if (!parts.length) return

  const total = parts.reduce((sum, part) => sum + part.weight, 0)
  let used = 0
  parts.forEach((part, index) => {
    const frames = index === parts.length - 1
      ? Math.max(1, scene.duration - used)
      : Math.max(1, Math.round((scene.duration * part.weight) / total))
    if (part.outro) scene.outroAt = used
    else part.item.frames = frames
    used += frames
  })
}

const audio = []
let cursor = 0

for (const scene of scenes) {
  scene.from = cursor
  audio.push({
    id: scene.voice.id,
    src: `motion/bio101/chapter1/${scene.voice.id}.mp3`,
    from: cursor + LEAD,
    durationInFrames: scene.voice.frames,
  })
  scene.duration = LEAD + scene.voice.frames + PAD
  if (scene.switchAtRatio != null) {
    scene.switchAt = Math.round(scene.duration * scene.switchAtRatio)
  }
  assignWeightedBeats(scene)
  assignSpeechBeats(scene)
  cursor += scene.duration
}

const effects = []

function addEffect(id, name, from, volume = 0.32) {
  const clip = EFFECTS[name]
  effects.push({
    id,
    src: `motion/effects/${name}.wav`,
    from,
    durationInFrames: clip.frames,
    volume,
  })
}

for (const scene of scenes) {
  if (scene.id === 'hook') {
    addEffect('ch1-hook-open', 'chime', scene.from, 0.2)
    addEffect('ch1-hook-tree', 'pop', scene.from + 36, 0.42)
    addEffect('ch1-hook-bird', 'pop', scene.from + 68, 0.42)
    addEffect('ch1-hook-you', 'pop', scene.from + 96, 0.42)
    addEffect('ch1-hook-stone', 'click', scene.from + 126, 0.2)
  }

  if (scene.id === 'traits') {
    let offset = 0
    for (const item of scene.items) {
      const accent = item.word === 'Movement'
        ? 'swoosh'
        : item.word === 'Growth'
          ? 'sparkle'
          : item.word === 'Sensitivity'
            ? 'ding'
            : 'pop'
      addEffect(`ch1-trait-${item.word.toLowerCase()}`, accent, scene.from + offset, accent === 'pop' ? 0.42 : 0.26)
      offset += item.frames
    }
    addEffect('ch1-trait-seven', 'sparkle', scene.from + scene.outroAt, 0.28)
  }

  if (scene.visual === 'steps') {
    let offset = 0
    scene.items.forEach((item) => {
      const accent = item.accent || 'pop'
      addEffect(
        `ch1-${scene.id}-${item.stage}`,
        accent,
        scene.from + offset,
        accent === 'pop' ? 0.36 : 0.24,
      )
      offset += item.frames
    })
  }
  if (scene.id === 'close') addEffect('ch1-close', 'fanfare', scene.from + 6, 0.14)
}

export const bio101Chapter1 = {
  id: 'BIO101Chapter1',
  courseCode: 'BIO 101',
  chapterOrder: 1,
  mark: 'BIO 101 · 01',
  title: 'What makes it alive?',
  summary: 'A short film of chapter 1: the signs of life, how we name them, and the cell.',
  fps: FPS,
  width: 1920,
  height: 1080,
  durationInFrames: cursor,
  audio,
  effects,
  music: bio101Motion.music,
  palette: bio101Motion.palette,
  script: `Chapter one. Biology studies living things. What they do, how, and why. A stone is not alive.

Seven activities set life apart. Nutrition: plants make food, animals eat it. Respiration releases energy. A leopard runs. A plant still leans. Excretion clears waste. Growth adds cells. Reproduction makes new life. Sensitivity answers the world. Only the living do all seven.

Sort them from kingdom to species. A species can breed fertile young. One easy trait is artificial. Real kinship is natural. Naming them is taxonomy.

Life is made of cells, and new cells come from old cells. No nucleus: prokaryote. A nucleus: eukaryote. Cells stay small so materials can cross in time.

Genes are instructions in DNA, on chromosomes, one set from each parent. The set is the genotype. What you show is the phenotype. A changed letter is a mutation.

Alive, named, and built of cells.`,
  scenes,
}
