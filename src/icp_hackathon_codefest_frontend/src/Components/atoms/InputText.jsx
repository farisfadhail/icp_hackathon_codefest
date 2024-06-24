const InputText = ({ id = "", name = "", placeholder = "" }) => {
  return <input type="text" id={id} name={name} placeholder={placeholder} className="py-1.5 px-3 block rounded-md focus:ring-indigo-700 focus:border-indigo-700 border-2 border-indigo-700 font-medium" />;
};

export default InputText;
