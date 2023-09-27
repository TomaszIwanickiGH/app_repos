const CustomInput = ({ image, placeholder, value, setValue, border, mode }) => {
  return (
    <div
      className={`lg:p-6 py-6 px-4 flex gap-4
      ${border ? `border-l-[1px] border-r-[1px] ${mode === 'light' ? 'border-neutral-200' : 'border-neutral-800'} ` : 'border-l-[0px] border-r-[0px]'}`}
    >
      {image && (
        <img
          src={image}
          alt="svg"
        />
      )}
      <input
        type="text"
        className={`bg-transparent focus:outline-none ${mode === 'light' ? 'text-black' : 'text-white'}`}
        placeholder={placeholder}
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

export default CustomInput;
