function InputText({ placeholder, error, label, ...props }) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-sm tracking-wide">{label}:</span>
      <input
        className="border p-3 rounded-md bg-gray-100"
        type="text"
        placeholder={placeholder}
        maxLength={30}
        {...props}
      />
      {error && <span className="text-rose-800">{error}</span>}
    </label>
  );
}

export { InputText };
