import clsx from 'clsx';
import { Btn } from './Button.styled';

const Button = ({
  selected = false,
  type = 'button',
  children,
  ...otherProps
}) => {
  return (
    <Btn
      className={clsx(Btn, {
        [Btn.isSelected]: selected,
      })}
      type={type}
      {...otherProps}
    >
      {children}
    </Btn>
  );
};

export default Button;
