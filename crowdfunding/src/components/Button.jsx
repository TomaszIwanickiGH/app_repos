const Button = ({ label, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="bg-cyan hover:bg-darkCyan rounded-full py-3 sm:px-8 px-4 text-white hover:font-bold hover:cursor-pointer min-w-[120px]"
    >
      {label}
    </button>
  );
};

export default Button;
