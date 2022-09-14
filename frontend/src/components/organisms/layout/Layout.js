
import { useSelector } from 'react-redux';

import NavBar from '../../molecules/navbar/NavBar';

import s from './Layout.module.scss';

const Layout = () => {

  const user = useSelector((state) => state.register);

  return (
    <>
      <NavBar statusReg={user} />
    </>
  )
}

export default Layout;