'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

import { images } from '../constants';

import useGlobals from '../hooks/useGlobals';
import useMenuModal from '../hooks/useMenuModal';
import MenuActions from './MenuActions';

const Nav = ({ mode }) => {
  const globals = useGlobals();
  const menuModal = useMenuModal();

  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => setToggleMenu(false));
  }, [window.innerWidth]);

  return (
    <>
      <div className={`${mode === 'light' ? 'bg-white' : 'bg-darkGray'} px-6 border-b-[1px] border-b-neutral-700 lg:flex hidden justify-between items-center`}>
        <div className="flex items-center justify-center gap-6">
          {!globals.isSidebarOpen && (
            <div className="border-r-[2px] border-r-neutral-700">
              <Image
                className="py-6 pr-6"
                src={mode === 'light' ? images.logoLight : images.logoDark}
                alt="logo"
              />
            </div>
          )}
          <h2 className="font-semibold text-white text-[24px] tracking-wider py-6 ">{globals.currentBoard}</h2>
        </div>
        <div className="flex justify-center items-center gap-4">
          <button className="px-5 py-3 bg-mainPurple font-semibold rounded-full text-white">+ Add New Task</button>
          <MenuActions
            editMessage="Edit Board"
            deleteMessage="Delete Board"
            toggle={toggleMenu}
            handleToggle={() => setToggleMenu((prev) => !prev)}
            handleClose={() => setToggleMenu(false)}
          />
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`${mode === 'light' ? 'bg-white' : 'bg-darkGray'} lg:hidden flex justify-between items-center py-6 px-4`}>
        <div className="flex gap-4">
          <Image
            src={images.logoMobile}
            alt="logo"
          />
          <div
            onClick={() => menuModal.onOpen()}
            className="flex justify-center items-center gap-2 hover:cursor-pointer"
          >
            <h2 className="text-[18px] text-white font-semibold tracking-wider">{globals.currentBoard}</h2>
            <Image
              src={menuModal.isOpen ? images.iconChevronDown : images.iconChevronUp}
              alt="up"
            />
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <button className="pt-1 pb-2 px-5 bg-mainPurple rounded-full text-white text-[18px] font-bold">+</button>
          <MenuActions
            editMesage="Edit Board"
            deleteMessage="Delete Board"
            toggle={toggleMenu}
            handleToggle={() => setToggleMenu((prev) => !prev)}
            handleClose={() => setToggleMenu(false)}
          />
        </div>
      </div>
    </>
  );
};

export default Nav;
