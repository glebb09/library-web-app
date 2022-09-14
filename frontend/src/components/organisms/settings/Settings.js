import s from './Settings.module.scss';

const Settings = ({
  active
}) => {

  return (
    <div className={s.container} state={active}>
      В разработке
    </div>
  )
};

export default Settings;