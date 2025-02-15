import './App.css'
import { Button } from './components/Button'
import acid from './assets/AcidSerenades_FrontV2-web.jpg';
function App() {
  

  return (
      <div className="bg-white h-screen max-h-screen flex flex-col justify-center item-s-center p-4">
        <div className='grow bg-blue-custom border-2 border-black  w-full flex flex-col justify-start bg-[url("./assets/FondBack-noborder.jpg")] bg-cover bg-no-repeat bg-right-bottom overflow-auto'>
      
          <div className='w-full bg-[length:50vw] bg-[url("./assets/orange2.png")] bg-no-repeat bg-right-bottom  flex flex-col h-full max-md:gap-2 gap-6 lg:pt-8 items-center overflow-scroll justify-center'>
          <img src={acid} alt="Acid Serenades" className='w-[50%] object-contain max-h-[30vh]' />
            <Button 
              icon="FaSpotify" 
              url="https://github.com/yourusername" 
              title="Spotify" 
              />
              <Button 
              icon="FaDeezer" 
              url="https://github.com/yourusername" 
              title="Deezer" 
              />
              <Button 
              icon="FaApple" 
              url="https://github.com/yourusername" 
              title="Apple Music" 
              />
              <Button 
              icon="FaYoutube" 
              url="https://github.com/yourusername" 
              title="Youtube" 
              />
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
