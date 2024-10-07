import './App.css';
import { useEffect, useState } from 'react';
import Boot from './components/screens/boot';
import NotAvailableMessage from './components/screens/notAvailableMessage';
import IslandBar from './components/islandBar';
import StatusBar from './components/statusBar';
import TimeAndDate from './components/timeAndDate';
import Weather from './components/weather';
import GoogleSearchBar from './components/googleSearchBar';
import HomeScreenApps from './components/homeScreenApps';
import ScreenSlider from './components/screenSlider';
import DefaultLowerApps from './components/defaultLowerApps';
import LowerNotchBar from './components/lowerNotchBar';

function App() {
  const [screenSize, setScreenSize] = useState(window.innerWidth <= 768 ? 'mobile' : 'desktop');

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth <= 768 ? 'mobile' : 'desktop');
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowOverlay(false);
    }, getRandomTimeout());

    return () => clearTimeout(timeout);
  }, []);

  function getRandomTimeout() {
    // Generate a random number between 1 and 5 (inclusive)
    const randomMinutes = Math.floor(Math.random() * 3) + 1;
    // Convert minutes to milliseconds
    return randomMinutes * 60 * 1000;
  };

  useEffect(() => {
    const element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.requestFullscreen) {
      element.requestFullscreen();

    }
  }, []);

  return (
    <div className="w-full min-h-screen">
      <div className={`overlay ${showOverlay ? 'visible' : 'hidden'}`}>
        <Boot />
      </div>
      {screenSize === 'desktop' ? (
        <div className="bg-black text-white text-center h-screen flex items-center justify-center">
          <NotAvailableMessage />
        </div>
      ) : (
        <>
          <div>
            <IslandBar />
            <StatusBar />
            <div className='p-3'>
              <TimeAndDate />
              <Weather />
              <GoogleSearchBar />
              <HomeScreenApps />
              <ScreenSlider />
              <DefaultLowerApps />
            </div>
            <LowerNotchBar />
          </div>
        </>
      )}
    </div>
  );
};

export default App;