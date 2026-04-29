import React from 'react';
import { Squircle } from '@squircle-js/react';
import { rgbToHex } from '../utils/colors';
import { SF_PRO_REGULAR } from '../constants';

export default function CustomAppIcon({ 
  size, 
  scale, 
  customAppIcon, 
  customAppName, 
  edgeHighlighting, 
  palette, 
  onClick, 
  hasLabel = true, 
  isFocused = false 
}) {
  const dominantColor = palette.length > 0 ? rgbToHex(palette[0]) : '#34C759';
  const showPlaceholder = !customAppIcon;

  const squircleStyle = {
    backgroundColor: edgeHighlighting && !showPlaceholder ? dominantColor : (showPlaceholder ? '#34C759' : 'transparent'),
    cursor: showPlaceholder ? 'pointer' : 'default',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    border: showPlaceholder && !edgeHighlighting ? '2px dashed rgba(255,255,255,0.5)' : 'none',
    position: 'relative',
    overflow: 'hidden',
    padding: 0
  };

  const borderSpanStyle = {
    position: 'absolute',
    top: 0, left: 0, width: '100%', height: '100%',
    pointerEvents: "none",
    borderRadius: `${17 * scale}px`,
    padding: "1px",
    WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      position: 'relative', 
      zIndex: isFocused ? 25 : 1,
      transition: 'filter 0.3s ease'
    }}>
      <Squircle 
        cornerRadius={17 * scale} 
        cornerSmoothing={1} 
        width={size} 
        height={size} 
        onClick={showPlaceholder ? onClick : undefined} 
        style={squircleStyle}
        role={showPlaceholder ? "button" : "img"}
        aria-label={showPlaceholder ? "Upload app icon" : `App icon for ${customAppName}`}
        tabIndex={showPlaceholder ? 0 : -1}
        onKeyDown={showPlaceholder ? (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick();
          }
        } : undefined}
      >
        {customAppIcon ? (
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <img
              src={customAppIcon}
              alt={`App icon for ${customAppName}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: edgeHighlighting ? 0.95 : 1,
                imageRendering: 'crisp-edges',
                display: 'block',
              }}
            />
            {edgeHighlighting && (
              <>
                <span style={{ ...borderSpanStyle, background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.7) 0%, transparent 60%)', mixBlendMode: 'soft-light' }} aria-hidden="true" />
                <span style={{ ...borderSpanStyle, background: 'linear-gradient(135deg, transparent 60%, rgba(255, 255, 255, 0.3) 100%)', mixBlendMode: 'soft-light' }} aria-hidden="true" />
                <span style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', boxShadow: 'inset 0px 1px 2px rgba(255,255,255,0.1)' }} aria-hidden="true" />
              </>
            )}
          </div>
        ) : (
          <>
            <div style={{ width: `${24 * scale}px`, height: `${24 * scale}px`, position: 'relative' }} aria-hidden="true">
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: `${16 * scale}px`, height: `${2 * scale}px`, background: 'white' }}></div>
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: `${2 * scale}px`, height: `${16 * scale}px`, background: 'white' }}></div>
            </div>
            <span style={{ color: 'white', fontSize: `${11 * scale}px`, marginTop: `${2 * scale}px`, fontWeight: '500' }} aria-hidden="true">TAP</span>
          </>
        )}
      </Squircle>
      {hasLabel && (
        <span style={{
          color: 'white',
          fontSize: `${12 * scale}px`,
          marginTop: `${6 * scale}px`,
          fontFamily: SF_PRO_REGULAR,
          textAlign: 'center',
          maxWidth: `${60 * scale}px`,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          textShadow: 'none'
        }}>
          {customAppName}
        </span>
      )}
    </div>
  );
}
