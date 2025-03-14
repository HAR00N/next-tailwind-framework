const Chip = ({ children, color = "primary" }) => {
  const getColor = () => `bg-${color}`;
  return <div className={`${getColor()} inline-flex rounded-3xl px-3 py-1 text-sm font-normal`}>{children}</div>;
};

export default Chip;
