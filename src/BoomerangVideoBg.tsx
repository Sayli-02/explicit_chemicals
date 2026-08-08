import React, { useEffect, useRef, useState } from 'react';

interface Props {
  src: string;
  className?: string;
}

export const BoomerangVideoBg: React.FC<Props> = ({ src, className }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [useCanvas, setUseCanvas] = useState(false);
  
  const framesRef = useRef<HTMLCanvasElement[]>([]);
  const frameIndexRef = useRef(0);
  const directionRef = useRef<1 | -1>(1);
  const lastDrawTimeRef = useRef(0);
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let isCapturing = true;

    const captureFrame = () => {
      if (!isCapturing || !video) return;
      
      const offscreenCanvas = document.createElement('canvas');
      offscreenCanvas.width = canvasRef.current?.width || 960;
      offscreenCanvas.height = canvasRef.current?.height || 540;
      const ctx = offscreenCanvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(video, 0, 0, offscreenCanvas.width, offscreenCanvas.height);
        framesRef.current.push(offscreenCanvas);
      }

      if (video.ended || video.paused) {
         // Stop capturing
      } else {
        if ('requestVideoFrameCallback' in video) {
          (video as any).requestVideoFrameCallback(captureFrame);
        } else {
          requestAnimationFrame(captureFrame);
        }
      }
    };

    const handlePlay = () => {
      framesRef.current = [];
      if ('requestVideoFrameCallback' in video) {
        (video as any).requestVideoFrameCallback(captureFrame);
      } else {
        requestAnimationFrame(captureFrame);
      }
    };

    const handleLoadedMetadata = () => {
      const maxWidth = 960;
      const ratio = video.videoWidth / video.videoHeight;
      const width = Math.min(maxWidth, video.videoWidth);
      const height = width / ratio;
      
      if (canvasRef.current) {
        canvasRef.current.width = width;
        canvasRef.current.height = height;
      }
      video.play().catch(e => console.error("Auto-play prevented", e));
    };

    const handleEnded = () => {
      isCapturing = false;
      setUseCanvas(true);
      
      const targetFPS = 30;
      const frameDuration = 1000 / targetFPS;

      const drawLoop = (timestamp: number) => {
        if (!lastDrawTimeRef.current) lastDrawTimeRef.current = timestamp;
        const elapsed = timestamp - lastDrawTimeRef.current;

        if (elapsed >= frameDuration) {
          const frames = framesRef.current;
          if (frames.length > 0) {
            const canvas = canvasRef.current;
            const ctx = canvas?.getContext('2d');
            if (canvas && ctx) {
              const frameCanvas = frames[frameIndexRef.current];
              if (frameCanvas) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(frameCanvas, 0, 0, canvas.width, canvas.height);
              }

              frameIndexRef.current += directionRef.current;

              if (frameIndexRef.current >= frames.length - 1) {
                frameIndexRef.current = frames.length - 1;
                directionRef.current = -1;
              } else if (frameIndexRef.current <= 0) {
                frameIndexRef.current = 0;
                directionRef.current = 1;
              }
            }
          }
          lastDrawTimeRef.current = timestamp - (elapsed % frameDuration);
        }
        
        animationFrameId.current = requestAnimationFrame(drawLoop);
      };
      
      animationFrameId.current = requestAnimationFrame(drawLoop);
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('play', handlePlay);
    video.addEventListener('ended', handleEnded);

    return () => {
      isCapturing = false;
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('ended', handleEnded);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <div className={`relative overflow-hidden ${className || ''}`}>
      <video
        ref={videoRef}
        src={src}
        muted
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${useCanvas ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      />
      <canvas
        ref={canvasRef}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${useCanvas ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      />
    </div>
  );
};
