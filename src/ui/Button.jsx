import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  // disabled: cursor-not-allowed
  const base =
    "bg-yellow-400 text-sm capitalize font-semibold text-stone-800 inline-block tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 foucus:ring focus:ring-yellow-300 focus:ring-offest-2 ";
  const styles = {
    primary: base + "px-4 py-3 md:px-3 ,d:py-4",
    small: base + "px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      "text-sm text-stone-500 px-4 py-2.5 md:px-3.5 d:py-4 bg-transparent border-2 border-stone-300 capitalize font-semibold text-stone-300 inline-block tracking-wide rounded-full hover:bg-stone-800 hover:text-stone-200 transition-colors duration-300 foucus:ring focus:ring-stone-200 focus:ring-offest-2",
    round: base + 'px-3.5 py-1 md:px:3.5 md:py-2',
    back: base + 'px-2 py-3 md:px:2 md:py-3 text-sm mt-4 '
  };
  if(to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  
  if(onClick) {
    return (
      <button onClick = {onClick} className={styles[type]}>
        {children}
      </button>
    );
  }
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
