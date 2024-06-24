const PrimaryButton = ({ type = "button", text = "" }) => {
  return (
    <button type={type} className="py-1.5 px-3 rounded-md bg-indigo-700 text-white font-medium hover:bg-indigo-600 uppercase">
      {text}
    </button>
  );
};

export default PrimaryButton;
