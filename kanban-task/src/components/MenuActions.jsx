import { images } from '../constants';

const MenuActions = ({ editMesage, deleteMessage, toggle, handleToggle, handleClose, handleEdit, handleDelete }) => {
  return (
    <>
      <img
        onClick={handleToggle}
        src={images.iconVerticalEllipsis}
        alt="menu"
        className="hover:cursor-pointer p-2"
      />
      {toggle && (
        <div className="absolute lg:top-[75px] lg:right-[50px] top-[70px] right-[30px] bg-veryDarkGray p-4 rounded-lg flex flex-col gap-3 w-[200px] border-[1px] border-gray">
          <p
            onClick={() => {
              handleClose();
              handleEdit();
            }}
            className="text-mediumGray hover:text-lightGray hover:cursor-pointer"
          >
            {editMesage}
          </p>
          <p
            onClick={() => {
              handleClose();
              handleDelete();
            }}
            className="text-red hover:text-lightRed hover:cursor-pointer"
          >
            {deleteMessage}
          </p>
        </div>
      )}
    </>
  );
};

export default MenuActions;
