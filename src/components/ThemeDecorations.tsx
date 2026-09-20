/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { FestivalId } from '../types';

interface ThemeDecorationsProps {
  festivalId: FestivalId;
  variant?: 'fullscreen' | 'envelope-corners';
}

export default function ThemeDecorations({ festivalId, variant = 'fullscreen' }: ThemeDecorationsProps) {
  if (variant === 'envelope-corners') {
    return <EnvelopeCornerDecorations festivalId={festivalId} />;
  }

  return <FullscreenThemeDecorations festivalId={festivalId} />;
}

// Fullscreen Desktop/Ambient floating scenery
function FullscreenThemeDecorations({ festivalId }: { festivalId: FestivalId }) {
  switch (festivalId) {
    case 'mid_autumn':
      return (
        <div className="pointer-events-none z-10 select-none">
          {/* Left top: Floating warm sky lantern with golden glow */}
          <div className="hidden lg:block absolute left-8 top-20 animate-balloon-1">
            <div className="flex flex-col items-center">
              <div 
                className="w-10 h-14 bg-no-repeat bg-contain"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='22' viewBox='0 0 16 22'%3E%3Cpath d='M4 0h8v1H4zm-2 1h12v2H2zm-1 2h14v10H1zm1 10h12v2H2zm2 2h8v1H4zm3 1h2v3H7zm-1 3h4v1H6z' fill='%23F7D070'/%3E%3Cpath d='M3 3h10v8H3z' fill='%23FFEAA7'/%3E%3Cpath d='M6 6h4v4H6z' fill='%23FF7675'/%3E%3Cpath d='M7 7h2v2H7z' fill='%23FFF'/%3E%3C/svg%3E")`,
                  imageRendering: 'pixelated',
                  width: '36px',
                  height: '48px',
                  filter: 'drop-shadow(0 0 8px rgba(247, 208, 112, 0.6))'
                }}
              />
              <span className="text-[7.5px] text-[#F7D070] mt-1 tracking-widest font-mono">孔明灯</span>
            </div>
          </div>

          {/* Right top: Osmanthus branch with blooming florets */}
          <div className="hidden lg:block absolute right-8 top-24 animate-balloon-2">
            <div className="flex flex-col items-center">
              <div 
                className="w-12 h-14 bg-no-repeat bg-contain"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='20' viewBox='0 0 18 20'%3E%3Cpath d='M2 18L16 2' stroke='%23634832' stroke-width='2'/%3E%3Cpath d='M4 6h3v3H4zm7 3h3v3h-3zm-5 6h3v3H6z' fill='%23F7D070'/%3E%3Cpath d='M11 2h4v4h-4z' fill='%23FFD166'/%3E%3Cpath d='M1 10h3v2H1zm10 8h3v2h-3z' fill='%23558B2F'/%3E%3C/svg%3E")`,
                  imageRendering: 'pixelated',
                  width: '42px',
                  height: '46px',
                  filter: 'drop-shadow(0 0 6px rgba(247, 208, 112, 0.4))'
                }}
              />
              <span className="text-[7.5px] text-[#FFE8AA] mt-1 tracking-widest font-mono">金桂飘香</span>
            </div>
          </div>
        </div>
      );

    case 'qixi':
      return (
        <div className="pointer-events-none z-10 select-none">
          {/* Left top: Magpie soaring with stardust */}
          <div className="hidden lg:block absolute left-10 top-20 animate-balloon-1">
            <div className="flex flex-col items-center">
              <div 
                className="w-12 h-12 bg-no-repeat bg-contain"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='16' viewBox='0 0 20 16'%3E%3Cpath d='M3 8h4v3H3zm4-2h6v5H7zm6 2h4v2h-4zm4-1h3v2h-3z' fill='%232B2B36'/%3E%3Cpath d='M0 6h4v2H0zm8 4h3v3H8z' fill='%23E8ECF2'/%3E%3Cpath d='M5 4h3v2H5zm4-3h4v3H9z' fill='%23748CAB'/%3E%3Cpath d='M1 5h1v1H1z' fill='%23FF4D6D'/%3E%3C/svg%3E")`,
                  imageRendering: 'pixelated',
                  width: '44px',
                  height: '36px',
                  filter: 'drop-shadow(0 0 8px rgba(255, 77, 109, 0.5))'
                }}
              />
              <div className="w-0.5 h-10 bg-gradient-to-b from-[#FF8FA3]/60 to-transparent" />
              <span className="text-[7.5px] text-[#FF8FA3] mt-0.5 font-mono">喜鹊寄情</span>
            </div>
          </div>

          {/* Right top: Floating double romantic pixel heart */}
          <div className="hidden lg:block absolute right-12 top-28 animate-balloon-2">
            <div className="flex flex-col items-center">
              <div 
                className="w-10 h-10 bg-no-repeat bg-contain"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='14' viewBox='0 0 16 14'%3E%3Cpath d='M2 0h4v2H2zm8 0h4v2h-4zM0 2h16v4H0zm2 4h12v2H2zm2 2h8v2H4zm2 2h4v2H6zm2 2h0v2H8z' fill='%23FF4D6D'/%3E%3Cpath d='M3 3h3v3H3z' fill='%23FFF'/%3E%3C/svg%3E")`,
                  imageRendering: 'pixelated',
                  width: '36px',
                  height: '32px',
                  filter: 'drop-shadow(0 0 10px rgba(255, 117, 143, 0.7))'
                }}
              />
              <div className="w-0.5 h-12 bg-gradient-to-b from-[#FFB3C1]/50 to-transparent" />
              <span className="text-[7.5px] text-[#FFB3C1] mt-0.5 font-mono">心动相守</span>
            </div>
          </div>
        </div>
      );

    case 'new_year':
      return (
        <div className="pointer-events-none z-10 select-none">
          {/* Left top: Swinging Red Palace Lantern with gold tassel */}
          <div className="hidden lg:block absolute left-8 top-12 animate-balloon-1">
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-8 bg-[#F7D070]" />
              <div 
                className="w-12 h-16 bg-no-repeat bg-contain"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='24' viewBox='0 0 16 24'%3E%3Cpath d='M5 0h6v1H5zm-2 1h10v2H3zm-2 2h14v10H1zm2 10h10v2H3zm2 2h6v1H5z' fill='%23C0392B'/%3E%3Cpath d='M4 3h8v10H4z' fill='%23E74C3C'/%3E%3Cpath d='M6 6h4v4H6z' fill='%23F1C40F'/%3E%3Cpath d='M7 16h2v6H7zm-1 6h4v2H6z' fill='%23F39C12'/%3E%3C/svg%3E")`,
                  imageRendering: 'pixelated',
                  width: '40px',
                  height: '56px',
                  filter: 'drop-shadow(0 0 10px rgba(231, 76, 60, 0.7))'
                }}
              />
              <span className="text-[7.5px] text-[#F7D070] mt-1 tracking-widest font-mono">吉祥红灯</span>
            </div>
          </div>

          {/* Right top: Auspicious Firecracker string */}
          <div className="hidden lg:block absolute right-10 top-14 animate-balloon-2">
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-6 bg-[#F7D070]" />
              <div 
                className="w-10 h-16 bg-no-repeat bg-contain"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='24' viewBox='0 0 14 24'%3E%3Cpath d='M6 0h2v4H6zm-3 4h4v3H3zm4 3h4v3H7zm-4 3h4v3H3zm4 3h4v3H7zm-4 3h4v3H3z' fill='%23D63031'/%3E%3Cpath d='M4 5h2v1H4zm4 3h2v1H8zm-4 3h2v1H4zm4 3h2v1H8z' fill='%23F1C40F'/%3E%3Cpath d='M6 19h2v4H6z' fill='%23F39C12'/%3E%3C/svg%3E")`,
                  imageRendering: 'pixelated',
                  width: '32px',
                  height: '52px',
                  filter: 'drop-shadow(0 0 8px rgba(241, 196, 15, 0.6))'
                }}
              />
              <span className="text-[7.5px] text-[#F7D070] mt-1 tracking-widest font-mono">百福齐臻</span>
            </div>
          </div>
        </div>
      );

    case 'christmas':
      return (
        <div className="pointer-events-none z-10 select-none">
          {/* Left top: Hanging Christmas Holly & Bauble with red ribbon */}
          <div className="hidden lg:block absolute left-8 top-16 animate-balloon-1">
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-8 bg-[#FFEAA7]" />
              <div 
                className="w-10 h-14 bg-no-repeat bg-contain"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='20' viewBox='0 0 16 20'%3E%3Cpath d='M6 0h4v2H6zm-1 2h6v2H5zm-3 2h12v10H2zm2 10h8v2H4zm2 2h4v1H6z' fill='%23E74C3C'/%3E%3Cpath d='M4 4h8v8H4z' fill='%23C0392B'/%3E%3Cpath d='M4 5h3v3H4z' fill='%23FFF'/%3E%3Cpath d='M6 1h4v1H6zm1 14h2v2H7z' fill='%23F1C40F'/%3E%3C/svg%3E")`,
                  imageRendering: 'pixelated',
                  width: '36px',
                  height: '46px',
                  filter: 'drop-shadow(0 0 8px rgba(231, 76, 60, 0.6))'
                }}
              />
              <span className="text-[7.5px] text-[#FFE8AA] mt-1 tracking-widest font-mono">圣诞彩球</span>
            </div>
          </div>

          {/* Right top: Cute pixel Pine wreath & Candy Cane */}
          <div className="hidden lg:block absolute right-10 top-20 animate-balloon-2">
            <div className="flex flex-col items-center">
              <div 
                className="w-12 h-14 bg-no-repeat bg-contain"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='20' viewBox='0 0 16 20'%3E%3Cpath d='M5 0h6v2H5zm-2 2h2v4H3zm8 0h2v4h-2zm-8 4h2v10H3zm8 0h2v4h-2z' fill='%23E74C3C'/%3E%3Cpath d='M5 2h6v2H5zm-2 4h2v2H3zm8 0h2v2h-2zm-8 4h2v2H3zm0 4h2v2H3z' fill='%23FFF'/%3E%3Cpath d='M1 8h4v4H1zm8 2h4v4H9z' fill='%2327AE60'/%3E%3C/svg%3E")`,
                  imageRendering: 'pixelated',
                  width: '38px',
                  height: '46px',
                  filter: 'drop-shadow(0 0 8px rgba(39, 174, 96, 0.5))'
                }}
              />
              <span className="text-[7.5px] text-[#FFE8AA] mt-1 tracking-widest font-mono">甜心拐杖</span>
            </div>
          </div>
        </div>
      );

    case 'memorial':
      return (
        <div className="pointer-events-none z-10 select-none">
          {/* Left top: Folded retro paper airplane gliding */}
          <div className="hidden lg:block absolute left-8 top-20 animate-balloon-1">
            <div className="flex flex-col items-center">
              <div 
                className="w-12 h-10 bg-no-repeat bg-contain"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='14' viewBox='0 0 20 14'%3E%3Cpath d='M0 4L20 0L8 14L6 9L0 4Z' fill='%23F8F9FA'/%3E%3Cpath d='M8 14L20 0L10 8L8 14Z' fill='%23CBD5E1'/%3E%3Cpath d='M6 9L10 8L8 14Z' fill='%2394A3B8'/%3E%3C/svg%3E")`,
                  imageRendering: 'pixelated',
                  width: '46px',
                  height: '32px',
                  filter: 'drop-shadow(0 0 8px rgba(203, 213, 225, 0.6))'
                }}
              />
              <div className="w-0.5 h-10 bg-gradient-to-b from-blue-300/40 to-transparent" />
              <span className="text-[7.5px] text-[#90CAF9] mt-0.5 font-mono">梦想起航</span>
            </div>
          </div>

          {/* Right top: Golden graduation cap / starry hourglass */}
          <div className="hidden lg:block absolute right-10 top-24 animate-balloon-2">
            <div className="flex flex-col items-center">
              <div 
                className="w-12 h-10 bg-no-repeat bg-contain"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='14' viewBox='0 0 20 14'%3E%3Cpath d='M10 0L20 5L10 10L0 5L10 0Z' fill='%232C3E50'/%3E%3Cpath d='M5 8v4c0 2 2.5 3 5 3s5-1 5-3V8L10 11L5 8z' fill='%231A252F'/%3E%3Cpath d='M10 0v5l4 4' stroke='%23F39C12' stroke-width='1.5'/%3E%3Cpath d='M14 9h2v4h-2z' fill='%23F1C40F'/%3E%3C/svg%3E")`,
                  imageRendering: 'pixelated',
                  width: '44px',
                  height: '32px',
                  filter: 'drop-shadow(0 0 8px rgba(243, 156, 18, 0.5))'
                }}
              />
              <div className="w-0.5 h-12 bg-[#F39C12]/40" />
              <span className="text-[7.5px] text-[#F7D070] mt-0.5 font-mono">岁月荣光</span>
            </div>
          </div>
        </div>
      );

    case 'birthday':
    default:
      return (
        <div className="pointer-events-none z-10 select-none">
          {/* Floating Decorative Balloons on Desktop Views */}
          <div className="hidden lg:block absolute left-10 top-24 animate-balloon-1">
            <div className="flex flex-col items-center">
              <div 
                className="w-12 h-14 bg-no-repeat bg-contain"
                style={{ 
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='14' viewBox='0 0 12 14'%3E%3Cpath d='M3 0h6v1H3zm-2 1h10v1H1zm-1 2h12v6H0zm1 6h10v1H1zm2 1h6v1H3zm2 1h2v1H5zm1 1v1h1v-1z' fill='%23F5C6EA'/%3E%3Cpath d='M2 3h2v1H2zm0 2h3v1H2z' fill='%23FFE8F5'/%3E%3C/svg%3E")`,
                  imageRendering: 'pixelated',
                  width: '32px',
                  height: '38px',
                  filter: 'drop-shadow(0 0 8px rgba(245, 198, 234, 0.5))'
                }} 
              />
              <div className="w-0.5 h-12 bg-[#C9A9E9]/40" />
              <span className="text-[7.5px] text-[#F5C6EA] mt-0.5 font-mono">SWEET 18</span>
            </div>
          </div>

          <div className="hidden lg:block absolute right-12 top-32 animate-balloon-2">
            <div className="flex flex-col items-center">
              <div 
                className="w-12 h-14 bg-no-repeat bg-contain"
                style={{ 
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='14' viewBox='0 0 12 14'%3E%3Cpath d='M3 0h6v1H3zm-2 1h10v1H1zm-1 2h12v6H0zm1 6h10v1H1zm2 1h6v1H3zm2 1h2v1H5zm1 1v1h1v-1z' fill='%23F7D070'/%3E%3Cpath d='M2 3h2v1H2zm0 2h3v1H2z' fill='%23FFE8F5'/%3E%3C/svg%3E")`,
                  imageRendering: 'pixelated',
                  width: '30px',
                  height: '36px',
                  filter: 'drop-shadow(0 0 8px rgba(247, 208, 112, 0.5))'
                }} 
              />
              <div className="w-0.5 h-16 bg-[#C9A9E9]/40" />
              <span className="text-[7.5px] text-[#F7D070] mt-0.5 font-mono">JOYFUL</span>
            </div>
          </div>
        </div>
      );
  }
}

// Envelope corner decorations customized per festival
function EnvelopeCornerDecorations({ festivalId }: { festivalId: FestivalId }) {
  switch (festivalId) {
    case 'mid_autumn':
      return (
        <>
          {/* Top-left: Golden Moon Crescent & Osmanthus sprig */}
          <div className="absolute top-4 left-3 flex items-end gap-2 opacity-85 pointer-events-none sm:top-10 sm:left-14 sm:gap-3">
            <div className="flex flex-col items-center animate-balloon-1">
              <div 
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='14' viewBox='0 0 12 14'%3E%3Cpath d='M4 0h4v1H4zm-2 1h6v2H2zm-1 2h6v8H1zm1 8h6v2H2zm2 2h4v1H4z' fill='%23F7D070'/%3E%3Cpath d='M3 3h4v8H3z' fill='%23FFEAA7'/%3E%3Cpath d='M5 5h2v4H5z' fill='%23FFF'/%3E%3C/svg%3E")`,
                  imageRendering: 'pixelated',
                  width: '20px',
                  height: '24px'
                }}
              />
              <div className="w-0.5 h-4 sm:h-6 bg-[#F7D070]/60" />
            </div>
            <div className="flex flex-col items-center animate-pixel-wiggle pb-1">
              <div 
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cpath d='M3 0h2v2H3zm-2 2h2v2H1zm4 0h2v2H5zm-2 2h2v2H3z' fill='%23FFD166'/%3E%3C/svg%3E")`,
                  imageRendering: 'pixelated',
                  width: '16px',
                  height: '16px'
                }}
              />
            </div>
          </div>

          {/* Bottom-right: Pixel Jade Rabbit silhouette & lantern */}
          <div className="absolute bottom-4 right-3 flex items-end gap-2 opacity-85 pointer-events-none sm:bottom-10 sm:right-14 sm:gap-3">
            <div className="flex flex-col items-center animate-pixel-bounce pb-1">
              <div 
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 1h2v4H2zm3 0h2v4H5zm-4 4h8v6H1zm2 6h4v1H3z' fill='%23FFF'/%3E%3Cpath d='M3 6h1v1H3zm3 0h1v1H6z' fill='%23FF7675'/%3E%3C/svg%3E")`,
                  imageRendering: 'pixelated',
                  width: '20px',
                  height: '20px'
                }}
              />
            </div>
            <div className="flex flex-col items-center animate-balloon-2">
              <div 
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='12' viewBox='0 0 10 12'%3E%3Cpath d='M2 0h6v1H2zm-1 1h8v8H1zm1 8h6v1H2zm2 1h2v2H4z' fill='%23E17055'/%3E%3Cpath d='M2 2h6v6H2z' fill='%23F7D070'/%3E%3C/svg%3E")`,
                  imageRendering: 'pixelated',
                  width: '18px',
                  height: '22px'
                }}
              />
              <div className="w-0.5 h-4 sm:h-6 bg-[#F7D070]/60" />
            </div>
          </div>
        </>
      );

    case 'qixi':
      return (
        <>
          {/* Top-left: Magpie & Rose heart */}
          <div className="absolute top-4 left-3 flex items-end gap-2 opacity-85 pointer-events-none sm:top-10 sm:left-14 sm:gap-3">
            <div className="flex flex-col items-center animate-balloon-1">
              <div 
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 1h3v2H2zm5 0h3v2H7zM0 3h12v4H0zm2 4h8v2H2zm2 2h4v2H4zm2 2h0v1H6z' fill='%23FF4D6D'/%3E%3Cpath d='M2 4h2v2H2z' fill='%23FFF'/%3E%3C/svg%3E")`,
                  imageRendering: 'pixelated',
                  width: '20px',
                  height: '20px'
                }}
              />
              <div className="w-0.5 h-4 sm:h-6 bg-[#FF8FA3]/60" />
            </div>
            <div className="flex flex-col items-center animate-pixel-wiggle pb-1">
              <div 
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cpath d='M3 0h2v1H3zm-1 1h4v1H2zm-2 2h8v2H0zm2 2h4v1H2zm1 1h2v1H3z' fill='%23FF758F'/%3E%3C/svg%3E")`,
                  imageRendering: 'pixelated',
                  width: '16px',
                  height: '16px'
                }}
              />
            </div>
          </div>

          {/* Bottom-right: Magpie winging & Silver Star */}
          <div className="absolute bottom-4 right-3 flex items-end gap-2 opacity-85 pointer-events-none sm:bottom-10 sm:right-14 sm:gap-3">
            <div className="flex flex-col items-center animate-pixel-bounce pb-1">
              <div 
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='10' viewBox='0 0 12 10'%3E%3Cpath d='M2 5h3v3H2zm3-2h4v4H5zm4 2h3v2H9z' fill='%233D3D4E'/%3E%3Cpath d='M0 4h3v2H0zm5 3h3v2H5z' fill='%23FFF'/%3E%3Cpath d='M3 2h3v2H3z' fill='%23748CAB'/%3E%3C/svg%3E")`,
                  imageRendering: 'pixelated',
                  width: '22px',
                  height: '18px'
                }}
              />
            </div>
            <div className="flex flex-col items-center animate-balloon-2">
              <div 
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='14' viewBox='0 0 12 14'%3E%3Cpath d='M3 0h6v1H3zm-2 1h10v1H1zm-1 2h12v6H0zm1 6h10v1H1zm2 1h6v1H3zm2 1h2v1H5zm1 1v1h1v-1z' fill='%23FF8FA3'/%3E%3Cpath d='M2 3h2v1H2zm0 2h3v1H2z' fill='%23FFE8F5'/%3E%3C/svg%3E")`,
                  imageRendering: 'pixelated',
                  width: '18px',
                  height: '21px'
                }}
              />
              <div className="w-0.5 h-4 sm:h-6 bg-[#FF8FA3]/60" />
            </div>
          </div>
        </>
      );

    case 'new_year':
      return (
        <>
          {/* Top-left: Traditional Red Lantern & Gold Ingot */}
          <div className="absolute top-4 left-3 flex items-end gap-2 opacity-85 pointer-events-none sm:top-10 sm:left-14 sm:gap-3">
            <div className="flex flex-col items-center animate-balloon-1">
              <div 
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='16' viewBox='0 0 12 16'%3E%3Cpath d='M3 0h6v1H3zm-2 1h10v2H1zm-1 2h12v8H0zm1 8h10v2H1zm2 2h6v1H3z' fill='%23C0392B'/%3E%3Cpath d='M2 3h8v8H2z' fill='%23E74C3C'/%3E%3Cpath d='M4 5h4v4H4z' fill='%23F1C40F'/%3E%3Cpath d='M5 14h2v2H5z' fill='%23F39C12'/%3E%3C/svg%3E")`,
                  imageRendering: 'pixelated',
                  width: '20px',
                  height: '26px'
                }}
              />
              <div className="w-0.5 h-4 sm:h-6 bg-[#F1C40F]/60" />
            </div>
            <div className="flex flex-col items-center animate-pixel-wiggle pb-1">
              <div 
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 0h8v1H1zm-1 1h10v3H0zm1 3h8v1H1zm2 1h4v1H3z' fill='%23F1C40F'/%3E%3Cpath d='M3 1h4v2H3z' fill='%23F39C12'/%3E%3C/svg%3E")`,
                  imageRendering: 'pixelated',
                  width: '18px',
                  height: '12px'
                }}
              />
            </div>
          </div>

          {/* Bottom-right: Firecracker & Gold Coin */}
          <div className="absolute bottom-4 right-3 flex items-end gap-2 opacity-85 pointer-events-none sm:bottom-10 sm:right-14 sm:gap-3">
            <div className="flex flex-col items-center animate-pixel-bounce pb-1">
              <div 
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10'%3E%3Cpath d='M2 0h6v1H2zm-1 1h8v1H1zm-1 1h10v6H0zm1 6h8v1H1zm1 1h6v1H2z' fill='%23F1C40F'/%3E%3Cpath d='M4 4h2v2H4z' fill='%23B7791F'/%3E%3C/svg%3E")`,
                  imageRendering: 'pixelated',
                  width: '18px',
                  height: '18px'
                }}
              />
            </div>
            <div className="flex flex-col items-center animate-balloon-2">
              <div 
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='14' viewBox='0 0 10 14'%3E%3Cpath d='M4 0h2v2H4zm-2 2h6v8H2zm2 8h2v4H4z' fill='%23D63031'/%3E%3Cpath d='M3 4h4v1H3zm0 3h4v1H3z' fill='%23F1C40F'/%3E%3C/svg%3E")`,
                  imageRendering: 'pixelated',
                  width: '18px',
                  height: '24px'
                }}
              />
              <div className="w-0.5 h-4 sm:h-6 bg-[#F1C40F]/60" />
            </div>
          </div>
        </>
      );

    case 'christmas':
      return (
        <>
          {/* Top-left: Holly Berry & Christmas Star */}
          <div className="absolute top-4 left-3 flex items-end gap-2 opacity-85 pointer-events-none sm:top-10 sm:left-14 sm:gap-3">
            <div className="flex flex-col items-center animate-balloon-1">
              <div 
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='14' viewBox='0 0 12 14'%3E%3Cpath d='M4 0h4v2H4zm-2 2h8v8H2zm2 8h4v2H4zm1 2h2v2H5z' fill='%23E74C3C'/%3E%3Cpath d='M3 3h3v3H3z' fill='%23FFF'/%3E%3Cpath d='M0 4h3v3H0zm9 0h3v3H9z' fill='%2327AE60'/%3E%3C/svg%3E")`,
                  imageRendering: 'pixelated',
                  width: '20px',
                  height: '24px'
                }}
              />
              <div className="w-0.5 h-4 sm:h-6 bg-[#27AE60]/60" />
            </div>
            <div className="flex flex-col items-center animate-pixel-wiggle pb-1">
              <div 
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cpath d='M3 0h2v1H3zm-1 1h4v1H2zm-2 2h8v2H0zm2 2h4v1H2zm1 1h2v1H3z' fill='%23F1C40F'/%3E%3C/svg%3E")`,
                  imageRendering: 'pixelated',
                  width: '16px',
                  height: '16px'
                }}
              />
            </div>
          </div>

          {/* Bottom-right: Pine Tree & Snowflake */}
          <div className="absolute bottom-4 right-3 flex items-end gap-2 opacity-85 pointer-events-none sm:bottom-10 sm:right-14 sm:gap-3">
            <div className="flex flex-col items-center animate-pixel-bounce pb-1">
              <div 
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='12' viewBox='0 0 10 12'%3E%3Cpath d='M4 0h2v2H4zm-2 2h6v2H2zm-2 2h10v2H0zm-1 2h12v3H-1zm4 3h2v3H4z' fill='%232E7D32'/%3E%3Cpath d='M4 0h2v1H4zm-1 2h2v1H3zm-2 2h2v1H1z' fill='%23FFF'/%3E%3C/svg%3E")`,
                  imageRendering: 'pixelated',
                  width: '20px',
                  height: '24px'
                }}
              />
            </div>
            <div className="flex flex-col items-center animate-balloon-2">
              <div 
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 10 10'%3E%3Cpath d='M4 0h2v10H4zm-4 4h10v2H0zm1-3l8 8m-8 0l8-8' stroke='%23E0F7FA' stroke-width='1.5'/%3E%3C/svg%3E")`,
                  imageRendering: 'pixelated',
                  width: '18px',
                  height: '18px'
                }}
              />
              <div className="w-0.5 h-4 sm:h-6 bg-[#E0F7FA]/60" />
            </div>
          </div>
        </>
      );

    case 'memorial':
      return (
        <>
          {/* Top-left: Paper Airplane & Star */}
          <div className="absolute top-4 left-3 flex items-end gap-2 opacity-85 pointer-events-none sm:top-10 sm:left-14 sm:gap-3">
            <div className="flex flex-col items-center animate-balloon-1">
              <div 
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='10' viewBox='0 0 14 10'%3E%3Cpath d='M0 3L14 0L6 10L4 6L0 3Z' fill='%23FFF'/%3E%3Cpath d='M6 10L14 0L7 6L6 10Z' fill='%23CBD5E1'/%3E%3C/svg%3E")`,
                  imageRendering: 'pixelated',
                  width: '24px',
                  height: '18px'
                }}
              />
              <div className="w-0.5 h-4 sm:h-6 bg-[#90CAF9]/60" />
            </div>
            <div className="flex flex-col items-center animate-pixel-wiggle pb-1">
              <div 
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cpath d='M3 0h2v1H3zm-1 1h4v1H2zm-2 2h8v2H0zm2 2h4v1H2zm1 1h2v1H3z' fill='%23FFE082'/%3E%3C/svg%3E")`,
                  imageRendering: 'pixelated',
                  width: '16px',
                  height: '16px'
                }}
              />
            </div>
          </div>

          {/* Bottom-right: Graduation cap & golden star */}
          <div className="absolute bottom-4 right-3 flex items-end gap-2 opacity-85 pointer-events-none sm:bottom-10 sm:right-14 sm:gap-3">
            <div className="flex flex-col items-center animate-pixel-bounce pb-1">
              <div 
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='10' viewBox='0 0 14 10'%3E%3Cpath d='M7 0L14 3.5L7 7L0 3.5L7 0Z' fill='%232C3E50'/%3E%3Cpath d='M3.5 5.5v3c0 1 1.5 1.5 3.5 1.5s3.5-0.5 3.5-1.5v-3L7 7.5L3.5 5.5z' fill='%231A252F'/%3E%3Cpath d='M7 0v3.5l3 2.5' stroke='%23F39C12' stroke-width='1'/%3E%3C/svg%3E")`,
                  imageRendering: 'pixelated',
                  width: '24px',
                  height: '18px'
                }}
              />
            </div>
            <div className="flex flex-col items-center animate-balloon-2">
              <div 
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='14' viewBox='0 0 12 14'%3E%3Cpath d='M3 0h6v1H3zm-2 1h10v1H1zm-1 2h12v6H0zm1 6h10v1H1zm2 1h6v1H3zm2 1h2v1H5zm1 1v1h1v-1z' fill='%23FFD54F'/%3E%3Cpath d='M2 3h2v1H2zm0 2h3v1H2z' fill='%23FFF'/%3E%3C/svg%3E")`,
                  imageRendering: 'pixelated',
                  width: '18px',
                  height: '21px'
                }}
              />
              <div className="w-0.5 h-4 sm:h-6 bg-[#FFE082]/60" />
            </div>
          </div>
        </>
      );

    case 'birthday':
    default:
      return (
        <>
          {/* Pixel Balloon (Pink) */}
          <div className="absolute top-4 left-3 flex items-end gap-2 opacity-80 pointer-events-none sm:top-10 sm:left-14 sm:gap-3">
            <div className="flex flex-col items-center animate-balloon-1">
              <div 
                style={{ 
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='14' viewBox='0 0 12 14'%3E%3Cpath d='M3 0h6v1H3zm-2 1h10v1H1zm-1 2h12v6H0zm1 6h10v1H1zm2 1h6v1H3zm2 1h2v1H5zm1 1v1h1v-1z' fill='%23FF8FA3'/%3E%3Cpath d='M2 3h2v1H2zm0 2h3v1H2z' fill='%23FFE8F5'/%3E%3C/svg%3E")`,
                  imageRendering: 'pixelated',
                  width: '18px',
                  height: '21px'
                }} 
              />
              <div className="w-0.5 h-4 sm:h-6 bg-[#C9A9E9]/60" />
            </div>
            <div className="flex flex-col items-center animate-pixel-wiggle pb-1">
              <div 
                style={{ 
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3E%3Cpath d='M3 0h2v1H3zm-1 1h4v1H2zm-2 2h8v2H0zm2 2h4v1H2zm1 1h2v1H3zm-1-4h1v1H2zm3 0h1v1H5z' fill='%23F7D070'/%3E%3C/svg%3E")`,
                  imageRendering: 'pixelated',
                  width: '16px',
                  height: '16px'
                }} 
              />
            </div>
          </div>

          <div className="absolute bottom-4 right-3 flex items-end gap-2 opacity-80 pointer-events-none sm:bottom-10 sm:right-14 sm:gap-3">
            <div className="flex flex-col items-center animate-pixel-bounce pb-1">
              <div 
                style={{ 
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M4 0h4v1H4zm-1 1h6v1H3zm-2 2h10v3H1zm1 3h8v1H2zm-1 1h10v3H1z' fill='%23F5C6EA'/%3E%3Cpath d='M3 6h6v5H3z' fill='%23FFB7D5'/%3E%3Cpath d='M5 2h2v4H5z' fill='%23F7D070'/%3E%3Cpath d='M5 0h2v1H5z' fill='%23FFE8F5'/%3E%3C/svg%3E")`,
                  imageRendering: 'pixelated',
                  width: '18px',
                  height: '18px'
                }} 
              />
            </div>
            <div className="flex flex-col items-center animate-balloon-2">
              <div 
                style={{ 
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='14' viewBox='0 0 12 14'%3E%3Cpath d='M3 0h6v1H3zm-2 1h10v1H1zm-1 2h12v6H0zm1 6h10v1H1zm2 1h6v1H3zm2 1h2v1H5zm1 1v1h1v-1z' fill='%23A1E3D8'/%3E%3Cpath d='M2 3h2v1H2zm0 2h3v1H2z' fill='%23FFE8F5'/%3E%3C/svg%3E")`,
                  imageRendering: 'pixelated',
                  width: '18px',
                  height: '21px'
                }} 
              />
              <div className="w-0.5 h-4 sm:h-6 bg-[#C9A9E9]/60" />
            </div>
          </div>
        </>
      );
  }
}
