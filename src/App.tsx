import './App.css'
import { Button } from './components/Button'
import acid from './assets/AcidSerenades_FrontV2-web.jpg';
import theCracks from './assets/thecracks.jpg';
import idols from './assets/idols.jpg';
import { useEffect, useState } from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

type Song = {
  title: string;
  cover: string;
  video: string;
  spotify: string;
  deezer: string;
  apple: string;
}

function App() {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  
  const songs = {
    "the-cracks": {
      title: "The Cracks",
      cover: theCracks,
      video: "https://www.youtube.com/watch?v=5txQ_USL-1M",
      spotify: "https://open.spotify.com/track/5txQ_USL-1M?si=1234567890",
      deezer: "https://www.deezer.com/track/1234567890",
      apple: "https://music.apple.com/us/album/the-cracks/1234567890",
    },
    "idols": {
      title: "Idols",
      cover: idols,
      video: "https://www.youtube.com/watch?v=5txQ_USL-1M",
      spotify: "https://open.spotify.com/track/5txQ_USL-1M?si=1234567890",
      deezer: "https://www.deezer.com/track/1234567890",
      apple: "https://music.apple.com/us/album/the-cracks/1234567890",
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const songParam = urlParams.get('song');
    if (songParam && songParam in songs) {
      setCurrentSong(songs[songParam as keyof typeof songs]);
    }
  }, []);

  const getYoutubeId = (url: string) => {
    return url.split('v=')[1];
  };

  return (
    <div className="bg-white h-screen max-h-screen flex flex-col justify-center item-s-center p-4">
      <div className='grow bg-blue-custom border-2 border-black w-full flex flex-col justify-start bg-[url("./assets/FondBack-noborder.jpg")] bg-cover bg-no-repeat bg-right-bottom overflow-auto'>
        <div className='w-full bg-[length:50vw] bg-[url("./assets/orange2.png")] bg-no-repeat bg-right-bottom flex flex-col h-full max-md:gap-2 gap-6 lg:pt-8 items-center overflow-scroll justify-center'>
          {currentSong ? (
            <>
              {currentSong.video && (
                <div className='w-[50%] aspect-video relative'>
                  <LiteYouTubeEmbed
                    id={getYoutubeId(currentSong.video)}
                    title={currentSong.title}
                    thumbnail={currentSong.cover}
                    wrapperClass='yt-lite h-full max-h-[100%] object-contain'
                    noCookie={true} 
                    adNetwork={false}
                    playlist={false}
                  />
                </div>
              )}
              {currentSong.spotify && (
                <Button 
                  icon="FaSpotify" 
                  url={currentSong.spotify} 
                  title="Spotify" 
                />
              )}
              {currentSong.deezer && (
                <Button 
                  icon="FaDeezer" 
                  url={currentSong.deezer} 
                  title="Deezer" 
                />
              )}
              {currentSong.apple && (
                <Button 
                  icon="FaApple" 
                  url={currentSong.apple} 
                  title="Apple Music" 
                />
              )}
              {currentSong.video && (
                <Button 
                  icon="FaYoutube" 
                  url={currentSong.video} 
                  title="Youtube" 
                />
              )}
            </>
          ) : (
            <img src={acid} alt="Acid Serenades" className='w-[50%] object-contain max-h-[30vh]' />
          )}
          <Button 
            icon="FaEnvelope" 
            url="mailto:unionjackpunx@gmail.com" 
            title="Contact" 
          />
        </div>
      </div>
    </div>
  )
}

export default App
