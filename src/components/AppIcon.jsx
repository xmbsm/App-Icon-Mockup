import React from 'react';
import { Squircle } from '@squircle-js/react';

export default function AppIcon({ src, name, nolabel = false, size = 62, scale = 1 }) {
  const isWebp = src && src.endsWith('.webp');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Squircle
        cornerRadius={17 * scale}
        cornerSmoothing={1}
        width={size}
        height={size}
        style={{
          boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
          background: '#222',
          overflow: 'hidden'
        }}
        role="img"
        aria-label={`${name} app icon`}
      >
        <img
          src={src}
          alt={`${name} app`}
          style={{
            width: isWebp ? '100%' : '110%',
            height: isWebp ? '100%' : '110%',
            objectFit: 'cover',
            transform: isWebp ? 'none' : 'translate(-5%, -5%)',
            imageRendering: 'crisp-edges'
          }}
        />
      </Squircle>
      {!nolabel && (
        <span style={{
          color: 'white',
          fontSize: `${11 * scale}px`,
          marginTop: `${6 * scale}px`,
          fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif',
          textAlign: 'center',
          maxWidth: `${size}px`,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}>
          {name}
        </span>
      )}
    </div>
  );
}
