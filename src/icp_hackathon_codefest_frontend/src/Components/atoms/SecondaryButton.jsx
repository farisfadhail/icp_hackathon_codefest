const SecondaryButton = ({ type = "", text = "" }) => {
  return (
    <button type={type} className="py-1.5 px-3 rounded-md bg-indigo-950 text-white font-medium hover:bg-indigo-900 uppercase">
      {text}
    </button>
  );
};

export default SecondaryButton;
