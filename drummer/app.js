const PATTERNS = {
  'POP': [
    {
      drums: ['kick-acoustic01', 'snare-acoustic01', 'tom-acoustic01', 'hihat-acoustic01'],
      speed: 8,
      pattern: [
        [9, 0, 7, 0, 6, 0, 8, 0],
        [0, 0, 9, 0, 0, 0, 7, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [3, 2, 1, 2, 3, 2, 1, 2],
      ],
    },
    {
      drums: ['kick-electro01', 'snare-electro01', 'tom-808', 'hihat-electro01'],
      speed: 8,
      pattern: [
        [9, 0, 7, 0, 6, 0, 8, 0],
        [0, 0, 9, 0, 0, 0, 7, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [6, 5, 3, 5, 6, 4, 6, 4],
      ],
    },
    {
      drums: ['kick-808', 'snare-808', 'tom-808', 'hihat-808'],
      speed: 8,
      pattern: [
        [9, 0, 7, 0, 6, 0, 8, 0],
        [0, 0, 9, 0, 0, 0, 7, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [6, 5, 3, 5, 6, 4, 6, 4],
      ],
    },
  ],
  'ROCK': [
    {
      drums: ['kick-acoustic01', 'snare-acoustic01', 'tom-acoustic01', 'hihat-acoustic01'],
      speed: 8,
      pattern: [
        [9, 0, 0, 0, 7, 6, 0, 0],
        [0, 0, 9, 0, 0, 0, 7, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
      ],
    },
    {
      drums: ['kick-acoustic01', 'snare-acoustic01', 'tom-acoustic01', 'hihat-acoustic01'],
      speed: 8,
      pattern: [
        [9, 0, 0, 8, 7, 0, 0, 0],
        [0, 0, 9, 0, 0, 8, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [1, 3, 2, 3, 1, 3, 2, 3],
      ],
    },
    {
      drums: ['kick-acoustic01', 'snare-acoustic01', 'tom-acoustic01', 'hihat-acoustic01'],
      speed: 8,
      pattern: [
        [9, 0, 0, 8, 7, 6, 0, 0],
        [0, 0, 8, 0, 0, 0, 7, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [1, 3, 2, 3, 1, 3, 2, 3],
      ],
    },
    {
      drums: ['kick-acoustic01', 'snare-acoustic01', 'tom-acoustic01', 'hihat-acoustic01'],
      speed: 16,
      pattern: [
        [9, 0, 0, 8, 0, 0, 8, 0, 0, 6, 9, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [2, 0, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 3, 0, 3, 0],
      ],
    },
  ],
  'BLUES': [
    {
      drums: ['kick-acoustic01', 'snare-acoustic01', 'tom-acoustic01', 'hihat-acoustic01'],
      speed: 12,
      pattern: [
        [9, 0, 0, 6, 0, 0, 8, 0, 0, 5, 0, 0, 9, 0, 0, 7, 0, 0, 8, 0, 0, 6, 0, 0],
        [0, 0, 0, 8, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 8, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [3, 0, 1, 3, 0, 2, 3, 0, 1, 3, 0, 2, 3, 0, 1, 3, 0, 2, 3, 0, 1, 3, 0, 2],
      ],
    },
    {
      drums: ['kick-acoustic01', 'snare-acoustic01', 'tom-acoustic01', 'hihat-acoustic01'],
      speed: 12,
      pattern: [
        [9, 0, 0, 0, 0, 8, 8, 0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 9, 8, 0, 0, 0, 0, 0],
        [0, 0, 0, 8, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 8, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2],
      ],
    },
    {
      drums: ['kick-acoustic01', 'snare-acoustic01', 'tom-acoustic01', 'hihat-acoustic01'],
      speed: 12,
      pattern: [
        [9, 0, 8, 0, 0, 8, 8, 0, 8, 0, 0, 7, 9, 0, 8, 0, 8, 0, 8, 0, 7, 0, 6, 7],
        [0, 0, 0, 8, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 8, 0, 0, 0, 0, 0, 8, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2],
      ],
    },
  ],
  'JAZZ': [
    {
      drums: ['kick-acoustic01', 'snare-acoustic01', 'hihat-acoustic01'],
      speed: 8,
      pattern: [
        [9, 0, 0, 8, 9, 0, 0, 7, 8, 0, 0, 8, 9, 0, 0, 9],
        [7, 0, 0, 6, 0, 0, 7, 0, 0, 0, 7, 0, 0, 8, 0, 0],
        [2, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 1, 1],
      ]
    },
    {
      drums: ['kick-acoustic01', 'snare-acoustic01', 'hihat-acoustic01'],
      speed: 8,
      pattern: [
        [9, 0, 0, 8, 7, 0, 0, 6, 7, 0, 0, 8, 9, 0, 0, 8],
        [4, 0, 0, 6, 0, 0, 0, 6, 0, 0, 5, 0, 6, 0, 0, 0],
        [2, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1, 2, 1, 1, 1],
      ]
    },
  ],
  'DANCE': [
    {
      drums: ['kick-808', 'snare-808', 'hihat-808', 'openhat-808'],
      speed: 16,
      pattern: [
        [9, 0, 0, 0, 6, 0, 0, 0, 9, 0, 0, 0, 6, 0, 9, 0],
        [0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0],
        [0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0],
      ],
    },
    {
      drums: ['kick-808', 'snare-808', 'hihat-808'],
      speed: 16,
      pattern: [
        [9, 0, 0, 0, 0, 0, 0, 8, 0, 0, 8, 0, 0, 8, 0, 7],
        [0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0],
        [3, 0, 2, 0, 3, 0, 2, 0, 3, 0, 2, 0, 3, 0, 2, 0],
      ],
    },
    {
      drums: ['kick-electro01', 'snare-electro01', 'hihat-electro01'],
      speed: 16,
      pattern: [
        [9, 0, 0, 0, 0, 0, 0, 8, 0, 0, 8, 0, 0, 8, 0, 7],
        [0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0],
        [3, 0, 2, 0, 3, 0, 2, 0, 3, 0, 2, 0, 3, 0, 2, 0],
      ],
    },
  ],
};

class Drummer {
  constructor(sampleRate) {
    this.sampleRate = sampleRate;
    // Initialize samples
    this.samples = [];
    for (let id in SAMPLES) {
      const s = window.atob(SAMPLES[id]);
      const wave = new Float32Array(s.length / 2);
      for (let i = 0x7f; i < s.length / 2; i = i + 1) {
        const lo = s.charCodeAt(i * 2);
        const hi = s.charCodeAt(i * 2 + 1);
        const sign = hi > 127;
        let v = (hi&0x7f) * 256 + lo;
        if (hi > 127) {
          v = -0x8000 + v;
        }
        wave[i] = v / 0x8000;
      }
      this.samples.push({
        id: id,
        offset: 0,
        buffer: wave,
        volume: 0,
      });
    }
    
    try {
      this.state = JSON.parse(window.localStorage['drummer']);
    } catch (e) {
      this.state = {
        step: 0,
        offset: 0,
        bpm: 120,
        volume: 8,
        genre: 'POP',
        pattern: 0,
      };
    }
  }

  mix(out) {
    const p = PATTERNS[this.state.genre][this.state.pattern];
    const bps = this.state.bpm / 60 * p.speed / 4;
    for (let i = 0; i < out.length; i++) {
      let v = 0;
      if (this.state.offset === 0) {
        for (let j = 0; j < p.pattern.length; j++) {
          const volume = p.pattern[j][this.state.step % p.pattern[j].length];
          if (volume > 0) {
            const drum = p.drums[j];
            for (let i = 0; i < this.samples.length; i++) {
              if (this.samples[i].id === drum) {
                this.samples[i].volume = volume / 9;
                this.samples[i].offset = 0;
                break;
              }
            }
          }
        }
      }

      for (let i = 0; i < this.samples.length; i++) {
        const sample = this.samples[i];
        if (sample.volume > 0) {
          v = v + sample.buffer[sample.offset] * sample.volume;
          sample.offset++;
          if (sample.offset == sample.buffer.length) {
            sample.offset = 0;
            sample.volume = 0;
          }
        }
      }

      out[i] = v;
      this.state.offset++;
      if (this.state.offset > this.sampleRate / bps) {
        this.state.step++;
        this.state.offset = 0;
      }
    }
  }

  save() {
    window.localStorage['drummer'] = JSON.stringify(this.state);
  }
}

const MAX_VOLUME = 12;
const MAX_PATTERNS = 6;
const MAX_BPM = 240;
const MIN_BPM = 30;


class UI {
  constructor(drummer) {
    this.drummer = drummer;
    const setVolume = v => {
      drummer.state.volume = Math.min(Math.max(v, 0), MAX_VOLUME);
      gain.gain.value = drummer.state.volume / MAX_VOLUME;
    };
    const setBpm = bpm => {
      drummer.state.bpm = Math.max(Math.min(bpm, MAX_BPM), MIN_BPM) | 0;
    };
    const setPattern = pattern => {
      drummer.state.pattern = pattern;
    };
    const onClick = (el, fn) => {
      document.querySelector(el).addEventListener('click', () => {
        fn();
        this.render();
      });
    };
    onClick('#volume-minus', () => setVolume(drummer.state.volume - 1));
    onClick('#volume-plus', () => setVolume(drummer.state.volume + 1));
    onClick('#bpm-plus', () => setBpm(drummer.state.bpm + 1));
    onClick('#bpm-minus', () => setBpm(drummer.state.bpm - 1));

    this.lastTap = new Date();
    onClick('#bpm-tap', () => {
      const delta = (new Date() - this.lastTap) / 1000;
      this.lastTap = new Date();
      console.log(delta);
      setBpm(drummer.state.bpm * 0.8 + 60/delta * 0.2);
    });

    const setGenre = offset => {
      const genres = Object.keys(PATTERNS);
      let i = genres.indexOf(drummer.state.genre);
      i = (i + offset + genres.length) % genres.length;
      drummer.state.genre = genres[i];
      if (drummer.state.pattern >= PATTERNS[drummer.state.genre].length) {
        drummer.state.pattern = 0;
      }
    };
    onClick('#genre-prev', () => setGenre(-1));
    onClick('#genre-next', () => setGenre(1));

    for (let i = 0; i < MAX_VOLUME; i++) {
      onClick('#volume-' + i, () => setVolume(i));
    }
    for (let i = 0; i < MAX_PATTERNS; i++) {
      onClick('#pattern-' + i, () => setPattern(i));
    }
  }
  render() {
    this.drummer.save();
    document.querySelector('#bpm-tap').textContent = this.drummer.state.bpm;
    document.querySelector('#genre-name').textContent = this.drummer.state.genre;
    for (let i = 0; i < MAX_VOLUME; i++) {
      document.querySelector('#volume-' + i).className =
        'btn ' + (i <= this.drummer.state.volume ? ' bright' : '');
    }
    for (let i = 0; i < MAX_PATTERNS; i++) {
      const el = document.querySelector('#pattern-' + i);
      if (i >= PATTERNS[this.drummer.state.genre].length) {
        el.style = 'display: none;';
      } else {
        el.style = '';
      }

      if (i == this.drummer.state.pattern) {
        el.className = 'btn bright';
      } else {
        el.className = 'btn';
      }
    }
  }
}


const audio = new AudioContext();
const drummer = new Drummer(audio.sampleRate);
const gain = audio.createGain();
const drums = audio.createScriptProcessor(4096, 0, 1);
const ui = new UI(drummer);
drums.onaudioprocess = e => drummer.mix(e.outputBuffer.getChannelData(0));
drums.connect(gain).connect(audio.destination);
ui.render();
