const btnStyle = {
  success: "btn-success hover:btn-success-hover",
  CV: "btn-CV hover:btn-CV-hover ",
  danger: "btn-danger hover:btn-danger-hover",
};
const btnSize = {
  small: "px-3 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-5 py-3 text-lg",
};
export default function Button({
  children,
  onClick,
  variant,
  size,
  icon,
  disabled = false,
}) {
  return (
    <button
      onClick={onClick}
      className={`btn ${btnStyle[variant]} ${btnSize[size]} rounded-md cursor-pointer`}
      disabled={disabled}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
}
