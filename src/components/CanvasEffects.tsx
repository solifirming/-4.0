/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import { TwinkleStar, Petal, FireworkParticle, FireworkRocket, FestivalId } from '../types';

interface CanvasEffectsProps {
  enableFireworks: boolean;
  enablePetals: boolean;
  festivalId?: FestivalId;
}

interface SkyLantern {
  x: number;
  y: number;
  speedY: number;
  speedX: number;
  size: number;
  flameFlicker: number;
  opacity: number;
}

interface PaperPlane {
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  angle: number;
}

interface CloudLayer {
  x: number;
  y: number;
  width: number;
  height: number;
  speed: number;
  opacity: number;
}

export default function CanvasEffects({ enableFireworks, enablePetals, festivalId = 'birthday' }: CanvasEffectsProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.imageSmoothingEnabled = false;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: entryWidth, height: entryHeight } = entry.contentRect;
        width = entryWidth;
        height = entryHeight;
        canvas.width = entryWidth * dpr;
        canvas.height = entryHeight * dpr;
        ctx.scale(dpr, dpr);
        initStars();
        initPetals();
        initThemeElements();
      }
    });

    resizeObserver.observe(canvas.parentElement || document.body);

    const stars: TwinkleStar[] = [];
    const petals: Petal[] = [];
    const rockets: FireworkRocket[] = [];
    const fragments: FireworkParticle[] = [];
    const skyLanterns: SkyLantern[] = [];
    const clouds: CloudLayer[] = [];
    let paperPlane: PaperPlane | null = null;
    let tickCount = 0;

    // Theme-based canvas trail fill colors
    const themeTrailColors: Record<FestivalId, string> = {
      birthday: 'rgba(32, 14, 48, 0.24)',
      mid_autumn: 'rgba(12, 22, 40, 0.24)',
      qixi: 'rgba(38, 12, 32, 0.24)',
      new_year: 'rgba(46, 10, 14, 0.24)',
      christmas: 'rgba(48, 10, 16, 0.24)',
      memorial: 'rgba(18, 22, 36, 0.24)',
    };

    // Initialize retro stars
    const initStars = () => {
      stars.length = 0;
      const count = Math.min(100, Math.floor((width * height) / 8500));
      
      for (let i = 0; i < count; i++) {
        // For Qixi, concentrate more stars along a diagonal Milky Way band
        let x = Math.random() * width;
        let y = Math.random() * height * 0.85;

        if (festivalId === 'qixi' && Math.random() > 0.35) {
          // Milky Way path
          const t = Math.random();
          x = t * width;
          y = t * (height * 0.6) + (Math.random() * 90 - 45);
        }

        stars.push({
          x,
          y,
          size: Math.random() > 0.7 ? 3 : 1,
          opacity: Math.random() * 0.8 + 0.2,
          speed: Math.random() * 0.015 + 0.005,
          increasing: Math.random() > 0.5,
        });
      }
    };

    // Theme-specific elements setup
    const initThemeElements = () => {
      clouds.length = 0;
      skyLanterns.length = 0;

      if (festivalId === 'mid_autumn') {
        // Clouds drifting near moon
        for (let i = 0; i < 4; i++) {
          clouds.push({
            x: (i * (width / 3)) + Math.random() * 50,
            y: 40 + i * 35,
            width: 90 + Math.random() * 80,
            height: 18 + Math.random() * 10,
            speed: 0.15 + Math.random() * 0.15,
            opacity: 0.18 + Math.random() * 0.14,
          });
        }

        // Sky lanterns rising slowly
        for (let i = 0; i < 5; i++) {
          skyLanterns.push({
            x: Math.random() * width,
            y: Math.random() * height,
            speedY: -(Math.random() * 0.35 + 0.25),
            speedX: Math.random() * 0.2 - 0.1,
            size: Math.floor(Math.random() * 4) + 8,
            flameFlicker: Math.random() * Math.PI,
            opacity: Math.random() * 0.4 + 0.55,
          });
        }
      }

      if (festivalId === 'memorial') {
        paperPlane = {
          x: -60,
          y: Math.random() * (height * 0.4) + 60,
          speedX: 0.75,
          speedY: 0.15,
          angle: 0.12,
        };
      } else {
        paperPlane = null;
      }
    };

    // Initialize falling pixel petals/elements
    const initPetals = () => {
      petals.length = 0;
      if (!enablePetals) return;

      const count = festivalId === 'christmas' ? 42 : 30;

      const festivalPetalPalettes: Record<FestivalId, string[]> = {
        birthday: ['#F5C6EA', '#C9A9E9', '#FFE8F5', '#FFB7D5', '#A1E3D8'],
        mid_autumn: ['#FFD166', '#F7D070', '#FFE8AA', '#FFF9DB', '#F39C12'],
        qixi: ['#FF4D6D', '#FF758F', '#FF8FA3', '#FFB3C1', '#FFE5EC'],
        new_year: ['#FFD700', '#FFA500', '#FF3333', '#FFE873', '#FF4D4D'],
        christmas: ['#FFFFFF', '#E0F7FA', '#B2EBF2', '#80DEEA', '#F8F9FA'],
        memorial: ['#FFD54F', '#FFE082', '#90CAF9', '#BBDEFB', '#FFFFFF'],
      };

      const petalColors = festivalPetalPalettes[festivalId] || festivalPetalPalettes.birthday;

      for (let i = 0; i < count; i++) {
        petals.push({
          x: Math.random() * width,
          y: Math.random() * height - height,
          size: festivalId === 'christmas' 
            ? (Math.random() > 0.6 ? 6 : 3)
            : Math.floor(Math.random() * 3) * 2 + 5,
          opacity: Math.random() * 0.4 + 0.6,
          speedX: Math.random() * 0.8 - 0.4,
          speedY: festivalId === 'christmas' ? Math.random() * 0.5 + 0.4 : Math.random() * 0.6 + 0.5,
          angle: Math.random() * Math.PI * 2,
          spinSpeed: (Math.random() * 0.02 - 0.01) * Math.PI,
          color: petalColors[Math.floor(Math.random() * petalColors.length)],
        });
      }
    };

    initStars();
    initThemeElements();
    initPetals();

    const launchFirework = (startX: number, targetX?: number, targetHeight?: number) => {
      if (!enableFireworks) return;
      const finalX = targetX ?? startX;
      const targetY = targetHeight ?? (Math.random() * height * 0.3 + height * 0.15);

      const festivalFireworkPalettes: Record<FestivalId, string[]> = {
        birthday: ['#F5C6EA', '#FFE8F5', '#C9A9E9', '#7B5EA7', '#F7D070', '#A1E3D8', '#FF8FA3'],
        mid_autumn: ['#FFD166', '#F7D070', '#FFE8AA', '#FFF9DB', '#F39C12', '#FFFFFF'],
        qixi: ['#FF4D6D', '#FF758F', '#FFB3C1', '#FFE5EC', '#748CAB', '#FFFFFF'],
        new_year: ['#FF3333', '#FFD700', '#FFA500', '#FFE873', '#FF4D4D', '#FFF275'],
        christmas: ['#E74C3C', '#2ECC71', '#F1C40F', '#E0F7FA', '#FFFFFF', '#3498DB'],
        memorial: ['#FFD54F', '#90CAF9', '#FFE082', '#FFFFFF', '#64B5F6', '#E2E8F0'],
      };

      const palette = festivalFireworkPalettes[festivalId] || festivalFireworkPalettes.birthday;
      const color = palette[Math.floor(Math.random() * palette.length)];

      rockets.push({
        x: Math.floor(finalX),
        y: height - 10,
        targetY: Math.floor(targetY),
        vy: -(Math.random() * 4 + 7),
        color: color,
        exploded: false,
      });
    };

    const explodeFirework = (x: number, y: number, color: string) => {
      const pCount = Math.floor(Math.random() * 20) + 32;
      const baseAngle = Math.random() * Math.PI;

      for (let i = 0; i < pCount; i++) {
        const angle = baseAngle + (i * ((Math.PI * 2) / pCount)) + (Math.random() * 0.2 - 0.1);
        const speed = Math.random() * 2.8 + 1.0;
        
        fragments.push({
          x: x,
          y: y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          color: color,
          alpha: 1.0,
          decay: Math.random() * 0.018 + 0.012,
          gravity: 0.05,
          size: Math.random() > 0.5 ? 4 : 2,
        });
      }

      // Secondary core burst
      if (Math.random() > 0.35) {
        const coreCount = 12;
        for (let i = 0; i < coreCount; i++) {
          const angle = (i * ((Math.PI * 2) / coreCount));
          const speed = 0.8;
          fragments.push({
            x: x,
            y: y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            color: '#FFE8F5',
            alpha: 1.0,
            decay: 0.025,
            gravity: 0.03,
            size: 3,
          });
        }
      }
    };

    let autoLaunchTimer = 0;

    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, input, textarea, select, a, [role="button"], label, form')) {
        return;
      }
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      launchFirework(clickX, clickX, clickY);
    };

    const handleGlobalTouch = (e: TouchEvent) => {
      if (e.touches.length === 0) return;
      const target = e.target as HTMLElement;
      if (target.closest('button, input, textarea, select, a, [role="button"], label, form')) {
        return;
      }
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      const clickX = touch.clientX - rect.left;
      const clickY = touch.clientY - rect.top;
      launchFirework(clickX, clickX, clickY);
    };

    window.addEventListener('click', handleGlobalClick);
    window.addEventListener('touchstart', handleGlobalTouch, { passive: true });

    // RENDER FUNCTIONS FOR BESPOKE CELESTIAL BACKGROUNDS

    // Mid-Autumn: Giant pixelated full moon with glow & craters
    const drawMidAutumnMoon = () => {
      const moonX = Math.floor(width > 768 ? width * 0.82 : width * 0.78);
      const moonY = Math.floor(height > 600 ? 110 : 80);
      const r = width > 768 ? 40 : 32;

      // Outer moon halo glow
      const grad = ctx.createRadialGradient(moonX, moonY, r * 0.5, moonX, moonY, r * 2.2);
      grad.addColorStop(0, 'rgba(255, 234, 167, 0.28)');
      grad.addColorStop(0.5, 'rgba(247, 208, 112, 0.12)');
      grad.addColorStop(1, 'rgba(247, 208, 112, 0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(moonX, moonY, r * 2.2, 0, Math.PI * 2);
      ctx.fill();

      // Pixelated full moon circle
      for (let y = -r; y <= r; y += 2) {
        const rowWidth = Math.floor(Math.sqrt(r * r - y * y));
        // Base bright cream golden disc
        ctx.fillStyle = '#FFF9DB';
        ctx.fillRect(moonX - rowWidth, moonY + y, rowWidth * 2, 2);
      }

      // Moon craters & texture (pixelated shadow patches)
      ctx.fillStyle = '#F7D070';
      ctx.fillRect(moonX - 12, moonY - 14, 8, 8);
      ctx.fillRect(moonX - 16, moonY - 10, 6, 8);
      ctx.fillRect(moonX + 6, moonY + 4, 10, 8);
      ctx.fillRect(moonX + 10, moonY - 6, 8, 8);
      ctx.fillRect(moonX - 8, moonY + 12, 12, 6);

      // Darker lunar shading
      ctx.fillStyle = '#E1B12C';
      ctx.fillRect(moonX - 10, moonY - 12, 4, 4);
      ctx.fillRect(moonX + 8, moonY + 6, 5, 4);

      // Jade rabbit silhouette hint inside moon
      ctx.fillStyle = '#D4A017';
      ctx.fillRect(moonX - 4, moonY - 4, 3, 6); // body
      ctx.fillRect(moonX - 3, moonY - 8, 2, 3); // head
      ctx.fillRect(moonX - 4, moonY - 12, 1, 4); // ear 1
      ctx.fillRect(moonX - 2, moonY - 12, 1, 4); // ear 2
    };

    // Mid-Autumn: Floating Sky Lanterns
    const drawSkyLanterns = () => {
      skyLanterns.forEach((sl) => {
        sl.y += sl.speedY;
        sl.x += sl.speedX;
        sl.flameFlicker += 0.08;

        if (sl.y < -30) {
          sl.y = height + 20;
          sl.x = Math.random() * width;
        }

        const sx = Math.floor(sl.x);
        const sy = Math.floor(sl.y);
        const s = sl.size;

        ctx.save();
        ctx.globalAlpha = sl.opacity;

        // Lantern Body
        ctx.fillStyle = '#F39C12';
        ctx.fillRect(sx - s / 2, sy, s, s * 1.3);

        ctx.fillStyle = '#F1C40F';
        ctx.fillRect(sx - s / 2 + 1, sy + 1, s - 2, s * 1.3 - 2);

        // Warm flickering flame core
        const flicker = Math.sin(sl.flameFlicker) * 1.5;
        ctx.fillStyle = '#FFF';
        ctx.fillRect(sx - 1, sy + s * 0.7 + flicker, 2, 3);

        ctx.fillStyle = '#E74C3C';
        ctx.fillRect(sx - 1, sy + s * 1.3, 2, 2);

        ctx.restore();
      });
    };

    // Mid-Autumn: Drifting Misty Clouds
    const drawClouds = () => {
      clouds.forEach((c) => {
        c.x += c.speed;
        if (c.x > width + 40) {
          c.x = -c.width - 20;
          c.y = 30 + Math.random() * 120;
        }

        const cx = Math.floor(c.x);
        const cy = Math.floor(c.y);

        ctx.save();
        ctx.globalAlpha = c.opacity;
        ctx.fillStyle = '#FFE8AA';
        
        // 8-bit cloud shape
        ctx.fillRect(cx + 10, cy, c.width - 20, 4);
        ctx.fillRect(cx + 4, cy + 4, c.width - 8, 6);
        ctx.fillRect(cx, cy + 10, c.width, 6);
        ctx.fillRect(cx + 8, cy + 16, c.width - 16, 4);
        
        ctx.restore();
      });
    };

    // Qixi: Milky Way Nebula Band
    const drawMilkyWay = () => {
      const mwGrad = ctx.createLinearGradient(0, 0, width, height * 0.75);
      mwGrad.addColorStop(0, 'rgba(116, 76, 150, 0.08)');
      mwGrad.addColorStop(0.3, 'rgba(255, 117, 143, 0.12)');
      mwGrad.addColorStop(0.5, 'rgba(154, 185, 230, 0.14)');
      mwGrad.addColorStop(0.7, 'rgba(255, 143, 163, 0.10)');
      mwGrad.addColorStop(1, 'rgba(116, 76, 150, 0.06)');

      ctx.fillStyle = mwGrad;
      ctx.beginPath();
      // Diagonal curved celestial band
      ctx.moveTo(0, height * 0.1);
      ctx.bezierCurveTo(width * 0.35, height * 0.15, width * 0.65, height * 0.45, width, height * 0.7);
      ctx.lineTo(width, height * 0.85);
      ctx.bezierCurveTo(width * 0.65, height * 0.6, width * 0.35, height * 0.3, 0, height * 0.25);
      ctx.closePath();
      ctx.fill();
    };

    // Christmas: Aurora Borealis wavy curtain
    // Christmas: Warm Holiday Candlelight & Starlight waves along top
    const drawAurora = () => {
      const t = tickCount * 0.012;
      const numSegments = 16;
      const segWidth = width / numSegments;

      ctx.save();
      // Wave 1: Warm golden holiday glow
      ctx.beginPath();
      ctx.moveTo(0, 0);
      for (let i = 0; i <= numSegments; i++) {
        const x = i * segWidth;
        const waveY = Math.sin(t + i * 0.45) * 22 + Math.cos(t * 0.8 + i * 0.3) * 15 + 90;
        ctx.lineTo(x, waveY);
      }
      ctx.lineTo(width, 0);
      ctx.closePath();

      const auroraGrad1 = ctx.createLinearGradient(0, 0, 0, 160);
      auroraGrad1.addColorStop(0, 'rgba(255, 215, 0, 0.15)');
      auroraGrad1.addColorStop(0.6, 'rgba(255, 175, 64, 0.09)');
      auroraGrad1.addColorStop(1, 'rgba(255, 215, 0, 0)');
      ctx.fillStyle = auroraGrad1;
      ctx.fill();

      // Wave 2: Soft warm candlelight amber shimmer
      ctx.beginPath();
      ctx.moveTo(0, 0);
      for (let i = 0; i <= numSegments; i++) {
        const x = i * segWidth;
        const waveY = Math.sin(t * 1.2 + i * 0.5 + 1.2) * 18 + 75;
        ctx.lineTo(x, waveY);
      }
      ctx.lineTo(width, 0);
      ctx.closePath();

      const auroraGrad2 = ctx.createLinearGradient(0, 0, 0, 130);
      auroraGrad2.addColorStop(0, 'rgba(255, 235, 180, 0.12)');
      auroraGrad2.addColorStop(1, 'rgba(255, 120, 140, 0)');
      ctx.fillStyle = auroraGrad2;
      ctx.fill();

      ctx.restore();
    };

    // Christmas: Snowy Pine Tree silhouettes along bottom
    const drawSnowyPines = () => {
      const treeSpacing = Math.max(70, Math.floor(width / 14));
      const treeCount = Math.ceil(width / treeSpacing) + 1;

      for (let i = 0; i < treeCount; i++) {
        const tx = i * treeSpacing - 10;
        const ty = height - 16;
        const th = 26 + (i % 3) * 8;

        // Warm cozy winter pine silhouette
        ctx.fillStyle = '#26080e';
        // Tier 1
        ctx.fillRect(tx - 6, ty - th * 0.35, 12, th * 0.35);
        // Tier 2
        ctx.fillRect(tx - 10, ty - th * 0.65, 20, th * 0.35);
        // Tier 3
        ctx.fillRect(tx - 14, ty - th, 28, th * 0.4);

        // Snow-capped tips
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(tx - 3, ty - th, 6, 3);
        ctx.fillRect(tx - 6, ty - th * 0.65, 12, 2);
        ctx.fillRect(tx - 8, ty - th * 0.35, 16, 2);
      }
    };

    // New Year: Hanging Festive Palace Lanterns along the top eaves
    const drawNewYearLanterns = () => {
      const lanternPositions = [
        { x: 36, h: 42 },
        { x: 96, h: 32 },
        { x: width - 96, h: 32 },
        { x: width - 36, h: 42 },
      ];

      lanternPositions.forEach((lp) => {
        if (lp.x > width) return;
        const swing = Math.sin(tickCount * 0.03 + lp.x) * 3;
        const lx = Math.floor(lp.x + swing);
        const ly = Math.floor(lp.h);

        // Cord
        ctx.fillStyle = '#F1C40F';
        ctx.fillRect(lx, 0, 1, ly);

        // Lantern cap
        ctx.fillStyle = '#F39C12';
        ctx.fillRect(lx - 5, ly, 11, 2);

        // Lantern body
        ctx.fillStyle = '#C0392B';
        ctx.fillRect(lx - 7, ly + 2, 15, 16);
        ctx.fillStyle = '#E74C3C';
        ctx.fillRect(lx - 5, ly + 3, 11, 14);

        // Golden center insignia
        ctx.fillStyle = '#F1C40F';
        ctx.fillRect(lx - 2, ly + 7, 5, 6);

        // Golden tassel
        ctx.fillStyle = '#F39C12';
        ctx.fillRect(lx - 4, ly + 18, 9, 2);
        ctx.fillRect(lx, ly + 20, 1, 8);
      });
    };

    // Memorial: Paper plane gliding in the sky
    const drawPaperPlane = () => {
      if (!paperPlane) return;
      paperPlane.x += paperPlane.speedX;
      paperPlane.y += paperPlane.speedY;

      if (paperPlane.x > width + 70) {
        paperPlane.x = -60;
        paperPlane.y = Math.random() * (height * 0.35) + 50;
      }

      const px = Math.floor(paperPlane.x);
      const py = Math.floor(paperPlane.y);

      ctx.save();
      ctx.translate(px, py);
      ctx.rotate(paperPlane.angle);

      // Stardust trail behind plane
      if (Math.random() > 0.4) {
        ctx.fillStyle = 'rgba(255, 224, 130, 0.7)';
        ctx.fillRect(-8 - Math.random() * 8, Math.random() * 4 - 2, 2, 2);
      }

      // Paper plane polygon
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.moveTo(14, 0);
      ctx.lineTo(-10, -6);
      ctx.lineTo(-4, 0);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = '#CBD5E1';
      ctx.beginPath();
      ctx.moveTo(14, 0);
      ctx.lineTo(-4, 0);
      ctx.lineTo(-10, 6);
      ctx.closePath();
      ctx.fill();

      ctx.restore();
    };

    // Main animation loop
    const tick = () => {
      tickCount++;

      // 0. Transparent canvas clear to reveal theme gradient
      ctx.clearRect(0, 0, width, height);

      // 1. Theme-specific celestial and atmospheric backdrops
      if (festivalId === 'mid_autumn') {
        drawMidAutumnMoon();
        drawClouds();
        drawSkyLanterns();
      } else if (festivalId === 'qixi') {
        drawMilkyWay();
      } else if (festivalId === 'christmas') {
        drawAurora();
        drawSnowyPines();
      } else if (festivalId === 'new_year') {
        drawNewYearLanterns();
      } else if (festivalId === 'memorial') {
        drawPaperPlane();
      }

      // 2. Twinkle Stars
      stars.forEach((star) => {
        if (star.increasing) {
          star.opacity += star.speed;
          if (star.opacity >= 0.95) star.increasing = false;
        } else {
          star.opacity -= star.speed;
          if (star.opacity <= 0.15) star.increasing = true;
        }

        const px = Math.floor(star.x);
        const py = Math.floor(star.y);

        // Thematic star colors
        if (festivalId === 'mid_autumn') {
          ctx.fillStyle = `rgba(255, 234, 167, ${star.opacity})`;
        } else if (festivalId === 'qixi') {
          ctx.fillStyle = `rgba(255, 182, 193, ${star.opacity})`;
        } else if (festivalId === 'new_year') {
          ctx.fillStyle = `rgba(255, 215, 0, ${star.opacity})`;
        } else if (festivalId === 'christmas') {
          ctx.fillStyle = `rgba(255, 245, 220, ${star.opacity})`;
        } else if (festivalId === 'memorial') {
          ctx.fillStyle = `rgba(255, 232, 245, ${star.opacity})`;
        } else {
          ctx.fillStyle = `rgba(255, 232, 245, ${star.opacity})`;
        }

        if (star.size > 1) {
          // Retro 8-bit star cross sprite
          ctx.fillRect(px, py, 3, 3);
          ctx.fillRect(px - 3, py, 3, 3);
          ctx.fillRect(px + 3, py, 3, 3);
          ctx.fillRect(px, py - 3, 3, 3);
          ctx.fillRect(px, py + 3, 3, 3);
        } else {
          ctx.fillRect(px, py, 2, 2);
        }
      });

      // 3. Falling Pixel Petals / Snowflakes / Osmamthus / Coins
      if (enablePetals) {
        petals.forEach((p) => {
          p.y += p.speedY;
          p.x += Math.sin(p.angle) * 0.4 + p.speedX;
          p.angle += p.spinSpeed;

          if (p.y > height + 10) {
            p.y = -10;
            p.x = Math.random() * width;
          }
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;

          const px = Math.floor(p.x);
          const py = Math.floor(p.y);
          const size = Math.floor(p.size);

          ctx.fillStyle = p.color;
          ctx.save();
          ctx.translate(px, py);
          ctx.rotate(Math.floor(p.angle * 4) / 4);

          if (festivalId === 'christmas' && size > 4) {
            // Snowflake crystal cross
            ctx.fillRect(-Math.floor(size / 2), -1, size, 2);
            ctx.fillRect(-1, -Math.floor(size / 2), 2, size);
            ctx.fillRect(-2, -2, 4, 4);
          } else if (festivalId === 'new_year' && Math.random() > 0.5) {
            // Gold coin shape
            ctx.fillRect(-3, -3, 6, 6);
            ctx.fillStyle = '#F39C12';
            ctx.fillRect(-1, -1, 2, 2);
          } else {
            // Pixel square petal
            ctx.fillRect(-Math.floor(size / 2), -Math.floor(size / 2), size, size);
            ctx.fillStyle = '#FFE8F5';
            ctx.fillRect(-Math.floor(size / 2) + 1, -Math.floor(size / 2) + 1, 2, 2);
          }

          ctx.restore();
        });
      }

      // 4. Pixel Rockets
      if (enableFireworks) {
        for (let i = rockets.length - 1; i >= 0; i--) {
          const r = rockets[i];
          r.y += r.vy;

          const rx = Math.floor(r.x);
          const ry = Math.floor(r.y);

          ctx.fillStyle = r.color;
          ctx.fillRect(rx - 2, ry - 2, 5, 5);
          
          ctx.fillStyle = '#FFE8F5';
          ctx.fillRect(rx - 1, ry - 1, 3, 3);

          if (Math.random() > 0.3) {
            ctx.fillStyle = 'rgba(255, 232, 245, 0.7)';
            ctx.fillRect(rx - 1, ry + 4, 3, 3);
            ctx.fillRect(rx - 1, ry + 9, 2, 2);
          }

          if (r.y <= r.targetY || r.vy >= 0) {
            explodeFirework(rx, ry, r.color);
            rockets.splice(i, 1);
          }
        }

        // 5. Firework Fragments
        for (let i = fragments.length - 1; i >= 0; i--) {
          const f = fragments[i];
          f.x += f.vx;
          f.y += f.vy;
          f.vy += f.gravity;
          f.alpha -= f.decay;

          if (f.alpha <= 0) {
            fragments.splice(i, 1);
            continue;
          }

          const fx = Math.floor(f.x);
          const fy = Math.floor(f.y);
          const size = Math.floor(f.size);

          ctx.fillStyle = f.color;
          ctx.save();
          ctx.globalAlpha = Math.floor(f.alpha * 5) / 5;
          ctx.fillRect(fx, fy, size, size);
          
          if (size > 2) {
            ctx.fillStyle = '#FFE8F5';
            ctx.fillRect(fx + 1, fy + 1, 1, 1);
          }
          ctx.restore();
        }

        // Automatic launcher
        autoLaunchTimer++;
        if (autoLaunchTimer > 210) {
          launchFirework(Math.random() * (width * 0.7) + (width * 0.15));
          autoLaunchTimer = 0;
        }
      }

      animationFrameId = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      window.removeEventListener('click', handleGlobalClick);
      window.removeEventListener('touchstart', handleGlobalTouch);
    };
  }, [enableFireworks, enablePetals, festivalId]);

  return (
    <canvas
      ref={canvasRef}
      id="background-canvas"
      className="absolute top-0 left-0 w-full h-full block z-0 pointer-events-none"
      style={{ touchAction: 'none' }}
    />
  );
}
