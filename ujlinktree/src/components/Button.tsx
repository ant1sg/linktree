import { IconType } from 'react-icons';
import * as Icons from 'react-icons/fa';

interface ButtonProps {
  icon: string;  // Name of the icon from FontAwesome (e.g., "FaGithub")
  url: string;   // URL to navigate to
  title: string; // Text to display
}

export const Button = ({ icon, url, title }: ButtonProps) => {
  // Dynamically get the icon component from react-icons/fa
  const IconComponent = (Icons as Record<string, IconType>)[icon];

  return (
    <div className="gap-1 w-[50vw] max-md:w-[80vw] max-sm:w-[90vw] max-w-[95%] border-2 border-black bg-blue-custom opacity-80 hover:bg-yellow-custom text-white hover:text-black flex flex-col justify-center item-s-center p-4  shadow-md hover:shadow-lg hover:scale-105  transition-all duration-200 ease-in-out">
        
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2">
      {IconComponent && <IconComponent  />}
      <span className='font-anton text-2xl uppercase font-bold'>{title}</span>
    </a>
    
    </div>
  );
}; 
