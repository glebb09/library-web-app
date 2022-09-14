
import s from './Footer.module.scss';

const Footer = () => {

  return (
    <div className={s.container}>
      &copy; {new Date().getFullYear()} Library. All Rights Reserved.
    </div>
  )
}

export default Footer;