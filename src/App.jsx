import './App.css';
import './index.css';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { useState } from 'react';
import { Home } from './components/Sections/Home';

function App() {
  const [isLoaded, setLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Added missing state

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      
      <div
        className={`
          min-h-screen
          transition-opacity
          duration-700
          bg-black
          text-gray-100
          ${isLoaded ? 'opacity-100' : 'opacity-0'}
        `}
      >
        <Navbar 
          menuOpen={menuOpen} 
          setMenuOpen={setMenuOpen} 
        />
        <MobileMenu 
          menuOpen={menuOpen} 
          setMenuOpen={setMenuOpen} 
        />
        <Home/>
        {/* Add your main content here */}
      </div>
    </>
  );
}

export default App;