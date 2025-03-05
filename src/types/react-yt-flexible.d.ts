declare module 'react-yt-flexible' {
  interface ReactYoutubeProps {
    videoId: string;
    thumbnail?: string;
    className?: string;
  }
  
  const ReactYoutube: React.FC<ReactYoutubeProps>;
  export default ReactYoutube;
} 