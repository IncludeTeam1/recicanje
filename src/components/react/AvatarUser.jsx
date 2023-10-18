import imgDefault from "../../assets/images/placeholder.jpg";

function AvatarUser({ user, className = "" }) {
  return (
    <img
      className={`w-10 h-10 rounded-full ${className}`}
      src={user?.photoURL || imgDefault.src}
      alt={`Avatar del usuario ${user?.displayName}`}
    />
  );
}

export { AvatarUser };
