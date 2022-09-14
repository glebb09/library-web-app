
import s from './Button.module.scss';

const Button = ({
  children,
  newClass,
  onClickLogout
}) => {

  return (
    <button className={[
      s.button,
      `${newClass == 'login' ? s.login : ''}`
    ].join(" ")}
    onClick={() => onClickLogout()}
    >
      {children}
    </button>
  )
};

export default Button