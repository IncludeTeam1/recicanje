function NavLink({ item, activo = false, className = "" }) {
  return (
    <li
      className={`flex flex-col justify-center items-center w-[100px] h-[60px] ${
        activo ? " bg-emerald-800 scale-95" : ""
      }
        ${className} transition-all
      `}
    >
      <a
        className="flex flex-col justify-center w-full h-full items-center"
        href={item.href}
      >
        {item.icon}
        <span>{item.text}</span>
      </a>
    </li>
  );
}

export { NavLink };
