function Card({ children, as, className, ...props }) {
  const Component = as || "div";
  return (
    <Component
      className={`relative z-0 group bg-white rounded-lg p-5 shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:ring-1 hover:ring-green-300 ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
export default Card;
