export const base = import.meta.env.BASE_URL;

export const SF_PRO_REGULAR = "'SFProRegular', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif";
export const SF_PRO_MEDIUM = "'SFProMedium', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif";
export const SF_PRO_BOLD = "'SFProBold', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif";

export const globalStyles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    min-height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    overflow-y: auto;
    background: #f8f9fa;
  }

  #root {
    width: 100%;
    min-height: 100%;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  .focus-visible {
    outline: 2px solid #007AFF;
    outline-offset: 2px;
  }

  .skip-link {
    position: absolute;
    top: -40px;
    left: 6px;
    background: #007AFF;
    color: white;
    padding: 8px;
    text-decoration: none;
    border-radius: 4px;
    z-index: 1000;
  }

  .skip-link:focus {
    top: 6px;
  }

  @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
    img {
      image-rendering: -webkit-optimize-contrast;
      image-rendering: crisp-edges;
    }
  }

  .device-frame-container, .device-frame {
    will-change: transform;
    transform: translateZ(0);
  }
`;

export const deviceOptions = {
  'cosmic-orange': {
    name: 'Cosmic Orange',
    image: `${base}CosmicOrange.png`,
    frameWidth: 629,
    frameHeight: 1304,
    screenWidth: 582,
    screenHeight: 1264
  },
  'silver': {
    name: 'Silver',
    image: `${base}Silver.png`,
    frameWidth: 629,
    frameHeight: 1304,
    screenWidth: 582,
    screenHeight: 1264
  },
  'deep-blue': {
    name: 'Deep Blue',
    image: `${base}DeepBlue.png`,
    frameWidth: 629,
    frameHeight: 1304,
    screenWidth: 582,
    screenHeight: 1264
  },
  'black-titanium': {
    name: 'Black Titanium',
    image: `${base}black-titanium-iphone16pro.png`,
    frameWidth: 629,
    frameHeight: 1304,
    screenWidth: 582,
    screenHeight: 1264
  },
  'natural-titanium': {
    name: 'Natural Titanium',
    image: `${base}natural-titanium-iphone16pro.png`,
    frameWidth: 629,
    frameHeight: 1304,
    screenWidth: 582,
    screenHeight: 1264
  }
};

export const ratioMap = {
  '1:1': { w: 900, h: 900 },
  '4:5': { w: 720, h: 900 },
  '16:9': { w: 1200, h: 675 },
  '3:4': { w: 675, h: 900 },
  '9:16': { w: 506, h: 900 },
  '4:3': { w: 1200, h: 900 }
};

export const wallpaperOptions = [
  { 
    id: 'ios26-light', 
    name: 'iOS 26', 
    file: 'ios26-light.webp', 
    description: 'Official iOS 26 wallpaper',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    suggestedBgColor: '#f2f2f2'
  },
  { 
    id: 'aurora-mountains', 
    name: 'Aurora Mountains', 
    file: 'aurora-mountains.webp', 
    description: 'Majestic mountain aurora',
    backgroundSize: 'cover',
    backgroundPosition: 'center 30%',
    suggestedBgColor: '#e0eaff'
  },
  { 
    id: 'cosmic-nebula', 
    name: 'Cosmic Nebula', 
    file: 'cosmic-nebula.webp', 
    description: 'Deep space colors',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    suggestedBgColor: '#f6ebff'
  },
  { 
    id: 'ocean-waves', 
    name: 'Ocean Waves', 
    file: 'ocean-waves.webp', 
    description: 'Tranquil blue waters',
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
    suggestedBgColor: '#c4d7fd'
  },
  { 
    id: 'sunset-gradient', 
    name: 'Sunset Gradient', 
    file: 'sunset-gradient.webp', 
    description: 'Warm evening tones',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    suggestedBgColor: '#eff6f2'
  },
  { 
    id: 'forest-depths', 
    name: 'Forest Depths', 
    file: 'forest-depths.webp', 
    description: 'Emerald forest canopy',
    backgroundSize: 'cover',
    backgroundPosition: 'center 20%',
    suggestedBgColor: '#012665'
  }
];

export const defaultGridApps = [
  { name: "Calendar", src: `${base}icons/calender.png` },
  { name: "Clock", src: `${base}icons/clock.png` },
  { name: "Facetime", src: `${base}icons/facetime.png` },
  { name: "App Store", src: `${base}icons/appstore.png` },
  { name: "Reminders", src: `${base}icons/reminder.png` },
  { name: "Photos", src: `${base}icons/gallery.png` },
  { name: "Camera", src: `${base}icons/camera.png` },
  { name: "Wallet", src: `${base}icons/wallet.png` },
  { name: "Weather", src: `${base}icons/weather.png` },
  { name: "Notes", src: `${base}icons/notes.png` },
  { name: "Books", src: `${base}icons/books.png` },
  { name: "Maps", src: `${base}icons/maps.png` }
];

export const defaultDockApps = [
  { name: "Phone", src: `${base}icons/call.png` },
  { name: "Safari", src: `${base}icons/safari.png` },
  { name: "Apple Music", src: `${base}icons/applemusic.png` },
  { name: "iMessage", src: `${base}icons/imessage.png` }
];

export const popularGridApps = [
  { name: "YouTube", src: `${base}icons/youtube.webp` },
  { name: "Snapchat", src: `${base}icons/snapchat.webp` },
  { name: "Spotify", src: `${base}icons/spotify.webp` },
  { name: "Gmail", src: `${base}icons/gmail.webp` },
  { name: "Reddit", src: `${base}icons/reddit.webp` },
  { name: "X", src: `${base}icons/x.webp` },
  { name: "ChatGPT", src: `${base}icons/chatgpt.webp` },
  { name: "Discord", src: `${base}icons/discord.webp` },
  { name: "Photos", src: `${base}icons/gallery.png` },
  { name: "Facebook", src: `${base}icons/facebook.webp` },
  { name: "Camera", src: `${base}icons/camera.png` },
  { name: "Telegram", src: `${base}icons/telegram.webp` }
];

export const popularDockApps = [
  { name: "Phone", src: `${base}icons/call.png` },
  { name: "Safari", src: `${base}icons/safari.png` },
  { name: "Spotify", src: `${base}icons/spotify.webp` },
  { name: "iMessage", src: `${base}icons/imessage.png` }
];
