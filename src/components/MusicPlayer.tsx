/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react';
import { VolumeX, Volume2, Music } from 'lucide-react';
import { FestivalId } from '../types';

export interface MusicPlayerRef {
  play: () => void;
  pause: () => void;
  isPlaying: () => boolean;
  playManualNote: (freq: number) => void;
  setVolume: (vol: number) => void;
}

interface MusicPlayerProps {
  isPlayingInitially?: boolean;
  onPlayingStateChange?: (playing: boolean) => void;
  festivalId?: FestivalId;
}

interface NoteItem {
  freq: number;
  dur: number;
}

// Frequency constants
const NOTES = {
  G4: 392.00,
  A4: 440.00,
  B4: 493.88,
  C5: 523.25,
  D5: 587.33,
  E5: 659.25,
  F5: 698.46,
  G5: 783.99,
  A5: 880.00,
  B5: 987.77,
  C6: 1046.50,
  D6: 1174.66,
  E6: 1318.51,
  F6: 1396.91,
  G6: 1567.98,
  A6: 1760.00,
  REST: 0,
};

// Festival-specific music arrangements
const FESTIVAL_MUSIC_CONFIG: Record<FestivalId, { title: string; bpm: number; melody: NoteItem[] }> = {
  birthday: {
    title: '祝你生日快乐 (Happy Birthday)',
    bpm: 125,
    melody: [
      { freq: NOTES.G5, dur: 0.5 },
      { freq: NOTES.G5, dur: 0.5 },
      { freq: NOTES.A5, dur: 1 },
      { freq: NOTES.G5, dur: 1 },
      { freq: NOTES.C6, dur: 1 },
      { freq: NOTES.B5, dur: 2 },

      { freq: NOTES.G5, dur: 0.5 },
      { freq: NOTES.G5, dur: 0.5 },
      { freq: NOTES.A5, dur: 1 },
      { freq: NOTES.G5, dur: 1 },
      { freq: NOTES.D6, dur: 1 },
      { freq: NOTES.C6, dur: 2 },

      { freq: NOTES.G5, dur: 0.5 },
      { freq: NOTES.G5, dur: 0.5 },
      { freq: NOTES.G6, dur: 1 },
      { freq: NOTES.E6, dur: 1 },
      { freq: NOTES.C6, dur: 1 },
      { freq: NOTES.B5, dur: 1 },
      { freq: NOTES.A5, dur: 2 },

      { freq: NOTES.F6, dur: 0.5 },
      { freq: NOTES.F6, dur: 0.5 },
      { freq: NOTES.E6, dur: 1 },
      { freq: NOTES.C6, dur: 1 },
      { freq: NOTES.D6, dur: 1 },
      { freq: NOTES.C6, dur: 3 },
      { freq: NOTES.REST, dur: 2.5 }
    ]
  },

  mid_autumn: {
    title: '水调歌头 · 但愿人长久',
    bpm: 92,
    melody: [
      // 明月几时有，把酒问青天
      { freq: NOTES.G5, dur: 1 },
      { freq: NOTES.A5, dur: 1 },
      { freq: NOTES.C6, dur: 1.5 },
      { freq: NOTES.D6, dur: 0.5 },
      { freq: NOTES.E6, dur: 2 },
      { freq: NOTES.G6, dur: 1 },
      { freq: NOTES.E6, dur: 1 },
      { freq: NOTES.D6, dur: 1 },
      { freq: NOTES.C6, dur: 1 },
      { freq: NOTES.D6, dur: 2 },

      // 不知天上宫阙，今夕是何年
      { freq: NOTES.C6, dur: 0.75 },
      { freq: NOTES.D6, dur: 0.75 },
      { freq: NOTES.E6, dur: 1.5 },
      { freq: NOTES.G6, dur: 1 },
      { freq: NOTES.E6, dur: 1 },
      { freq: NOTES.D6, dur: 2 },
      { freq: NOTES.C6, dur: 1 },
      { freq: NOTES.A5, dur: 1 },
      { freq: NOTES.G5, dur: 1 },
      { freq: NOTES.A5, dur: 1 },
      { freq: NOTES.C6, dur: 2.5 },

      // 我欲乘风归去，又恐琼楼玉宇，高处不胜寒
      { freq: NOTES.D6, dur: 1 },
      { freq: NOTES.E6, dur: 1 },
      { freq: NOTES.G6, dur: 1.5 },
      { freq: NOTES.E6, dur: 0.5 },
      { freq: NOTES.D6, dur: 2 },
      { freq: NOTES.C6, dur: 1 },
      { freq: NOTES.D6, dur: 1 },
      { freq: NOTES.E6, dur: 1.5 },
      { freq: NOTES.D6, dur: 0.5 },
      { freq: NOTES.C6, dur: 2 },
      { freq: NOTES.A5, dur: 1 },
      { freq: NOTES.G5, dur: 1 },
      { freq: NOTES.E5, dur: 1 },
      { freq: NOTES.G5, dur: 1 },
      { freq: NOTES.A5, dur: 2.5 },

      // 起舞弄清影，何似在人间
      { freq: NOTES.C6, dur: 1 },
      { freq: NOTES.D6, dur: 1 },
      { freq: NOTES.E6, dur: 1.5 },
      { freq: NOTES.D6, dur: 0.5 },
      { freq: NOTES.C6, dur: 1.5 },
      { freq: NOTES.A5, dur: 1 },
      { freq: NOTES.C6, dur: 3 },
      { freq: NOTES.REST, dur: 3 }
    ]
  },

  qixi: {
    title: '月亮代表我的心 (星河浪漫曲)',
    bpm: 102,
    melody: [
      // 你问我爱你有多深
      { freq: NOTES.C5, dur: 1 },
      { freq: NOTES.E5, dur: 1 },
      { freq: NOTES.G5, dur: 1 },
      { freq: NOTES.C6, dur: 2 },
      { freq: NOTES.B5, dur: 1 },
      { freq: NOTES.A5, dur: 1 },
      { freq: NOTES.G5, dur: 2 },

      // 我爱你有几分
      { freq: NOTES.E5, dur: 1 },
      { freq: NOTES.C5, dur: 1 },
      { freq: NOTES.D5, dur: 1 },
      { freq: NOTES.E5, dur: 1.5 },
      { freq: NOTES.D5, dur: 2.5 },

      // 我的情也真，我的爱也真
      { freq: NOTES.C5, dur: 1 },
      { freq: NOTES.E5, dur: 1 },
      { freq: NOTES.G5, dur: 1 },
      { freq: NOTES.C6, dur: 2 },
      { freq: NOTES.B5, dur: 1 },
      { freq: NOTES.A5, dur: 2 },
      { freq: NOTES.G5, dur: 1 },
      { freq: NOTES.A5, dur: 1 },
      { freq: NOTES.G5, dur: 1 },
      { freq: NOTES.E5, dur: 1 },
      { freq: NOTES.D5, dur: 2 },

      // 月亮代表我的心
      { freq: NOTES.E5, dur: 1 },
      { freq: NOTES.D5, dur: 1 },
      { freq: NOTES.C5, dur: 1.5 },
      { freq: NOTES.D5, dur: 1 },
      { freq: NOTES.C5, dur: 3 },
      { freq: NOTES.REST, dur: 2.5 }
    ]
  },

  new_year: {
    title: '新年好 · 恭喜发财 (金蛇迎春)',
    bpm: 138,
    melody: [
      // 新年好呀，新年好呀
      { freq: NOTES.C5, dur: 1 },
      { freq: NOTES.C5, dur: 1 },
      { freq: NOTES.C5, dur: 1.5 },
      { freq: NOTES.G4, dur: 0.5 },
      { freq: NOTES.E5, dur: 1 },
      { freq: NOTES.E5, dur: 1 },
      { freq: NOTES.E5, dur: 1.5 },
      { freq: NOTES.C5, dur: 0.5 },

      // 祝贺大家新年好
      { freq: NOTES.C5, dur: 1 },
      { freq: NOTES.E5, dur: 1 },
      { freq: NOTES.G5, dur: 1 },
      { freq: NOTES.G5, dur: 1 },
      { freq: NOTES.F5, dur: 0.5 },
      { freq: NOTES.E5, dur: 0.5 },
      { freq: NOTES.D5, dur: 2 },

      // 我们唱歌，我们跳舞
      { freq: NOTES.D5, dur: 1 },
      { freq: NOTES.E5, dur: 1 },
      { freq: NOTES.F5, dur: 1 },
      { freq: NOTES.F5, dur: 1 },
      { freq: NOTES.E5, dur: 1 },
      { freq: NOTES.F5, dur: 1 },
      { freq: NOTES.G5, dur: 1 },
      { freq: NOTES.G5, dur: 1 },

      // 祝贺大家新年好
      { freq: NOTES.C5, dur: 1 },
      { freq: NOTES.E5, dur: 1 },
      { freq: NOTES.D5, dur: 1 },
      { freq: NOTES.G4, dur: 1 },
      { freq: NOTES.D5, dur: 1 },
      { freq: NOTES.C5, dur: 2.5 },
      { freq: NOTES.REST, dur: 2 }
    ]
  },

  christmas: {
    title: 'Jingle Bells (铃儿响叮当)',
    bpm: 142,
    melody: [
      // Jingle bells, jingle bells, jingle all the way
      { freq: NOTES.E5, dur: 1 },
      { freq: NOTES.E5, dur: 1 },
      { freq: NOTES.E5, dur: 2 },
      { freq: NOTES.E5, dur: 1 },
      { freq: NOTES.E5, dur: 1 },
      { freq: NOTES.E5, dur: 2 },
      { freq: NOTES.E5, dur: 1 },
      { freq: NOTES.G5, dur: 1 },
      { freq: NOTES.C5, dur: 1.5 },
      { freq: NOTES.D5, dur: 0.5 },
      { freq: NOTES.E5, dur: 3 },

      // Oh what fun it is to ride in a one-horse open sleigh
      { freq: NOTES.F5, dur: 1 },
      { freq: NOTES.F5, dur: 1 },
      { freq: NOTES.F5, dur: 1.5 },
      { freq: NOTES.F5, dur: 0.5 },
      { freq: NOTES.F5, dur: 1 },
      { freq: NOTES.E5, dur: 1 },
      { freq: NOTES.E5, dur: 1 },
      { freq: NOTES.E5, dur: 0.5 },
      { freq: NOTES.E5, dur: 0.5 },
      { freq: NOTES.E5, dur: 1 },
      { freq: NOTES.D5, dur: 1 },
      { freq: NOTES.D5, dur: 1 },
      { freq: NOTES.E5, dur: 1 },
      { freq: NOTES.D5, dur: 2 },
      { freq: NOTES.G5, dur: 2 },

      // Jingle bells, jingle bells, jingle all the way
      { freq: NOTES.E5, dur: 1 },
      { freq: NOTES.E5, dur: 1 },
      { freq: NOTES.E5, dur: 2 },
      { freq: NOTES.E5, dur: 1 },
      { freq: NOTES.E5, dur: 1 },
      { freq: NOTES.E5, dur: 2 },
      { freq: NOTES.E5, dur: 1 },
      { freq: NOTES.G5, dur: 1 },
      { freq: NOTES.C5, dur: 1.5 },
      { freq: NOTES.D5, dur: 0.5 },
      { freq: NOTES.E5, dur: 3 },

      // Ending line
      { freq: NOTES.F5, dur: 1 },
      { freq: NOTES.F5, dur: 1 },
      { freq: NOTES.F5, dur: 1.5 },
      { freq: NOTES.F5, dur: 0.5 },
      { freq: NOTES.F5, dur: 1 },
      { freq: NOTES.E5, dur: 1 },
      { freq: NOTES.E5, dur: 1 },
      { freq: NOTES.E5, dur: 0.5 },
      { freq: NOTES.E5, dur: 0.5 },
      { freq: NOTES.G5, dur: 1 },
      { freq: NOTES.G5, dur: 1 },
      { freq: NOTES.F5, dur: 1 },
      { freq: NOTES.D5, dur: 1 },
      { freq: NOTES.C5, dur: 3 },
      { freq: NOTES.REST, dur: 2.5 }
    ]
  },

  memorial: {
    title: '友谊地久天长 (Auld Lang Syne)',
    bpm: 95,
    melody: [
      // 怎能忘记旧日朋友
      { freq: NOTES.G4, dur: 1.5 },
      { freq: NOTES.C5, dur: 1.5 },
      { freq: NOTES.C5, dur: 1 },
      { freq: NOTES.C5, dur: 1 },
      { freq: NOTES.E5, dur: 1.5 },
      { freq: NOTES.D5, dur: 1 },
      { freq: NOTES.C5, dur: 1 },
      { freq: NOTES.D5, dur: 2 },

      // 心中能不怀想
      { freq: NOTES.E5, dur: 1.5 },
      { freq: NOTES.C5, dur: 1 },
      { freq: NOTES.C5, dur: 1 },
      { freq: NOTES.E5, dur: 1.5 },
      { freq: NOTES.G5, dur: 2 },
      { freq: NOTES.A5, dur: 3 },

      // 旧日朋友怎能忘记
      { freq: NOTES.A5, dur: 1.5 },
      { freq: NOTES.G5, dur: 1.5 },
      { freq: NOTES.E5, dur: 1 },
      { freq: NOTES.E5, dur: 1 },
      { freq: NOTES.C5, dur: 1.5 },
      { freq: NOTES.D5, dur: 1 },
      { freq: NOTES.C5, dur: 1 },
      { freq: NOTES.D5, dur: 2 },

      // 友谊地久天长
      { freq: NOTES.E5, dur: 1.5 },
      { freq: NOTES.C5, dur: 1 },
      { freq: NOTES.A4, dur: 1.5 },
      { freq: NOTES.A4, dur: 1 },
      { freq: NOTES.G4, dur: 1.5 },
      { freq: NOTES.C5, dur: 3 },
      { freq: NOTES.REST, dur: 3 }
    ]
  }
};

const MusicPlayer = forwardRef<MusicPlayerRef, MusicPlayerProps>(({ 
  isPlayingInitially = false, 
  onPlayingStateChange,
  festivalId = 'birthday'
}, ref) => {
  const [isPlayingState, setIsPlayingState] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  
  // Web Audio Context refs
  const audioCtxRef = useRef<AudioContext | null>(null);
  const effectsInletRef = useRef<GainNode | null>(null);
  const masterVolumeGainNodeRef = useRef<GainNode | null>(null);
  const nextNoteTimeRef = useRef<number>(0);
  const noteIndexRef = useRef<number>(0);
  const schedulerTimerIdRef = useRef<any>(null);
  const isPlayingRef = useRef<boolean>(false);
  const currentVolumeRef = useRef<number>(0.45);
  const currentFestivalRef = useRef<FestivalId>(festivalId);

  // Keep festival ref up to date
  useEffect(() => {
    currentFestivalRef.current = festivalId;
    // Reset note position when switching festival so melody begins cleanly
    noteIndexRef.current = 0;
    // Briefly display the song title when changed
    setShowTooltip(true);
    const timer = setTimeout(() => setShowTooltip(false), 3000);
    return () => clearTimeout(timer);
  }, [festivalId]);

  const activeMusic = (festivalId && FESTIVAL_MUSIC_CONFIG[festivalId]) || FESTIVAL_MUSIC_CONFIG.birthday;
  const currentBpm = activeMusic?.bpm || 116;
  const beatDuration = 60 / currentBpm;

  // Sync state helper
  const updatePlayingState = (state: boolean) => {
    setIsPlayingState(state);
    isPlayingRef.current = state;
    if (onPlayingStateChange) {
      onPlayingStateChange(state);
    }
  };

  const initAudioContext = () => {
    if (typeof window === 'undefined') return;
    if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        effectsInletRef.current = null;
        masterVolumeGainNodeRef.current = null;
        
        const ctx = new AudioCtx();
        audioCtxRef.current = ctx;
        setupEffectsGraph(ctx);
      }
    }
  };

  // Setup master echo delay path with beautiful, direct projection
  const setupEffectsGraph = (ctx: AudioContext) => {
    if (effectsInletRef.current) return;

    // Master volume to keep overall sound warm and controlled
    const masterVolume = ctx.createGain();
    masterVolume.gain.setValueAtTime(currentVolumeRef.current, ctx.currentTime);
    masterVolumeGainNodeRef.current = masterVolume;

    // Direct path input node
    const inputBus = ctx.createGain();
    inputBus.gain.setValueAtTime(1.0, ctx.currentTime);

    // Route directly to masterVolume to ensure a clean, crisp chime sound with no overlapping echoes or feedback
    inputBus.connect(masterVolume);
    
    // Low-pass filter to smooth out any potential high chirp harshness
    const lowpass = ctx.createBiquadFilter();
    lowpass.type = 'lowpass';
    lowpass.frequency.setValueAtTime(2800, ctx.currentTime); // Keeps sweet chiming sparkles, removes raw synthesizer hiss

    masterVolume.connect(lowpass);
    lowpass.connect(ctx.destination);

    effectsInletRef.current = inputBus;
  };

  // Sound generator for custom physical bell-like crystalloid chimes without scary organ fifths
  const playStarChime = (ctx: AudioContext, freq: number, duration: number, startTime: number) => {
    if (freq === 0 || !effectsInletRef.current) return;

    try {
      // 1. Fundamental warm core (pure sweet sinusoidal bell)
      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, startTime);

      // 2. Sparkly octave (gives physical bell structure)
      const oscTwinkle1 = ctx.createOscillator();
      oscTwinkle1.type = 'sine';
      oscTwinkle1.frequency.setValueAtTime(freq * 2.0, startTime);

      // 3. Ultra-dainty super octave (stardust sparkle overlay)
      const oscTwinkle2 = ctx.createOscillator();
      oscTwinkle2.type = 'sine';
      oscTwinkle2.frequency.setValueAtTime(freq * 4.0, startTime);

      const gainCore = ctx.createGain();
      const gainTwinkle1 = ctx.createGain();
      const gainTwinkle2 = ctx.createGain();

      // Envelopes: Instant safe strike attack with smooth exponential ring-out
      gainCore.gain.setValueAtTime(0.40, startTime);
      gainCore.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

      gainTwinkle1.gain.setValueAtTime(0.18, startTime);
      gainTwinkle1.gain.exponentialRampToValueAtTime(0.0001, startTime + duration * 0.55);

      gainTwinkle2.gain.setValueAtTime(0.10, startTime);
      gainTwinkle2.gain.exponentialRampToValueAtTime(0.0001, startTime + duration * 0.35);

      // Connections
      osc.connect(gainCore);
      oscTwinkle1.connect(gainTwinkle1);
      oscTwinkle2.connect(gainTwinkle2);

      gainCore.connect(effectsInletRef.current);
      gainTwinkle1.connect(effectsInletRef.current);
      gainTwinkle2.connect(effectsInletRef.current);

      osc.start(startTime);
      osc.stop(startTime + duration + 0.1);

      oscTwinkle1.start(startTime);
      oscTwinkle1.stop(startTime + duration * 0.55 + 0.1);

      oscTwinkle2.start(startTime);
      oscTwinkle2.stop(startTime + duration * 0.35 + 0.1);
    } catch (err) {
      console.warn('Synth glitch safe-catch:', err);
    }
  };

  const startSequencer = () => {
    initAudioContext();
    const ctx = audioCtxRef.current;
    if (!ctx) return;

    // Fix: Ensure we clear any existing timer FIRST, so starting it multiple times doesn't freeze or lock up the scheduler!
    if (schedulerTimerIdRef.current) {
      clearTimeout(schedulerTimerIdRef.current);
      schedulerTimerIdRef.current = null;
    }

    const run = () => {
      // Start scheduling cursor from the relative current moment
      nextNoteTimeRef.current = ctx.currentTime + 0.05;
      
      const scheduleNextNotes = () => {
        const currentCtx = audioCtxRef.current;
        if (!currentCtx || currentCtx.state === 'closed' || !isPlayingRef.current) return;

        while (nextNoteTimeRef.current < currentCtx.currentTime + 0.22) {
          if (nextNoteTimeRef.current < currentCtx.currentTime) {
            nextNoteTimeRef.current = currentCtx.currentTime;
          }

          const currentFestivalConfig = FESTIVAL_MUSIC_CONFIG[currentFestivalRef.current] || FESTIVAL_MUSIC_CONFIG.birthday;
          const currentMelody = currentFestivalConfig.melody;
          const currentBpm = currentFestivalConfig.bpm;
          const dynamicBeatDuration = 60 / currentBpm;

          const currentNote = currentMelody[noteIndexRef.current % currentMelody.length];
          const noteDuration = currentNote.dur * dynamicBeatDuration;
          
          playStarChime(currentCtx, currentNote.freq, noteDuration - 0.015, nextNoteTimeRef.current);
          
          nextNoteTimeRef.current += noteDuration;
          noteIndexRef.current = (noteIndexRef.current + 1) % currentMelody.length;
        }
        
        // Loop scheduler every 50ms
        schedulerTimerIdRef.current = setTimeout(scheduleNextNotes, 50);
      };

      updatePlayingState(true);
      scheduleNextNotes();
    };

    if (ctx.state === 'suspended') {
      ctx.resume()
        .then(() => {
          run();
        })
        .catch((err) => {
          console.warn('Context resume failed:', err);
          run();
        });
    } else {
      run();
    }
  };

  const stopSequencer = () => {
    if (schedulerTimerIdRef.current) {
      clearTimeout(schedulerTimerIdRef.current);
      schedulerTimerIdRef.current = null;
    }
    updatePlayingState(false);
  };

  // Expose play/pause & interactive note chimes safely
  useImperativeHandle(ref, () => ({
    play: () => {
      startSequencer();
    },
    pause: () => {
      stopSequencer();
    },
    isPlaying: () => {
      return isPlayingRef.current;
    },
    setVolume: (vol: number) => {
      currentVolumeRef.current = vol;
      if (masterVolumeGainNodeRef.current && audioCtxRef.current) {
        masterVolumeGainNodeRef.current.gain.setValueAtTime(vol, audioCtxRef.current.currentTime);
      }
    },
    playManualNote: (freq: number) => {
      // Allow plucking customized bells manually!
      initAudioContext();
      const ctx = audioCtxRef.current;
      if (!ctx) return;

      const trigger = () => {
        playStarChime(ctx, freq, 1.8, ctx.currentTime);
      };

      if (ctx.state === 'suspended') {
        ctx.resume().then(trigger).catch(trigger);
      } else {
        trigger();
      }
    }
  }));

  // Touch/Click autoplay fallback trigger
  useEffect(() => {
    if (isPlayingInitially) {
      const handlePreGesture = () => {
        startSequencer();
        window.removeEventListener('click', handlePreGesture);
        window.removeEventListener('keydown', handlePreGesture);
      };
      
      window.addEventListener('click', handlePreGesture);
      window.addEventListener('keydown', handlePreGesture);
      
      try {
        startSequencer();
      } catch (err) {
        console.log('Autoplay deferred until user interacts');
      }

      return () => {
        window.removeEventListener('click', handlePreGesture);
        window.removeEventListener('keydown', handlePreGesture);
      };
    }
  }, [isPlayingInitially]);

  // Clean-up
  useEffect(() => {
    return () => {
      if (schedulerTimerIdRef.current) {
        clearTimeout(schedulerTimerIdRef.current);
        schedulerTimerIdRef.current = null;
      }
      if (audioCtxRef.current) {
        audioCtxRef.current.close().catch(() => {});
        audioCtxRef.current = null;
      }
      effectsInletRef.current = null;
      masterVolumeGainNodeRef.current = null;
    };
  }, []);

  const handleTogglePlay = () => {
    if (isPlayingState) {
      stopSequencer();
    } else {
      startSequencer();
    }
  };

  return (
    <div className="fixed top-4 right-4 z-[99] flex items-center gap-2 select-none">
      {/* Soundtrack Name Badge */}
      <div 
        className={`px-2.5 py-1 bg-black/60 backdrop-blur-md border border-[#FFE8F5]/30 text-[10px] text-[#FFE8F5] font-pixel flex items-center gap-1.5 transition-all duration-300 ${
          showTooltip || isPlayingState ? 'opacity-90 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-2 pointer-events-none md:hover:opacity-90'
        }`}
        style={{ boxShadow: '0 2px 0 rgba(0,0,0,0.4)' }}
      >
        <Music className="w-3 h-3 text-[#F7D070] animate-bounce" />
        <span className="truncate max-w-[140px] sm:max-w-[180px]">{activeMusic?.title || '8-Bit Chime'}</span>
      </div>

      {/* Visualizer Waves */}
      {isPlayingState && (
        <div className="flex items-end gap-[2px] h-4 px-2 bg-black/30 backdrop-blur-md rounded-full border border-pink-500/10 py-1">
          <span className="w-[2px] h-full bg-pink-400 rounded-full animate-audio-bar-1 origin-bottom" />
          <span className="w-[2px] h-full bg-pink-400 rounded-full animate-audio-bar-2 origin-bottom [animation-delay:0.15s]" />
          <span className="w-[2px] h-full bg-violet-400 rounded-full animate-audio-bar-3 origin-bottom [animation-delay:0.3s]" />
          <span className="w-[2px] h-full bg-violet-400 rounded-full animate-audio-bar-4 origin-bottom [animation-delay:0.45s]" />
        </div>
      )}

      {/* Spinning Cozy Chime Star Button */}
      <button
        onClick={handleTogglePlay}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-r from-violet-900/60 to-pink-900/60 border border-pink-500/30 text-pink-200 hover:text-white shadow-[0_4px_12px_rgba(219,112,147,0.25)] hover:border-pink-400/50 backdrop-blur-md active:scale-95 transition-all duration-300 group cursor-pointer overflow-hidden"
        title={isPlayingState ? `暂停背景音乐 (${activeMusic?.title || ''})` : `播放背景音乐 (${activeMusic?.title || ''})`}
        aria-label={isPlayingState ? 'Pause background music' : 'Play background music'}
      >
        <div className="absolute inset-2 rounded-full border border-pink-500/10" />
        <div className="absolute inset-4 rounded-full border border-pink-500/5" />

        <div className={`relative ${isPlayingState ? 'animate-spin-slow' : ''}`}>
          {isPlayingState ? (
            <Volume2 className="w-5 h-5 text-pink-300 drop-shadow-sm group-hover:scale-105 transition-transform animate-pulse" />
          ) : (
            <VolumeX className="w-5 h-5 text-pink-400/80 group-hover:scale-105 transition-transform" />
          )}
        </div>
      </button>
    </div>
  );
});

MusicPlayer.displayName = 'MusicPlayer';

export default MusicPlayer;

