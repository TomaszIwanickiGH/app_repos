import { useEffect } from 'react';

import { images, data } from '../../constants';

import useMenuModal from '../../hooks/useMenuModal';
import useTheme from '../../hooks/useTheme';
import useGlobals from '../../hooks/useGlobals';

const MenuModal = () => {
  const menuModal = useMenuModal();
  const theme = useTheme();
  const globals = useGlobals();

  useEffect(() => {
    const closeMenu = () => {
      menuModal.onClose();
    };

    window.addEventListener('resize', closeMenu);
  }, [window.innerWidth]);

  if (!menuModal.isOpen) {
    return null;
  }

  return (
    <div className="relative bg-neutral-900/70 w-full h-screen">
      <div className="absolute top-[100px] left-0 right-0 mx-auto w-full px-12">
        <div className="bg-darkGray rounded-3xl flex flex-col gap-6 py-6 shadow shadow-mainPurple">
          <div className="flex justify-between items-center px-8">
            <h3 className="text-mediumGray tracking-[.1rem] text-[15px]">ALL BOARDS ({data.boards.length})</h3>
            <img
              onClick={() => menuModal.onClose()}
              src={images.iconClose}
              alt="close"
              className="w-[15px] h-[15px] hover:cursor-pointer"
            />
          </div>

          <div className="flex flex-col gap-2">
            {data.boards.map((board) => (
              <div
                key={board.name}
                className="w-[90%]"
                onClick={() => {
                  globals.setCurrentBoard(board.name);
                  menuModal.onClose();
                }}
              >
                <div
                  className={`flex justify-start items-center gap-4 px-8 py-3 rounded-se-full rounded-ee-full hover:cursor-pointer 
                  ${globals.currentBoard === board.name ? 'bg-mainPurple text-white' : 'hover:bg-white bg-transparent text-mediumGray hover:text-mainPurple'}`}
                >
                  <img
                    src={globals.currentBoard === board.name ? images.iconBoardWhite : images.iconBoard}
                    alt="board"
                  />
                  <p className="font-bold">{board.name}</p>
                </div>
              </div>
            ))}
            <div className="w-[90%]">
              <div className={`flex justify-start items-center gap-4 px-8 py-3 rounded-se-full rounded-ee-full  hover:cursor-pointer`}>
                <img
                  src={images.iconBoardPurple}
                  alt="board"
                />
                <p className={`text-mainPurple hover:text-lightPurple`}>+Create New Board</p>
              </div>
            </div>
          </div>

          <div className="px-8">
            <div className="rounded-md bg-veryDarkGray flex justify-center items-center gap-4 py-4">
              <img
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
              <img
                src={images.iconDarkTheme}
                alt="icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
