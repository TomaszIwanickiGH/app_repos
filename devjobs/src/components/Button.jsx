const Button = ({ label, mode, handleClick, width }) => {
  let colors = 'bg-violet hover:bg-lightViolet text-white';
  if (mode === 'light') {
    colors = 'bg-veryLightGray hover:bg-lightViolet/40 text-violet';
  }
  if (mode === 'dark') {
    colors = 'bg-veryDarkGray hover:bg-gray text-white';
  }

  return (
    <button
      onClick={handleClick}
      className={`py-2 px-4 rounded-md lg:min-w-[120px] font-bold ${colors} ${width}`}
    >
      {label}
    </button>
  );
};

export default Button;
