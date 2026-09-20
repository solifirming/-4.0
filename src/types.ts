/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type FestivalId = 'birthday' | 'mid_autumn' | 'qixi' | 'new_year' | 'christmas' | 'memorial';

// Blessing package content
export interface BlessingTheme {
  id: string;
  name: string;
  title: string;
  paragraphs: string[];
  signature: string;
}

export interface FestivalConfig {
  id: FestivalId;
  name: string;
  icon: string;
  englishName: string;
  englishTitle: string;
  musicTitle: string;
  bannerTitle: string;
  bannerSubtitle: string;
  recipientLabel: string;
  defaultRecipient: string;
  levelLabel: string;
  levelPrefix: string;
  levelUnit: string;
  defaultLevel: number;
  bgGradient: string;
  primaryColor: string;
  accentColor: string;
  envelopeTitle: string;
  envelopeSubtitle: string;
  envelopeBadge: string;
  envelopeTag: string;
  centerpieceTitle: string;
  centerpieceSubtitle: string;
  wishingWellTitle: string;
  wishingWellHint: string;
  wishingActionText: string;
  wishingPlaceholder: string;
  wishingSuccessEcho: string;
  loadingSystemName: string;
  loadingProgressMsgs: string[];
  blessingThemes: BlessingTheme[];
  defaultPhotos: MemoryPhoto[];
  mascots: {
    id: string;
    name: string;
    role: string;
    phrase: string;
    color: string;
  }[];
}

// Canvas particle systems

// Canvas particle systems
export interface MemoryPhoto {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  date?: string;
  description?: string;
  isCustomCover?: boolean;
}

export interface TwinkleStar {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  increasing: boolean;
}

export interface Petal {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speedX: number;
  speedY: number;
  angle: number;
  spinSpeed: number;
  color: string;
}

export interface FireworkParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  alpha: number;
  decay: number;
  gravity: number;
  size: number;
}

export interface FireworkRocket {
  x: number;
  y: number;
  targetY: number;
  vy: number;
  color: string;
  exploded: boolean;
}
