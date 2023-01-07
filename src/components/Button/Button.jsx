import clsx from 'clsx';
import { Btn } from './Button.styled';

const Button = ({
  selected = false,
  type = 'button',
  children,
  ...otherProps
}) => {
  return (
    <button
      className={clsx(Btn, {
        [Btn.isSelected]: selected,
      })}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
