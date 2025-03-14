import { useMemo } from "react";
import { Icon } from "@iconify/react";

const BaseInput = ({
  type = "text",
  placeholder,
  onKeyUp,
  onEnter,
  onChange,
  outlined = false,
  icon,
  onClickIcon = () => {},
  width = 120,
}) => {
  const getWidth = () => `w-${width}`;

  const handleKeyUp = (e) => {
    onKeyUp?.(e);
    if (e.key === "Enter") onEnter?.(e);
  };

  const inputProps = useMemo(() => {
    const props = { type, onKeyUp: handleKeyUp };
    if (placeholder) props.placeholder = placeholder;
    if (onChange) props.onChange = (e) => onChange(e.target.value);
    return props;
  }, [type, placeholder, onChange]);

  return (
    <div className={`${getWidth()} relative`}>
      <input
        {...inputProps}
        className={`focus:ring-primary-light focus:dark:ring-primary-dark w-full rounded-md px-4 py-3 focus:ring-3 focus:outline-none focus:dark:ring-2 ${
          outlined ? "bg-background border-borderColor border-2" : "bg-surface border-none"
        }`}
      />

      {icon && (
        <Icon
          onClick={onClickIcon}
          icon={icon}
          className="absolute top-1/2 right-3 -translate-y-1/2 transform cursor-pointer"
          height={24}
        />
      )}
    </div>
  );
};

export default BaseInput;
