'use client';

import { useState, useEffect } from 'react';

import useDeleteBoardModal from '../../../hooks/board/useDeleteBoardModal';

import useGlobals from '../../../hooks/useGlobals';

import { toast } from 'react-hot-toast';

const DeleteBoardModal = () => {
  const globals = useGlobals();
  const deleteBoardModal = useDeleteBoardModal();

  const [toggleStatus, setToggleStatus] = useState(false);
  const [showModal, setShowModal] = useState(deleteBoardModal.isOpen);

  useEffect(() => {
    setShowModal(deleteBoardModal.isOpen);
    setToggleStatus(toggleStatus);
  }, [deleteBoardModal.isOpen, toggleStatus]);

  if (!deleteBoardModal.isOpen) {
    return null;
  }

  const handleDelete = () => {
    setShowModal(false);
    setToggleStatus(false);

    setTimeout(() => {
      deleteBoardModal.onClose();
      toast.success('Board deleted successfully!');
    }, 500);
  };

  const handleClose = () => {
    setShowModal(false);
    setToggleStatus(false);

    setTimeout(() => {
      deleteBoardModal.onClose();
    }, 500);
  };

  if (showModal) {
    document.body.classList.add('toggle-overflow');
  } else {
    document.body.classList.remove('toggle-overflow');
  }

  return (
    <div className="relative bg-neutral-800/70 h-screen">
      <div
        className={`absolute right-0 left-0 m-auto max-w-[500px] px-8 translate
        ${showModal ? 'top-[50%] translate-y-[-50%] opacity-100 duration-300' : 'translate-y-full opacity-0 duration-700'}
      `}
      >
        <div className="bg-darkGray rounded-md flex flex-col gap-4 px-6 py-6">
          <h2 className="font-bold text-red text-[18px]">Delete this board?</h2>
          <p className="text-[15px] text-neutral-400">Are you sure you want to delete the '{globals.currentBoard}' board? This action will remove all columns and tasks and cannot be reversed.</p>
          <div className="flex justify-center items-center gap-4 w-full mt-1">
            <button
              className="px-5 py-2 bg-red hover:bg-lightRed font-semibold rounded-full text-white w-full"
              onClick={handleDelete}
            >
              Delete
            </button>
            <button
              className="px-5 py-2 bg-white hover:bg-lightGray font-semibold rounded-full text-mainPurple w-full"
              onClick={handleClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteBoardModal;
