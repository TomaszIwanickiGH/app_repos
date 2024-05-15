import { useState, useEffect } from 'react';
import { images, data } from '../constants';

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    const setToggle = () => {
      setToggleMenu(false);
    };

    window.addEventListener('resize', setToggle);
  }, [window.innerWidth]);

  return (
    <div className="flex items-center justify-between paddings">
      <div className="flex items-center gap-12">
        <div>
          <img
            src={images.logo}
            alt="logo"
          />
        </div>
        <ul className="sm:flex hidden gap-4">
          {data.navLinks.map((link) => (
            <li
              key={link.id}
              className="text-grayishViolet font-bold hover:text-veryDarkBlue hover:cursor-pointer"
            >
              {link.link}
            </li>
          ))}
        </ul>
      </div>
      <img
        src={images.iconHamburger}
        alt="menu"
        className="sm:hidden flex"
        onClick={() => setToggleMenu((prev) => !prev)}
      />
      <div className="md:flex hidden items-center gap-8">
        <button className="px-5 py-2 rounded-full text-darkViolet hover:text-grayishViolet">Login</button>
        <button className="px-5 py-2 rounded-full text-white bg-cyan hover:bg-cyan/70">Sign Up</button>
      </div>

      {toggleMenu && (
        <div className="flex flex-col items-center gap-6 absolute top-[70px] left-1/2 transform -translate-x-1/2 w-[90%] bg-darkViolet rounded-xl py-8 px-4 animate-slideIn">
          <ul className="flex flex-col w-full text-center gap-4 border-b-[1px] border-b-grayishViolet pb-8">
            {data.navLinks.map((link) => (
              <li
                key={link.id}
                onClick={() => setToggleMenu(false)}
                className="text-[20px] text-white font-medium hover:text-veryDarkBlue hover:cursor-pointer"
              >
                {link.link}
              </li>
            ))}
          </ul>
          <div className="flex flex-col w-full items-center gap-4">
            <button className="text-[18px] font-[600] px-5 py-2 rounded-full text-white hover:text-grayishViolet">Login</button>
            <button className="w-full px-5 py-3 font-[600] text-[18px] rounded-full text-white bg-cyan hover:bg-cyan/70">Sign Up</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
