const Button = ({ label, light, dark }) => {
  let colors = 'bg-violet hover:bg-lightViolet text-white';
  if (light) {
    colors = 'bg-veryLightGray hover:bg-lightViolet/40 text-violet';
  }
  if (dark) {
    colors = 'bg-veryDarkGray hover:bg-gray text-white';
  }

  return <button className={`py-2 px-4 rounded-md lg:min-w-[120px] font-bold ${colors}`}>{label}</button>;
};

export default Button;
