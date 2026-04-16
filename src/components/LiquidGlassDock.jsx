import React, { useState, useRef, useCallback, useEffect } from 'react';

export default function LiquidGlassDock({ children, style, cornerRadius, uiScale, frameScale, viewMode, isDragging }) {
  const [shaderId] = useState(() => 'dock-liquid-' + Math.random().toString(36).substr(2, 9));
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const [displacementImage, setDisplacementImage] = useState(null);

  const generateDisplacementMap = useCallback(() => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const width = Math.max(rect.width, 300);
    const height = Math.max(rect.height, 80);
    const radius = parseInt(cornerRadius) || 32;
    const centerX = width / 2;
    const centerY = height / 2;
    
    const svgString = `
      <svg viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="red-${shaderId}" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stop-color="red"/>
            <stop offset="15%" stop-color="hsl(0 100% 52%)"/>
            <stop offset="50%" stop-color="hsl(0 0% 50%)"/>
            <stop offset="85%" stop-color="hsl(0 100% 48%)"/>
            <stop offset="100%" stop-color="hsl(0 100% 46%)"/>
          </linearGradient>
          <linearGradient id="green-${shaderId}" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stop-color="lime"/>
            <stop offset="15%" stop-color="hsl(120 100% 52%)"/>
            <stop offset="50%" stop-color="hsl(0 0% 50%)"/>
            <stop offset="85%" stop-color="hsl(120 100% 48%)"/>
            <stop offset="100%" stop-color="hsl(120 100% 46%)"/>
          </linearGradient>
          <mask id="edge-mask-${shaderId}">
            <rect x="0" y="0" width="${width}" height="${height}" fill="black"/>
            <rect x="0" y="0" width="${width}" height="${height}" rx="${radius}" fill="white"/>
          </mask>
        </defs>
        <rect x="0" y="0" width="${width}" height="${height}" fill="hsl(0 0% 50%)"/>
        <rect x="0" y="0" width="${width}" height="${height}" fill="url(#red-${shaderId})" mask="url(#edge-mask-${shaderId})" style="mix-blend-mode: multiply"/>
        <rect x="0" y="0" width="${width}" height="${height}" fill="url(#green-${shaderId})" mask="url(#edge-mask-${shaderId})" style="mix-blend-mode: multiply"/>
      </svg>
    `;
    
    const encoded = encodeURIComponent(svgString);
    const dataUri = `data:image/svg+xml,${encoded}`;
    setDisplacementImage(dataUri);
  }, [shaderId, cornerRadius, viewMode, isDragging]);

  useEffect(() => {
    const timer = setTimeout(generateDisplacementMap, 100);
    return () => clearTimeout(timer);
  }, [generateDisplacementMap]);

  const createIOSGlassFilter = useCallback(() => {
    const baseScale = viewMode !== 'full' ? 6 : isDragging ? 8 : 4;
    const displacementBlur = viewMode !== 'full' ? 0.5 : isDragging ? 0.7 : 0.3;
    
    return (
      <svg ref={svgRef} style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
        <defs>
          <filter id={shaderId} x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
            <feImage
              x="0"
              y="0"
              width="100%"
              height="100%"
              href={displacementImage}
              result="displacementMap"
            />
            
            <feDisplacementMap
              in="SourceGraphic"
              in2="displacementMap"
              scale={baseScale}
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced"
            />
            
            <feGaussianBlur in="displaced" stdDeviation={displacementBlur} />
          </filter>
        </defs>
      </svg>
    );
  }, [shaderId, displacementImage, viewMode, isDragging]);

  return (
    <>
      {createIOSGlassFilter()}

      <div
        ref={containerRef}
        style={{
          ...style,
          backdropFilter: `blur(12px) url(#${shaderId}) brightness(1.1) saturate(1.5)`,
          WebkitBackdropFilter: `blur(12px) url(#${shaderId}) brightness(1.1) saturate(1.5)`,
          background: 'rgba(255, 255, 255, 0.15)',
          borderRadius: cornerRadius || '32px',
          boxShadow: 'inset 0 1.5px 2px -1px rgba(255, 255, 255, 0.4), inset 0 0 0 1px rgba(255, 255, 255, 0.15), 0px 12px 40px rgba(0, 0, 0, 0.25)',
        }}
      >
        {children}
      </div>
    </>
  );
}
