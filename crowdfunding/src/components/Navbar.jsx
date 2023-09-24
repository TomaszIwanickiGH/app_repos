import { useState, useEffect } from 'react';
import { images, data } from '../constants';
import useCardModal from '../hooks/useCardModal';

const Navbar = () => {
  const cardModal = useCardModal();

  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    const setToggle = () => {
      setToggleMenu(false);
    };

    window.addEventListener('resize', setToggle);
  }, [window.innerWidth]);

  return (
    <div className="w-full z-10">
      <div className="relative">
        <img
          className="w-full darken-image sm:flex hidden"
          src={images.imageHeroDesktop}
          alt="hero"
        />
        <img
          className="w-full darken-image sm:hidden flex"
          src={images.imageHeroMobile}
          alt="hero"
        />
        <div className="absolute top-0 flex py-8 lg:px-40 md:px-20 px-8 w-full">
          <div className="flex justify-between items-center w-full">
            <img
              src={images.logo}
              alt="logo"
            />
            <ul className="sm:flex hidden items-center gap-4">
              {data.navLinks.map((link) => (
                <li
                  className="text-white hover:text-neutral-300 hover:cursor-pointer"
                  key={link.id}
                  onClick={() => {
                    if (link.link === 'Discover' || link.link === 'Get Started') cardModal.onOpen();
                  }}
                >
                  <a href={link.id}>{link.link}</a>
                </li>
              ))}
            </ul>

            <div className="sm:hidden flex">
              <img
                src={!toggleMenu ? images.iconHamburger : images.iconCloseMenu}
                alt="menu"
                className="hover:cursor-pointer"
                onClick={() => setToggleMenu((prev) => !prev)}
              />
            </div>

            {toggleMenu && (
              <div className="absolute top-[80px] bg-white rounded-lg w-[85%] z-50">
                <ul className="flex flex-col justify-center items-center w-full">
                  {data.navLinks.map((link) => (
                    <li
                      className={`text-black hover:text-neutral-300 hover:cursor-pointer w-full px-4 py-2 font-bold text-[20px] ${link.link === 'Get Started' ? 'border-b-[0px]' : 'border-b-[1px]'} border-b-[1px] border-b-neutral-300`}
                      key={link.id}
                      onClick={() => {
                        if (link.link === 'Discover' || link.link === 'Get Started') cardModal.onOpen();
                        setToggleMenu(false);
                      }}
                    >
                      <a href={link.id}>{link.link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
