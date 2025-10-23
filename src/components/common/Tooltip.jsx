export default function Tooltip({ children, label }) {
  return (
    <li className="relative group">
      {children}
      <span className="tooltip">{label}</span>
    </li>
  );
}
