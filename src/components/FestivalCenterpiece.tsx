/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { PixelBirthdayCake } from './PixelBirthdayCake';
import { FestivalId } from '../types';

interface FestivalCenterpieceProps {
  festivalId: FestivalId;
  isLit: boolean;
  onBlowout: () => void;
  recipientName?: string;
  level?: number;
  levelPrefix?: string;
}

export const FestivalCenterpiece: React.FC<FestivalCenterpieceProps> = ({
  festivalId,
  isLit,
  onBlowout,
  recipientName = '寿星',
  level = 18,
  levelPrefix = 'LEVEL'
}) => {
  // Birthday uses the full two-tier animated cake
  if (festivalId === 'birthday') {
    return (
      <PixelBirthdayCake
        isLit={isLit}
        onBlowout={onBlowout}
        birthdayName={recipientName}
      />
    );
  }

  // Mid-Autumn Jade Rabbit & Golden Osmanthus Mooncake
  if (festivalId === 'mid_autumn') {
    return (
      <div 
        className="relative flex flex-col items-center select-none cursor-pointer group"
        onClick={onBlowout}
        title="点击玉兔与金桂月饼许愿祈福"
      >
        <div className="relative w-48 sm:w-56 h-40 flex items-center justify-center">
          {/* Moon halo glow */}
          <div className={`absolute w-36 h-36 rounded-full bg-amber-400/20 blur-xl transition-opacity duration-500 ${isLit ? 'opacity-90 animate-pulse' : 'opacity-30'}`} />

          {/* Golden Full Moon background */}
          <svg viewBox="0 0 160 120" className="w-full h-full drop-shadow-[0_4px_16px_rgba(247,208,112,0.35)]" style={{ shapeRendering: 'crispEdges' }}>
            {/* Moon disc in background */}
            <circle cx="80" cy="55" r="42" fill="#FFEAA7" opacity="0.85" />
            <circle cx="75" cy="50" r="38" fill="#FFF9E6" />
            {/* Lunar craters pixel styling */}
            <rect x="60" y="35" width="10" height="6" fill="#F7D070" opacity="0.4" />
            <rect x="95" y="45" width="12" height="8" fill="#F7D070" opacity="0.35" />
            <rect x="75" y="70" width="14" height="6" fill="#F7D070" opacity="0.3" />

            {/* Clouds drifting */}
            <rect x="30" y="48" width="45" height="4" fill="#E8D5F5" opacity="0.7" />
            <rect x="35" y="44" width="30" height="4" fill="#FFE8F5" opacity="0.8" />
            <rect x="95" y="60" width="40" height="4" fill="#E8D5F5" opacity="0.7" />

            {/* Jade Rabbit Sitting on Mooncake */}
            <g transform="translate(68, 14)">
              {/* Ears */}
              <rect x="6" y="0" width="3" height="12" fill="#FFFFFF" stroke="#FFE8F5" strokeWidth="0.5" />
              <rect x="7" y="2" width="1" height="8" fill="#FFB7D5" />
              <rect x="13" y="2" width="3" height="11" fill="#FFFFFF" stroke="#FFE8F5" strokeWidth="0.5" />
              <rect x="14" y="4" width="1" height="7" fill="#FFB7D5" />
              {/* Head */}
              <rect x="4" y="10" width="14" height="12" fill="#FFFFFF" />
              {/* Eyes */}
              <rect x="13" y="14" width="2" height="2" fill="#E84393" />
              {/* Body */}
              <rect x="2" y="20" width="18" height="14" fill="#FFFFFF" />
              {/* Tail */}
              <rect x="0" y="26" width="3" height="4" fill="#FFFFFF" />
              {/* Paws */}
              <rect x="14" y="26" width="6" height="4" fill="#FFFFFF" />
              {/* Osmanthus Mortar pestle */}
              <rect x="17" y="18" width="3" height="12" fill="#F7D070" />
            </g>

            {/* Traditional Golden Mooncake */}
            <g transform="translate(35, 60)">
              {/* Base shadow */}
              <rect x="6" y="46" width="78" height="6" fill="#5E3B85" opacity="0.5" />
              {/* Outer Golden Crust */}
              <rect x="4" y="12" width="82" height="34" rx="2" fill="#D38A28" stroke="#FFE8AA" strokeWidth="1" />
              <rect x="8" y="8" width="74" height="6" fill="#F39C12" />
              <rect x="12" y="4" width="66" height="6" fill="#F8C471" />
              {/* Mooncake Top Pattern & Character "吉 / 团" */}
              <rect x="16" y="2" width="58" height="4" fill="#FAD7A0" />
              {/* Embossed flower edge */}
              {[12, 22, 32, 42, 52, 62, 72].map((x) => (
                <rect key={`edge-${x}`} x={x} y="8" width="6" height="4" fill="#B9770E" />
              ))}
              {/* Center Embossed Badge */}
              <rect x="36" y="16" width="18" height="18" fill="#F39C12" stroke="#B9770E" strokeWidth="1" />
              <text x="45" y="30" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="bold" fontFamily="monospace">
                团
              </text>
            </g>

            {/* Osmanthus Yellow Floral Sprigs */}
            <circle cx="28" cy="85" r="3" fill="#F1C40F" />
            <circle cx="34" cy="88" r="2.5" fill="#F39C12" />
            <circle cx="132" cy="84" r="3" fill="#F1C40F" />
            <circle cx="126" cy="88" r="2.5" fill="#F39C12" />
          </svg>
        </div>

        {/* Action badge */}
        <div className="mt-2 px-3 py-1 bg-[#1A1A3A]/80 border border-[#F7D070] text-[10px] text-[#F7D070] font-pixel flex items-center gap-1.5 shadow-md group-hover:bg-[#F7D070] group-hover:text-black transition-colors">
          <span>🌕</span>
          <span>{isLit ? '轻点玉兔与月饼 · 寄托千里婵娟' : '✨ 广寒心愿已随月光送达 ✨'}</span>
        </div>
      </div>
    );
  }

  // Qixi Festival Romantic Star Crystal & Magpie Wings
  if (festivalId === 'qixi') {
    return (
      <div 
        className="relative flex flex-col items-center select-none cursor-pointer group"
        onClick={onBlowout}
        title="点击同心星核许愿誓言"
      >
        <div className="relative w-48 sm:w-56 h-40 flex items-center justify-center">
          {/* Pulsing Pink Heart Glow */}
          <div className={`absolute w-36 h-36 rounded-full bg-pink-500/25 blur-xl transition-opacity duration-500 ${isLit ? 'opacity-90 animate-pulse' : 'opacity-40'}`} />

          <svg viewBox="0 0 160 120" className="w-full h-full drop-shadow-[0_4px_16px_rgba(255,107,139,0.4)]" style={{ shapeRendering: 'crispEdges' }}>
            {/* Magpie bridge arches in silver stardust */}
            <path d="M 10 95 Q 80 50 150 95" stroke="#FFE8F5" strokeWidth="3" strokeDasharray="3,3" fill="none" opacity="0.6" />
            
            {/* Flying Magpie 1 (Left) */}
            <g transform="translate(30, 48)">
              <rect x="6" y="4" width="8" height="5" fill="#2C3A47" />
              <rect x="0" y="0" width="8" height="4" fill="#1B1464" />
              <rect x="12" y="2" width="6" height="3" fill="#FFE8F5" />
              <rect x="16" y="3" width="2" height="1" fill="#E84118" />
            </g>

            {/* Flying Magpie 2 (Right) */}
            <g transform="translate(112, 44)">
              <rect x="4" y="4" width="8" height="5" fill="#2C3A47" />
              <rect x="10" y="0" width="8" height="4" fill="#1B1464" />
              <rect x="0" y="2" width="6" height="3" fill="#FFE8F5" />
              <rect x="0" y="3" width="2" height="1" fill="#E84118" />
            </g>

            {/* Central Giant Pixel Double-Heart Crystal */}
            <g transform="translate(56, 32)">
              {/* Heart Outline & Shading */}
              <path 
                d="M 12 0 H 20 V 4 H 28 V 12 H 36 V 20 H 40 V 28 H 36 V 36 H 28 V 44 H 20 V 48 H 12 V 44 H 4 V 36 H 0 V 28 H 4 V 20 H 12 Z" 
                fill="#FF6B8B" 
                stroke="#FFE8F5" 
                strokeWidth="1.5" 
                transform="translate(4,0)"
              />
              {/* Inner Sparkling Facet */}
              <path 
                d="M 14 6 H 18 V 10 H 26 V 18 H 30 V 26 H 26 V 32 H 18 V 38 H 14 Z" 
                fill="#FF8FA3" 
                transform="translate(4,0)"
              />
              <rect x="12" y="8" width="4" height="6" fill="#FFF" />
              <rect x="14" y="14" width="2" height="4" fill="#FFF" />
            </g>

            {/* Floating Love Sparkles */}
            <circle cx="48" cy="28" r="2" fill="#FFD166" />
            <circle cx="114" cy="26" r="2" fill="#FFD166" />
            <circle cx="80" cy="18" r="2.5" fill="#FFE8F5" className="animate-ping" />

            {/* Golden Ribbon Stand */}
            <rect x="45" y="94" width="70" height="4" fill="#F7D070" stroke="#FFE8F5" strokeWidth="0.5" />
            <rect x="55" y="98" width="50" height="3" fill="#E5B142" />
          </svg>
        </div>

        <div className="mt-2 px-3 py-1 bg-[#3B1538]/80 border border-[#FF6B8B] text-[10px] text-[#FF8FA3] font-pixel flex items-center gap-1.5 shadow-md group-hover:bg-[#FF6B8B] group-hover:text-white transition-colors">
          <span>🎋</span>
          <span>{isLit ? '轻点同心星核 · 许下白首之约' : '💖 誓言已入星河，爱意永恒 💍'}</span>
        </div>
      </div>
    );
  }

  // New Year / Spring Festival Auspicious Red Lantern & Golden Ingot
  if (festivalId === 'new_year') {
    return (
      <div 
        className="relative flex flex-col items-center select-none cursor-pointer group"
        onClick={onBlowout}
        title="点击吉祥红灯笼与金元宝"
      >
        <div className="relative w-48 sm:w-56 h-40 flex items-center justify-center">
          {/* Warm Festive Red Glow */}
          <div className={`absolute w-36 h-36 rounded-full bg-red-600/25 blur-xl transition-opacity duration-500 ${isLit ? 'opacity-90 animate-pulse' : 'opacity-40'}`} />

          <svg viewBox="0 0 160 120" className="w-full h-full drop-shadow-[0_4px_16px_rgba(255,77,77,0.4)]" style={{ shapeRendering: 'crispEdges' }}>
            {/* Hanging Cord */}
            <line x1="80" y1="0" x2="80" y2="18" stroke="#FFD700" strokeWidth="2" />

            {/* Lantern Top Cap */}
            <rect x="66" y="18" width="28" height="6" fill="#F39C12" stroke="#FFE8AA" strokeWidth="1" />

            {/* Main Red Lantern Body */}
            <g transform="translate(52, 24)">
              {/* Outer shape */}
              <rect x="4" y="0" width="48" height="42" rx="6" fill="#E74C3C" stroke="#FFD700" strokeWidth="1.5" />
              {/* Shading Ribs */}
              <line x1="16" y1="0" x2="16" y2="42" stroke="#C0392B" strokeWidth="2" />
              <line x1="40" y1="0" x2="40" y2="42" stroke="#C0392B" strokeWidth="2" />
              <line x1="28" y1="0" x2="28" y2="42" stroke="#FFD700" strokeWidth="1" />
              
              {/* Gold "福" Plaque */}
              <rect x="20" y="12" width="16" height="18" fill="#F1C40F" stroke="#B7950B" strokeWidth="1" />
              <text x="28" y="26" textAnchor="middle" fill="#900C3F" fontSize="13" fontWeight="bold" fontFamily="sans-serif">
                福
              </text>
            </g>

            {/* Lantern Bottom Cap */}
            <rect x="66" y="66" width="28" height="5" fill="#F39C12" stroke="#FFE8AA" strokeWidth="1" />

            {/* Golden Tassels */}
            <line x1="72" y1="71" x2="72" y2="88" stroke="#FFD700" strokeWidth="2" />
            <line x1="80" y1="71" x2="80" y2="92" stroke="#FFD700" strokeWidth="2.5" />
            <line x1="88" y1="71" x2="88" y2="88" stroke="#FFD700" strokeWidth="2" />

            {/* Pair of Lucky Golden Ingots at base */}
            <g transform="translate(24, 86)">
              <polygon points="4,10 8,2 24,2 28,10 20,14 12,14" fill="#F1C40F" stroke="#B7950B" strokeWidth="1" />
              <ellipse cx="16" cy="3" rx="6" ry="2" fill="#F9E79F" />
            </g>

            <g transform="translate(108, 86)">
              <polygon points="4,10 8,2 24,2 28,10 20,14 12,14" fill="#F1C40F" stroke="#B7950B" strokeWidth="1" />
              <ellipse cx="16" cy="3" rx="6" ry="2" fill="#F9E79F" />
            </g>
          </svg>
        </div>

        <div className="mt-2 px-3 py-1 bg-[#4D0D19]/80 border border-[#FFD700] text-[10px] text-[#FFD700] font-pixel flex items-center gap-1.5 shadow-md group-hover:bg-[#FFD700] group-hover:text-black transition-colors">
          <span>🧧</span>
          <span>{isLit ? '轻点吉祥红灯笼 · 唤醒满堂财气' : '✨ 迎春纳福，大吉大利，暴富暴美！ ✨'}</span>
        </div>
      </div>
    );
  }

  // Christmas Decorated Magic Tree & Gift Box
  if (festivalId === 'christmas') {
    return (
      <div 
        className="relative flex flex-col items-center select-none cursor-pointer group"
        onClick={onBlowout}
        title="点击魔法圣诞树许愿"
      >
        <div className="relative w-48 sm:w-56 h-40 flex items-center justify-center">
          <div className={`absolute w-36 h-36 rounded-full bg-amber-400/25 blur-xl transition-opacity duration-500 ${isLit ? 'opacity-90 animate-pulse' : 'opacity-40'}`} />

          <svg viewBox="0 0 160 120" className="w-full h-full drop-shadow-[0_4px_16px_rgba(230,57,70,0.35)]" style={{ shapeRendering: 'crispEdges' }}>
            {/* Gold Star on Top */}
            <polygon points="80,10 83,18 92,18 85,23 88,31 80,26 72,31 75,23 68,18 77,18" fill="#F1C40F" stroke="#FFF" strokeWidth="0.5" className="animate-spin-slow origin-[80px_20px]" />

            {/* Christmas Tree Tier 1 */}
            <polygon points="80,22 62,44 98,44" fill="#2ECC71" stroke="#27AE60" strokeWidth="1" />
            {/* Snow caps */}
            <rect x="68" y="42" width="24" height="3" fill="#FFFFFF" rx="1" />

            {/* Christmas Tree Tier 2 */}
            <polygon points="80,38 52,66 108,66" fill="#27AE60" stroke="#1E8449" strokeWidth="1" />
            <rect x="58" y="64" width="44" height="3" fill="#FFFFFF" rx="1" />

            {/* Christmas Tree Tier 3 */}
            <polygon points="80,58 42,90 118,90" fill="#1E8449" stroke="#145A32" strokeWidth="1" />
            <rect x="46" y="88" width="68" height="3" fill="#FFFFFF" rx="1" />

            {/* Tree Trunk */}
            <rect x="74" y="90" width="12" height="12" fill="#795548" stroke="#4E342E" strokeWidth="1" />

            {/* Colored Bauble Ornaments */}
            <circle cx="72" cy="38" r="2.5" fill="#E74C3C" />
            <circle cx="86" cy="36" r="2.5" fill="#F1C40F" />
            <circle cx="64" cy="58" r="3" fill="#3498DB" />
            <circle cx="94" cy="60" r="3" fill="#E74C3C" />
            <circle cx="78" cy="54" r="2.5" fill="#F1C40F" />
            <circle cx="56" cy="80" r="3" fill="#F39C12" />
            <circle cx="104" cy="82" r="3" fill="#9B59B6" />
            <circle cx="80" cy="76" r="3" fill="#E74C3C" />

            {/* Gift Box under tree */}
            <g transform="translate(100, 88)">
              <rect x="0" y="4" width="18" height="14" fill="#E74C3C" stroke="#C0392B" strokeWidth="1" />
              <rect x="7" y="4" width="4" height="14" fill="#F1C40F" />
              <rect x="0" y="9" width="18" height="4" fill="#F1C40F" />
              <rect x="6" y="0" width="6" height="4" fill="#F1C40F" />
            </g>

            <g transform="translate(42, 90)">
              <rect x="0" y="4" width="16" height="12" fill="#3498DB" stroke="#2980B9" strokeWidth="1" />
              <rect x="6" y="4" width="4" height="12" fill="#FFF" />
              <rect x="0" y="8" width="16" height="4" fill="#FFF" />
            </g>
          </svg>
        </div>

        <div className="mt-2 px-3 py-1 bg-[#4A0A13]/85 border border-[#E63946] text-[10px] text-[#FFE8AA] font-pixel flex items-center gap-1.5 shadow-md group-hover:bg-[#E63946] group-hover:text-white transition-colors">
          <span>🎄</span>
          <span>{isLit ? '轻点魔法圣诞树 · 许下冬日心愿' : '🎅 圣诞老人已签收心愿，温暖相伴！ 🎁'}</span>
        </div>
      </div>
    );
  }

  // Memorial & Anniversary Vintage Time Capsule & Starlight Bottle
  return (
    <div 
      className="relative flex flex-col items-center select-none cursor-pointer group"
      onClick={onBlowout}
      title="点击时光琉璃瓶许愿"
    >
      <div className="relative w-48 sm:w-56 h-40 flex items-center justify-center">
        <div className={`absolute w-36 h-36 rounded-full bg-blue-500/20 blur-xl transition-opacity duration-500 ${isLit ? 'opacity-90 animate-pulse' : 'opacity-40'}`} />

        <svg viewBox="0 0 160 120" className="w-full h-full drop-shadow-[0_4px_16px_rgba(100,181,246,0.35)]" style={{ shapeRendering: 'crispEdges' }}>
          {/* Pedestal Stand */}
          <rect x="40" y="96" width="80" height="8" fill="#34495E" stroke="#BDC3C7" strokeWidth="1" />
          <rect x="52" y="92" width="56" height="4" fill="#2C3E50" />

          {/* Starlight Glass Bottle */}
          <g transform="translate(56, 18)">
            {/* Cork Stopper */}
            <rect x="18" y="0" width="12" height="8" fill="#D35400" stroke="#A04000" strokeWidth="1" />
            <rect x="16" y="8" width="16" height="4" fill="#BDC3C7" opacity="0.8" />

            {/* Bottle Neck */}
            <rect x="18" y="12" width="12" height="10" fill="#EBF5FB" opacity="0.6" stroke="#85C1E9" strokeWidth="1" />

            {/* Bottle Body */}
            <rect x="4" y="22" width="40" height="52" rx="4" fill="#EBF5FB" opacity="0.5" stroke="#85C1E9" strokeWidth="1.5" />
            {/* Glass Highlights */}
            <line x1="8" y1="26" x2="8" y2="70" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.8" />
            <line x1="12" y1="28" x2="12" y2="40" stroke="#FFFFFF" strokeWidth="1" opacity="0.6" />

            {/* Inside Scroll & Floating Stars */}
            <rect x="16" y="44" width="16" height="22" fill="#FAD7A0" stroke="#D4AC0D" strokeWidth="1" rx="1" />
            <line x1="20" y1="48" x2="28" y2="48" stroke="#7D6608" strokeWidth="1" />
            <line x1="20" y1="53" x2="28" y2="53" stroke="#7D6608" strokeWidth="1" />
            <line x1="20" y1="58" x2="26" y2="58" stroke="#7D6608" strokeWidth="1" />

            {/* Floating Golden Starlets */}
            <circle cx="24" cy="34" r="2.5" fill="#F1C40F" className="animate-ping" />
            <circle cx="12" cy="50" r="1.5" fill="#F39C12" />
            <circle cx="34" cy="40" r="1.5" fill="#F1C40F" />
            <circle cx="32" cy="62" r="2" fill="#F39C12" />
          </g>
        </svg>
      </div>

      <div className="mt-2 px-3 py-1 bg-[#1B2A47]/80 border border-[#64B5F6] text-[10px] text-[#FFE082] font-pixel flex items-center gap-1.5 shadow-md group-hover:bg-[#64B5F6] group-hover:text-black transition-colors">
        <span>⏳</span>
        <span>{isLit ? '轻点时光寄语瓶 · 让岁月为约定加冕' : '✨ 时光会流逝，但回忆与真情永存 ✨'}</span>
      </div>
    </div>
  );
};
