/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { FestivalId } from '../types';
import ThemeDecorations from './ThemeDecorations';

interface EnvelopeProps {
  onOpen: () => void;
  title?: string;
  subtitle?: string;
  badge?: string;
  festivalId?: FestivalId;
}

export default function Envelope({ 
  onOpen,
  title = '收到了神秘信件',
  subtitle = '你收到了一份来自像素星空的包裹，点按打开你的专属信笺',
  badge = 'LEVEL UP! +1 YEAR',
  festivalId = 'birthday'
}: EnvelopeProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    setIsOpening(true);
    // Let the flap fold animation play before fading out the full envelope screen
    setTimeout(() => {
      onOpen();
    }, 1300);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full px-4 select-none z-10 overflow-hidden">
      
      {/* Retro Pixel Star cluster container for dynamic background shine */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-[280px] sm:w-80 h-64 sm:h-80 bg-gradient-to-tr from-white/10 to-amber-500/10 rounded-none blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-48 sm:w-56 h-48 sm:h-56 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-none blur-2xl -z-10 pointer-events-none" />

      {/* Theme-Tailored Corner Decorations */}
      <ThemeDecorations festivalId={festivalId} variant="envelope-corners" />

      {/* Greeting Title Card */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8 max-w-xs"
      >
        <div className="inline-block px-3 py-1 mb-3 text-[10px] tracking-widest text-[#F5C6EA] bg-[#7B5EA7]/40 border-2 border-[#C9A9E9]/40 rounded-none font-mono uppercase shadow-sm">
          {badge}
        </div>
        
        {/* Pixel title with pink stroke glow */}
        <h1 className="text-2xl font-pixel font-bold tracking-wider text-[#FFE8F5] drop-shadow-pixel-glow uppercase mb-2">
          {title}
        </h1>
        <p className="text-xs text-[#C9A9E9] font-pixel leading-relaxed px-4">
          {subtitle}
        </p>
      </motion.div>

      {/* Main Pixel-Art Envelope Component */}
      <motion.div
        animate={isOpening ? { scale: [1, 1.04, 0.9], opacity: [1, 1, 0] } : {}}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        whileTap={{ scale: 0.98 }}
        onClick={!isOpening ? handleOpenClick : undefined}
        className="relative w-full max-w-[320px] h-48 sm:h-52 bg-[#331c4f] pixel-border-retro rounded-none flex items-center justify-center cursor-pointer overflow-hidden group"
        style={{ borderColor: '#FFE8F5' }}
      >
        {/* Interior background paper texture */}
        <div className="absolute inset-1 bg-[#472a6b]" />

        {/* Diagonal folder lines using high-fidelity pixel blocks */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
          
          {/* Top Tri-flap flap fold */}
          <motion.div
            animate={isOpening ? { rotateX: 180, originY: '0%', opacity: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeIn' }}
            className="absolute top-0 left-0 w-full h-1/2 bg-[#52337a] border-b-4 border-[#FFE8F5]"
            style={{
              clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
              zIndex: 3,
            }}
          />

          {/* Left Flap */}
          <div
            className="absolute top-0 left-0 w-1/2 h-full bg-[#3c225a] border-r-2 border-[#7B5EA7]/30"
            style={{
              clipPath: 'polygon(0% 0%, 100% 50%, 0% 100%)',
              zIndex: 1,
            }}
          />

          {/* Right Flap */}
          <div
            className="absolute top-0 right-0 w-1/2 h-full bg-[#3c225a] border-l-2 border-[#7B5EA7]/30"
            style={{
              clipPath: 'polygon(100% 0%, 0% 50%, 100% 100%)',
              zIndex: 1,
            }}
          />

          {/* Bottom Flap */}
          <div
            className="absolute bottom-0 left-0 w-full h-2/3 bg-[#422662] border-t-2 border-[#FFE8F5]/20"
            style={{
              clipPath: 'polygon(0% 100%, 100% 100%, 50% 0%)',
              zIndex: 2,
            }}
          />
        </div>

        {/* 8-Bit Wax Seal stamp in the absolute center */}
        <motion.div
          animate={isOpening ? { scale: [1, 1.25, 0], opacity: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative flex items-center justify-center w-14 h-14 bg-[#F7D070] border-4 border-[#FFE8F5] z-20 shadow-md group-hover:scale-105 transition-transform duration-200"
          style={{ 
            boxShadow: '0 4px 0 #7B5EA7, inset -2px -2px 0px rgba(0,0,0,0.2)',
            backgroundColor: festivalId === 'new_year' ? '#FF4D4D' : festivalId === 'qixi' ? '#FF6B8B' : festivalId === 'christmas' ? '#E63946' : '#F7D070'
          }}
        >
          {/* Inner dotted border */}
          <div className="absolute inset-0.5 border-2 border-dashed border-[#FFE8F5]/30 pointer-events-none" />

          {/* 8-bit Seal icon based on festival */}
          {festivalId === 'mid_autumn' ? (
            <span className="text-xl select-none" role="img" aria-label="moon">🥮</span>
          ) : festivalId === 'new_year' ? (
            <span className="text-xl select-none font-pixel text-yellow-300 font-bold leading-none">福</span>
          ) : festivalId === 'christmas' ? (
            <span className="text-xl select-none" role="img" aria-label="christmas">🎄</span>
          ) : festivalId === 'memorial' ? (
            <span className="text-xl select-none" role="img" aria-label="star">⭐</span>
          ) : (
            <svg 
              className="w-7 h-7 text-[#7B5EA7] fill-current animate-pulse" 
              viewBox="0 0 8 8"
            >
              <path d="M1 2h2v1H1V2zm4 0h2v1H5V2zm-5 1h8v1H0V3zm0 1h8v1H0V4zm1 1h6v1H1V5zm2 1h4v1H3V6zm1 1h2v1H4V7z" />
            </svg>
          )}
        </motion.div>

        {/* Envelope address text label */}
        <div className="absolute bottom-3 left-4 right-4 text-center z-20 pointer-events-none">
          <span className="text-[10px] tracking-[0.1em] font-mono font-bold text-[#FFE8F5] uppercase opacity-75 group-hover:opacity-100 transition-opacity">
            ✦ CLICK TO OPEN ✦
          </span>
        </div>
      </motion.div>

      {/* Footer hint with bouncy pixel wiggle animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-8 flex flex-col items-center gap-1.5 cursor-pointer animate-pixel-wiggle"
        onClick={!isOpening ? handleOpenClick : undefined}
      >
        <div className="flex items-center gap-2">
          <span className="text-amber-300 text-xs shadow-glow">✦</span>
          <span className="text-xs font-pixel tracking-widest text-[#F5C6EA] text-center font-bold">
            点击解锁你的专属惊喜
          </span>
          <span className="text-amber-300 text-xs shadow-glow">✦</span>
        </div>
        <span className="text-[9px] font-mono text-[#C9A9E9]/70 uppercase tracking-widest leading-none">
          - press button to play -
        </span>
      </motion.div>
    </div>
  );
}
