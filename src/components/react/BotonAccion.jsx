function BotonAccion({ onClick, className = '', children, ...props }) {
  return (
    <button
      className={`rounded-full hover:opacity-70 hover:scale-95 transition-all hover:bg-gray-300 p-2 ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export { BotonAccion };
