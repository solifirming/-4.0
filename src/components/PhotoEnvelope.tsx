/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Sparkles, X, ChevronLeft, ChevronRight, Upload, RotateCcw, Heart, Eye, Share2, Copy, Check, Plus } from 'lucide-react';
import { MemoryPhoto } from '../types';

import {
  Photo1Chapter22,
  Photo2SnowGirl,
  Photo3BookstoreGirl,
  Photo4StrawberryGirl,
  Photo5NightLightsGirl
} from './CustomPhotoIllustrations';

interface PhotoEnvelopeProps {
  birthdayName: string;
  birthdayAge: number;
  photos: MemoryPhoto[];
  setPhotos: React.Dispatch<React.SetStateAction<MemoryPhoto[]>>;
  disabled: boolean;
  onUploadingChange: (uploading: boolean) => void;
  photoSaveStatus: 'idle' | 'saving' | 'saved' | 'error';
  playClickSound: () => void;
  wishesList?: string[];
  selectedThemeIndex?: number;
}

export default function PhotoEnvelope({
  birthdayName,
  birthdayAge,
  photos, setPhotos, disabled, onUploadingChange, photoSaveStatus,
  playClickSound,
  wishesList = [],
  selectedThemeIndex = 0
}: PhotoEnvelopeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [uploadTargetIndex, setUploadTargetIndex] = useState<number | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');
  const isSharedView = new URLSearchParams(window.location.search).get('shared') === '1';

  // Toggle Envelope open state
  const handleEnvelopeClick = () => {
    playClickSound();
    setIsOpen(prev => !prev);
  };

  // 按选择顺序压缩整批照片，全部成功后一次更新，避免异步完成顺序打乱照片。
  const handlePhotoUpload = async (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const files = Array.from(e.target.files || []) as File[];
    e.target.value = '';
    if (!files.length || disabled || uploading || isSharedView) return;
    setUploading(true);
    onUploadingChange(true);
    setUploadError('');
    playClickSound();
    try {
      const batch: MemoryPhoto[] = [];
      for (const file of (index === -1 ? files : files.slice(0, 1))) {
        if (!file.type.startsWith('image/')) throw new Error('请选择图片文件');
        const url = await new Promise<string>((resolve, reject) => {
          const img = new Image();
          const objectUrl = URL.createObjectURL(file);
          img.onload = () => {
            try {
              const scale = Math.min(1, 800 / Math.max(img.width, img.height));
              const canvas = document.createElement('canvas');
              canvas.width = Math.max(1, Math.round(img.width * scale));
              canvas.height = Math.max(1, Math.round(img.height * scale));
              const ctx = canvas.getContext('2d');
              if (!ctx) throw new Error('无法处理图片');
              ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
              resolve(canvas.toDataURL('image/jpeg', 0.7));
            } catch (error) { reject(error); }
            finally { URL.revokeObjectURL(objectUrl); }
          };
          img.onerror = () => { URL.revokeObjectURL(objectUrl); reject(new Error('图片无法读取，请重新选择')); };
          img.src = objectUrl;
        });
        batch.push({ id: 'custom_' + crypto.randomUUID(), title: '我们的美好瞬间',
          subtitle: '', date: '', description: '这一刻的美好，被永远定格。', url, isCustomCover: true });
      }
      setPhotos(prev => index === -1 ? [...prev, ...batch] : prev.map((photo, i) =>
        i === index ? { ...photo, url: batch[0].url, isCustomCover: true } : photo));
    } catch (error) {
      setUploadError(error instanceof Error ? error.message : '图片处理失败，请重新选择');
    } finally { setUploading(false); onUploadingChange(false); }
  };

  const triggerUploadFor = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    playClickSound();
    if (disabled || uploading || isSharedView) return;
    setUploadTargetIndex(index);
    if (fileInputRef.current) {
      // 打开系统选择框前立即设置，不能等待 React 下一次渲染才启用多选。
      fileInputRef.current.multiple = index === -1;
      fileInputRef.current.value = '';
      fileInputRef.current.click();
    }
  };

  const handleDeletePhoto = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    playClickSound();
    if (disabled || uploading || isSharedView) return;
    
    // Close modal if we're deleting the currently viewed photo
    if (selectedPhotoIndex === index) {
      setSelectedPhotoIndex(null);
    } else if (selectedPhotoIndex !== null && selectedPhotoIndex > index) {
      // Adjust selected index if we deleted a photo before it
      setSelectedPhotoIndex(selectedPhotoIndex - 1);
    }

    setPhotos(prev => {
      const next = [...prev];
      next.splice(index, 1);
      return next;
    });
  };

  // Helper to render photo content
  const renderPhotoContent = (photo: MemoryPhoto, index: number) => {
    const photoUrl = photo.url || '';

    if (photoUrl) {
      return (
        <img
          src={photoUrl}
          alt={photo?.title || '珍贵相片'}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      );
    }

    return renderFallbackSvg(index);
  };

  const renderFallbackSvg = (index: number) => {
    switch (index) {
      case 0:
        return <Photo1Chapter22 />;
      case 1:
        return <Photo2SnowGirl />;
      case 2:
        return <Photo3BookstoreGirl />;
      case 3:
        return <Photo4StrawberryGirl />;
      case 4:
        return <Photo5NightLightsGirl />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full bg-[#1A0829]/90 border-4 border-[#FFE8F5] p-4 sm:p-5 flex flex-col items-center gap-4 relative shadow-2xl">
      
      {!isSharedView && photoSaveStatus !== 'idle' && (
        <span role="status" className="text-[10px] text-[#FFE8F5]">
          {photoSaveStatus === 'saving' ? '照片保存中…' : photoSaveStatus === 'saved' ? '照片已保存到云端' : '云端保存失败，请稍后重试'}
        </span>
      )}
      {uploadError && <p role="alert" className="text-xs text-[#FF8FA3]">{uploadError}</p>}
      {disabled && !isSharedView && <p role="status" className="text-xs text-[#FFE8F5]">正在读取云端卡片…</p>}
      {/* Hidden file input for custom image upload */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple={uploadTargetIndex === -1}
        disabled={disabled || uploading}
        className="hidden"
        onChange={(e) => {
          if (uploadTargetIndex !== null) {
            handlePhotoUpload(e, uploadTargetIndex);
          }
        }}
      />

      {/* Ribbon Banner Tag */}
      <div className="absolute -top-3.5 left-4 px-2.5 py-0.5 bg-[#FF8FA3] border-2 border-[#FFE8F5] text-[9px] tracking-widest text-[#FFE8F5] font-bold uppercase shadow-sm">
        ✦ MEMORY ENVELOPE ✦ 专属相片信封
      </div>

      {/* Header Info */}
      <div className="text-center mt-1 border-b border-dashed border-[#7B5EA7]/30 pb-2 w-full">
        <h3 className="text-xs font-pixel font-bold text-[#FFE8F5] tracking-wider flex items-center justify-center gap-1.5">
          <Camera className="w-3.5 h-3.5 text-[#F7D070]" />
          <span>点击信封 ∙ 展露您的珍藏回忆相片</span>
        </h3>
        <p className="text-[9.5px] text-[#C9A9E9] mt-0.5 font-pixel">
          {isOpen ? (isSharedView ? "相片已弹出，点击任意相片可放大观赏" : "相片已弹出，您可以随时点击上传或添加更多相片") : "点击下方紫色像素信盒，解封这趟时光旅行"}
        </p>
      </div>

      {/* Envelope Container */}
      <div className="relative w-full max-w-md min-h-[220px] sm:min-h-[260px] flex flex-col items-center justify-center my-2">
        
        {/* The Pixel Envelope Base */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleEnvelopeClick}
          className="relative w-full max-w-[320px] h-44 sm:h-48 bg-[#331c4f] border-4 border-[#FFE8F5] rounded-none flex items-center justify-center cursor-pointer shadow-xl overflow-visible group"
          style={{ boxShadow: '0 6px 0 rgba(0,0,0,0.4)' }}
        >
          {/* Envelope Slot / Interior shadow */}
          <div className="absolute inset-1 bg-[#25123d] border border-[#7B5EA7]/30" />

          {/* Envelope Fold Triangles */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
            {/* Top Flap */}
            <motion.div
              animate={{ rotateX: isOpen ? 180 : 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="absolute top-0 left-0 w-full h-1/2 bg-[#52337a] border-b-2 border-[#FFE8F5]/80 origin-top"
              style={{
                clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
                zIndex: isOpen ? 1 : 12,
              }}
            />

            {/* Left Flap */}
            <div
              className="absolute top-0 left-0 w-1/2 h-full bg-[#3c225a] border-r-2 border-[#7B5EA7]/20 z-10"
              style={{ clipPath: 'polygon(0% 0%, 100% 50%, 0% 100%)' }}
            />

            {/* Right Flap */}
            <div
              className="absolute top-0 right-0 w-1/2 h-full bg-[#3c225a] border-l-2 border-[#7B5EA7]/20 z-10"
              style={{ clipPath: 'polygon(100% 0%, 0% 50%, 100% 100%)' }}
            />

            {/* Bottom Flap */}
            <div
              className="absolute bottom-0 left-0 w-full h-2/3 bg-[#422662] border-t-2 border-[#FFE8F5]/20 z-11"
              style={{ clipPath: 'polygon(0% 100%, 100% 100%, 50% 0%)' }}
            />
          </div>

          {/* Wax Seal in Center */}
          <AnimatePresence>
            {!isOpen && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="relative z-20 flex items-center justify-center w-12 h-12 bg-[#F7D070] border-2 border-[#FFE8F5] shadow-md group-hover:scale-110 transition-transform duration-200"
                style={{ boxShadow: '0 3px 0 #7B5EA7' }}
              >
                <Heart className="w-6 h-6 text-[#7B5EA7] fill-current animate-pulse" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Prompt Label on closed envelope */}
          {!isOpen && (
            <div className="absolute bottom-2 left-0 right-0 text-center z-20 pointer-events-none">
              <span className="text-[9.5px] font-pixel text-[#FFE8F5] tracking-widest uppercase bg-[#200B36]/80 px-2 py-0.5 border border-[#FFE8F5]/40 animate-pulse">
                ✦ PRESS TO UNLOCK ✦
              </span>
            </div>
          )}
        </motion.div>

        {/* Fanned-out Photos Container */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              className="w-full flex flex-col items-center mt-6 gap-4"
            >
              {/* Photo Fan / Flex Display (Auto Layout) */}
              <div className="w-full flex flex-wrap justify-center gap-3.5 sm:gap-4 pt-1">
                {photos.map((photo, index) => {
                  // Alternative slight Polaroid random tilt degrees for organic fanned feel
                  const tiltDegrees = index % 2 === 0 ? -2 : 2;

                  return (
                    <motion.div
                      key={photo.id}
                      initial={{ opacity: 0, y: 40, scale: 0.7, rotate: 0 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        rotate: tiltDegrees,
                      }}
                      transition={{
                        duration: 0.4,
                        delay: Math.min(index * 0.1, 0.5), // Cap the delay to avoid long waiting for many photos
                        type: 'spring',
                        stiffness: 120
                      }}
                      whileHover={{ scale: 1.05, rotate: 0, zIndex: 30 }}
                      onClick={() => {
                        playClickSound();
                        setSelectedPhotoIndex(index);
                      }}
                      className="relative bg-[#FFF2F8] p-2 sm:p-2.5 border-2 border-[#FFE8F5] flex flex-col items-center gap-1.5 cursor-pointer shadow-lg group hover:shadow-2xl transition-all w-[calc(50%-0.4375rem)] sm:w-[calc((100%-2*1rem)/3)] max-w-[200px]"
                      style={{
                        boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                      }}
                    >
                      {/* Polaroid Tape Pin at Top */}
                      <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-7 h-3 bg-[#FF8FA3]/80 border border-white skew-x-12 z-10" />

                      {/* Delete Button (visible on hover) */}
                      {!isSharedView && (
                        <button
                          type="button"
                          aria-label="删除照片"
                          disabled={disabled || uploading}
                          onClick={(e) => handleDeletePhoto(index, e)}
                          className="absolute -top-2 -right-2 w-6 h-6 bg-[#25103D] border-2 border-[#FFE8F5] text-[#FFE8F5] flex items-center justify-center cursor-pointer hover:bg-[#FF8FA3] hover:text-[#25103D] z-20 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      )}

                      {/* Photo Image Frame */}
                      <div className="relative w-full aspect-square bg-[#221033] border border-stone-300 overflow-hidden flex items-center justify-center">
                        {renderPhotoContent(photo, index)}
                        <div className="svg-fallback-illustration hidden w-full h-full">
                          {renderFallbackSvg(index)}
                        </div>

                        {/* Hover Quick Zoom / Replace Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              playClickSound();
                              setSelectedPhotoIndex(index);
                            }}
                            className="p-1.5 bg-[#FF8FA3] border border-white text-white text-[9px] font-pixel flex items-center gap-1 cursor-pointer hover:bg-white hover:text-black"
                            title="查看大图"
                          >
                            <Eye className="w-3 h-3" />
                            <span>放大</span>
                          </button>

                          <button
                            type="button"
                            onClick={(e) => triggerUploadFor(index, e)}
                            className="p-1.5 bg-[#7B5EA7] border border-white text-white text-[9px] font-pixel flex items-center gap-1 cursor-pointer hover:bg-white hover:text-black"
                            title="更换图片"
                          >
                            <Upload className="w-3 h-3" />
                            <span>更换</span>
                          </button>
                        </div>
                      </div>

                      {/* Polaroid Caption */}
                      <div className="w-full text-center flex flex-col items-center pt-0.5">
                        {/* Direct Always-Visible Replace Button for Mobile/Touch */}
                        {!isSharedView && (
                        <button
                          type="button"
                          onClick={(e) => triggerUploadFor(index, e)}
                          className="mt-1 w-full py-0.5 bg-[#7B5EA7] border border-[#FFE8F5] text-white text-[8px] font-pixel flex items-center justify-center gap-1 hover:bg-[#FF8FA3] hover:text-[#200A38] transition-colors"
                        >
                          <Upload className="w-2.5 h-2.5" />
                          <span>更换此照片</span>
                        </button>
                        )}
                      </div>
                    </motion.div>
                  );
                })}

                {/* Add New Photo Button */}
                {!isSharedView && (
                  <motion.div
                    initial={{ opacity: 0, y: 40, scale: 0.7 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    onClick={(e) => triggerUploadFor(-1, e)}
                    className="relative bg-[#FFF2F8] p-2 sm:p-2.5 border-2 border-dashed border-[#7B5EA7] flex flex-col items-center justify-center gap-2 cursor-pointer shadow-lg group hover:border-[#FF8FA3] hover:bg-[#FF8FA3]/10 transition-all w-[calc(50%-0.4375rem)] sm:w-[calc((100%-2*1rem)/3)] max-w-[200px] min-h-[160px]"
                  >
                    <div className="w-10 h-10 bg-[#7B5EA7] rounded-full flex items-center justify-center text-[#FFE8F5] group-hover:bg-[#FF8FA3] group-hover:text-[#25103D] transition-colors">
                      <Plus className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] text-[#7B5EA7] font-pixel font-bold group-hover:text-[#FF8FA3] transition-colors">{uploading ? '正在处理图片…' : '添加照片（可多选）'}</span>
                  </motion.div>
                )}
              </div>

              {/* Action Buttons: Close Envelope */}
              <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={handleEnvelopeClick}
                  className="px-4 py-2 bg-[#7B5EA7] border-2 border-[#FFE8F5] text-[#FFE8F5] text-[10px] font-pixel font-bold tracking-wider hover:bg-[#8D6CAB] active:translate-y-0.5 cursor-pointer shadow-md flex items-center gap-1.5"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>收起相片信盒</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Lightbox / Zoom Photo Modal */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && photos[selectedPhotoIndex] && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              className="relative w-full max-w-md bg-[#25103D] border-4 border-[#FFE8F5] p-4 sm:p-5 flex flex-col items-center shadow-2xl"
              style={{ boxShadow: '0 8px 0 rgba(0,0,0,0.6)' }}
            >
              {/* Close Modal Button */}
              <button
                type="button"
                onClick={() => {
                  playClickSound();
                  setSelectedPhotoIndex(null);
                }}
                className="absolute top-3 right-3 p-1.5 bg-[#FF8FA3] border-2 border-white text-[#24133c] hover:bg-white cursor-pointer z-10"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header Badge */}
              <div className="inline-block px-3 py-0.5 bg-[#F7D070] border-2 border-[#FFE8F5] text-[9.5px] text-[#24133c] font-pixel font-bold mb-3">
                ✦ 珍藏相片回忆 ({selectedPhotoIndex + 1} / {photos.length}) ✦
              </div>

              {/* Enlarged Photo Container */}
              <div className="relative w-full aspect-square bg-[#1A0829] border-2 border-[#FFE8F5] overflow-hidden flex items-center justify-center my-1 shadow-inner">
                {renderPhotoContent(photos[selectedPhotoIndex], selectedPhotoIndex)}
                <div className="svg-fallback-illustration hidden w-full h-full">
                  {renderFallbackSvg(selectedPhotoIndex)}
                </div>
              </div>

              {/* Modal Actions & Nav Controls */}
              <div className="w-full flex justify-between items-center mt-4 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    playClickSound();
                    setSelectedPhotoIndex(prev => (prev === null || prev === 0 ? photos.length - 1 : prev - 1));
                  }}
                  className="px-3 py-1.5 bg-[#7B5EA7] border-2 border-[#FFE8F5] text-[#FFE8F5] text-[10px] font-pixel font-bold flex items-center gap-1 cursor-pointer hover:bg-[#8D6CAB]"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>上一张</span>
                </button>
                {!isSharedView && <>
                <button
                  type="button"
                  onClick={(e) => triggerUploadFor(selectedPhotoIndex, e)}
                  className="px-3 py-1.5 bg-[#FF8FA3] border-2 border-[#FFE8F5] text-[#24133c] text-[10px] font-pixel font-bold flex items-center gap-1 cursor-pointer hover:bg-white"
                >
                  <Upload className="w-3.5 h-3.5" />
                  <span>上传替换</span>
                </button>
                <button
                  type="button"
                  onClick={(e) => handleDeletePhoto(selectedPhotoIndex, e)}
                  className="px-3 py-1.5 bg-[#25103D] border-2 border-[#FF8FA3] text-[#FF8FA3] text-[10px] font-pixel font-bold flex items-center gap-1 cursor-pointer hover:bg-[#FF8FA3] hover:text-[#25103D]"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>删除</span>
                </button>
                </>}
                <button
                  type="button"
                  onClick={() => {
                    playClickSound();
                    setSelectedPhotoIndex(prev => (prev === null || prev === photos.length - 1 ? 0 : prev + 1));
                  }}
                  className="px-3 py-1.5 bg-[#7B5EA7] border-2 border-[#FFE8F5] text-[#FFE8F5] text-[10px] font-pixel font-bold flex items-center gap-1 cursor-pointer hover:bg-[#8D6CAB]"
                >
                  <span>下一张</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
