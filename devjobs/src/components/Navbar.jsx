import { useState } from 'react';

import { images } from '../constants';
import { Link } from 'react-router-dom';
import useTheme from '../hooks/useTheme';

const Navbar = () => {
  const theme = useTheme();

  const [currentMode, setCurrentMode] = useState(theme.mode);

  return (
    <div className="w-full z-20">
      <img
        src={images.bgHeaderDekstop}
        alt="header"
        className="lg:flex hidden w-full"
      />
      <img
        src={images.bgHeaderTablet}
        alt="header"
        className="lg:hidden md:flex hidden w-full"
      />
      <img
        src={images.bgHeaderMobile}
        alt="header"
        className="md:hidden flex w-full"
      />
      <div className="absolute top-0 flex w-full py-8 lg:px-40 md:px-20 px-8">
        <div className="flex justify-between items-center w-full">
          <Link to={'/'}>
            <img
              src={images.logo}
              alt="logo"
            />
          </Link>
          <div className="flex gap-4 justify-center items-center py-4 rounded-md">
            <img
              src={images.iconSun}
              alt="icon"
            />
            <label className="switch">
              <input
                type="checkbox"
                onClick={() => {
                  setCurrentMode(currentMode === 'light' ? 'dark' : 'light');
                  theme.toggleMode(currentMode);
                }}
              />
              <span className="slider round"></span>
            </label>
            <img
              src={images.iconMoon}
              alt="icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
