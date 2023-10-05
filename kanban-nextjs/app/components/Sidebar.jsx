'use client';

import { useState } from 'react';
import Image from 'next/image';

import { images } from '../constants';
import { data } from '../constants';
import useTheme from '../hooks/useTheme';
import useGlobals from '../hooks/useGlobals';

const Sidebar = ({ mode }) => {
  const theme = useTheme();
  const globals = useGlobals();

  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <>
      <div
        className={`${showSidebar ? 'lg:flex border-r-[1px] border-r-neutral-700' : 'hidden'} hidden flex-col justify-between h-screen xl:w-[25%] lg:w-[30%] md:w-[40%] py-8
        ${mode === 'light' ? 'bg-white' : 'bg-darkGray'}`}
      >
        <div className="flex flex-col gap-8 w-full">
          <div className="px-8">
            <Image
              src={mode === 'light' ? images.logoLight : images.logoDark}
              alt="logo"
            />
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-mediumGray px-8 tracking-[.1rem] text-[13px]">ALL BOARDS ({data.boards.length})</h3>
            <div className="flex flex-col gap-2">
              {data.boards.map((board) => (
                <div
                  key={board.name}
                  className="w-[90%]"
                  onClick={() => globals.setCurrentBoard(board.name)}
                >
                  <div
                    className={`flex justify-start items-center gap-4 px-8 py-3 rounded-se-full rounded-ee-full hover:cursor-pointer 
                  ${globals.currentBoard === board.name ? 'bg-mainPurple text-white' : 'hover:bg-white bg-transparent text-mediumGray hover:text-mainPurple'}`}
                  >
                    <Image
                      src={globals.currentBoard === board.name ? images.iconBoardWhite : images.iconBoard}
                      alt="board"
                    />
                    <p className="font-bold">{board.name}</p>
                  </div>
                </div>
              ))}
              <div className="w-[90%]">
                <div className={`flex justify-start items-center gap-4 px-8 py-3 rounded-se-full rounded-ee-full  hover:cursor-pointer`}>
                  <Image
                    src={images.iconBoardPurple}
                    alt="board"
                  />
                  <p className={`text-mainPurple hover:text-lightPurple`}>+Create New Board</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <div className="px-8 py-4">
            <div className="rounded-md bg-veryDarkGray flex justify-center items-center gap-4 py-4">
              <Image
                src={images.iconLightTheme}
                alt="icon"
              />
              <label className="switch">
                <input
                  onClick={() => theme.toggleMode(theme.mode)}
                  type="checkbox"
                  defaultChecked
                />
                <span className="slider round"></span>
              </label>
              <Image
                src={images.iconDarkTheme}
                alt="icon"
              />
            </div>
          </div>
          <div className="w-[90%]">
            <div
              className={`flex justify-start items-center gap-4 px-8 py-3 rounded-se-full rounded-ee-full  hover:cursor-pointer hover:bg-white text-mediumGray hover:text-mainPurple `}
              onClick={() => {
                setShowSidebar(false);
                globals.closeSidebar();
              }}
            >
              <Image
                src={images.iconHideSidebar}
                alt="board"
              />
              <p className={`font-bold`}>Hide Sidebar</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-10 py-4 w-[60px] ${showSidebar ? 'hidden' : 'md:flex hidden'} justify-center items-center bg-mainPurple hover:bg-lightPurple rounded-se-full rounded-ee-full hover:cursor-pointer`}
        onClick={() => {
          setShowSidebar(true);
          globals.openSidebar();
        }}
      >
        <Image
          className=""
          src={images.iconShowSidebar}
          alt="show"
        />
      </div>
    </>
  );
};

export default Sidebar;
