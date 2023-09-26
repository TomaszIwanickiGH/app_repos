const Button = ({ label, light, dark, handleClick }) => {
  let colors = 'bg-violet hover:bg-lightViolet text-white';
  if (light) {
    colors = 'bg-veryLightGray hover:bg-lightViolet/40 text-violet';
  }
  if (dark) {
    colors = 'bg-veryDarkGray hover:bg-gray text-white';
  }

  return (
    <button
      onClick={handleClick}
      className={`py-2 px-4 rounded-md lg:min-w-[120px] max-w-[200px] font-bold ${colors}`}
    >
      {label}
    </button>
  );
};

export default Button;
