/**
 * BIO 101 motion resource.
 *
 * The film reads this file for copy, color, and timing. Scenes do not
 * hardcode the lesson. Same idea as the Flier Studio Remotion pipeline
 * in the graphics project: one beat sheet, compositions only animate it.
 *
 * Written from the BIO 101 chapters:
 * characteristics of life, classification, interrelationships,
 * ecology, the cell, genes, heredity and evolution.
 *
 * To add another course, copy this shape and register the code in
 * src/motion/catalog.js.
 *
 * Scene fields: id, visual, duration, kicker, headline, caption, items.
 * `from` is filled in below so the beats cannot drift.
 */

const FPS = 30
const LEAD = 8
const PAD = 8

// Short effects copied from testmancermotion/src/assets/effects.
// Frame counts are the wav lengths at 30fps.
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
    kicker: 'The study of living things',
    headline: 'What is alive?',
    chips: ['A tree', 'A bird', 'You'],
    punch: 'A stone is not alive.',
    caption: 'A tree, a bird, you. A stone is not alive.',
    voice: { id: 'hook', frames: 186 },
  },
  {
    id: 'traits',
    visual: 'traits',
    kicker: 'Seven signs of life',
    headline: 'Only the living do all seven.',
    caption: 'Only a living thing does all seven.',
    outro: { id: 'trait-close', frames: 83 },
    items: [
      { word: 'Nutrition', line: 'Take in food.', voice: { id: 'trait-nutrition', frames: 93 } },
      { word: 'Respiration', line: 'Release energy.', voice: { id: 'trait-respiration', frames: 99 } },
      { word: 'Movement', line: 'A leopard runs. A plant still leans.', voice: { id: 'trait-movement', frames: 158 } },
      { word: 'Excretion', line: 'Waste leaves the cell.', voice: { id: 'trait-excretion', frames: 103 } },
      { word: 'Growth', line: 'New cells, for good.', voice: { id: 'trait-growth', frames: 111 } },
      { word: 'Reproduction', line: 'Life makes life.', voice: { id: 'trait-reproduction', frames: 104 } },
      { word: 'Sensitivity', line: 'The body answers.', voice: { id: 'trait-sensitivity', frames: 107 } },
    ],
  },
  {
    id: 'ladder',
    visual: 'ladder',
    voice: { id: 'ladder', frames: 240 },
    kicker: 'Then we name them',
    headline: 'Largest group to smallest.',
    caption: 'A species is the smallest group: similar, and able to breed.',
    items: ['Kingdom', 'Phylum', 'Class', 'Order', 'Family', 'Genus', 'Species'],
  },
  {
    id: 'web',
    visual: 'web',
    voice: { id: 'web', frames: 140 },
    kicker: 'Nothing lives alone',
    headline: 'Everything shares a home.',
    caption: 'Ecology is the study of that home.',
    items: [
      { label: 'Leopard', x: 16, y: 30 },
      { label: 'Thorn tree', x: 62, y: 18 },
      { label: 'Food web', x: 22, y: 72 },
      { label: 'Ecology', x: 68, y: 64 },
    ],
    links: [
      [0, 1],
      [1, 2],
      [2, 3],
      [0, 2],
      [1, 3],
    ],
  },
  {
    id: 'cell',
    visual: 'cell',
    voice: { id: 'cell', frames: 222 },
    switchAt: 148,
    kicker: 'Zoom in',
    headline: 'Life starts in a cell.',
    caption: 'From a bacterium to you, the work of life happens here.',
    items: [
      { word: 'Prokaryote', line: 'No nucleus. The genes float in the cell.' },
      { word: 'Eukaryote', line: 'A nucleus holds the genes.' },
    ],
  },
  {
    id: 'genes',
    visual: 'genes',
    voice: { id: 'genes', frames: 200 },
    kicker: 'The recipe',
    headline: 'Genes carry the instructions.',
    caption: 'Heredity passes them on. Evolution rewrites what works.',
    items: [
      { word: 'Genes', line: 'The recipe inside the cell.' },
      { word: 'Heredity', line: 'Parents pass the recipe on.' },
      { word: 'Evolution', line: 'Time rewrites what works.' },
    ],
  },
  {
    id: 'close',
    visual: 'close',
    voice: { id: 'close', frames: 173 },
    kicker: 'Biology I',
    headline: 'How does life work?',
    caption: 'Six chapters. Start with what is alive.',
    items: [
      { n: '01', title: 'Characteristics of life' },
      { n: '02', title: 'How organisms relate' },
      { n: '03', title: 'Ecology' },
      { n: '04', title: 'The cell' },
      { n: '05', title: 'Genes' },
      { n: '06', title: 'Heredity and evolution' },
    ],
  },
]

const audio = []
let cursor = 0

for (const scene of scenes) {
  scene.from = cursor

  if (scene.voice) {
    audio.push({
      id: scene.voice.id,
      src: `motion/bio101/${scene.voice.id}.mp3`,
      from: cursor + LEAD,
      durationInFrames: scene.voice.frames,
    })
    scene.duration = LEAD + scene.voice.frames + PAD
  }

  if (scene.items?.some((item) => item.voice)) {
    let offset = 0
    for (const item of scene.items) {
      audio.push({
        id: item.voice.id,
        src: `motion/bio101/${item.voice.id}.mp3`,
        from: cursor + offset,
        durationInFrames: item.voice.frames,
      })
      item.frames = item.voice.frames + PAD
      offset += item.frames
    }
    if (scene.outro) {
      audio.push({
        id: scene.outro.id,
        src: `motion/bio101/${scene.outro.id}.mp3`,
        from: cursor + offset,
        durationInFrames: scene.outro.frames,
      })
      scene.outroAt = offset
      offset += scene.outro.frames + PAD
    }
    scene.duration = offset
  }

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
    addEffect('hook-open', 'chime', scene.from, 0.2)
    addEffect('hook-tree', 'pop', scene.from + 36, 0.42)
    addEffect('hook-bird', 'pop', scene.from + 68, 0.42)
    addEffect('hook-you', 'pop', scene.from + 96, 0.42)
    addEffect('hook-stone', 'click', scene.from + 126, 0.2)
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
      addEffect(`trait-${item.word.toLowerCase()}`, accent, scene.from + offset, accent === 'pop' ? 0.42 : 0.26)
      offset += item.frames
    }
    addEffect('trait-seven', 'sparkle', scene.from + scene.outroAt, 0.28)
  }

  if (scene.id === 'ladder') addEffect('ladder', 'scroll', scene.from + 8, 0.26)
  if (scene.id === 'web') addEffect('web', 'swoosh', scene.from + 8, 0.24)
  if (scene.id === 'cell') {
    addEffect('cell-in', 'swoosh', scene.from + 8, 0.2)
    addEffect('cell-nucleus', 'ding', scene.from + scene.switchAt, 0.32)
  }
  if (scene.id === 'genes') {
    const slice = Math.floor(scene.duration / scene.items.length)
    addEffect('genes-recipe', 'pop', scene.from, 0.4)
    addEffect('genes-heredity', 'click', scene.from + slice, 0.24)
    addEffect('genes-evolution', 'sparkle', scene.from + slice * 2, 0.26)
  }
  if (scene.id === 'close') addEffect('close', 'fanfare', scene.from + 6, 0.14)
}

export const bio101Motion = {
  id: 'BIO101Explainer',
  courseCode: 'BIO 101',
  title: 'What is alive?',
  summary: 'A short film of Biology I, drawn from the six chapters.',
  fps: FPS,
  width: 1920,
  height: 1080,
  durationInFrames: cursor,
  audio,
  effects,
  music: {
    src: 'motion/effects/src_assets_bgmusic.mp3',
    volume: 0.07,
  },
  palette: {
    ink: '#071412',
    paper: '#f4f7f6',
    teal: '#2dd4bf',
    tealDeep: '#0f766e',
    gold: '#facc15',
    mist: '#9aaba6',
  },
  script: `What is alive? A tree, a bird, you. A stone is not alive.

Nutrition. Take in food.
Respiration. Release energy.
Movement. A leopard runs. A plant still leans.
Excretion. Waste leaves the cell.
Growth. New cells, for good.
Reproduction. Life makes life.
Sensitivity. The body answers.
Only a living thing does all seven.

Then we name them. Kingdom, phylum, class, order, family, genus, species.

Nothing lives alone. Ecology is the study of that home.

Life starts in a cell. Prokaryotes have no nucleus. Eukaryotes keep their genes in one.

Genes are the recipe. Heredity passes it on. Evolution rewrites what works.

Biology One. Six chapters. Start with what is alive.`,
  scenes,
}
