const CustomInput = ({ image, placeholder, value, setValue, border }) => {
  return (
    <div
      className={`lg:p-6 py-6 px-4 flex gap-4
      ${border ? 'border-l-[1px] border-r-[1px] border-neutral-200' : 'border-l-[0px] border-r-[0px]'}`}
    >
      {image && (
        <img
          src={image}
          alt="svg"
        />
      )}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

export default CustomInput;
