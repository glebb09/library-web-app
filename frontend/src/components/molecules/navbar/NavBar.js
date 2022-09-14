import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../features/user/userFormSlice';

import UserInfoNav from '../info-user-nav/UserInfoNav';
import Button from '../../atoms/button/Button';

import {  LocalUser, LocalUserOut } from '../../../hooks/useLocalUser/useLocalUser';
 
import {
  HomeIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline'

import s from './NavBar.module.scss';

const NavBar = ({ statusReg }) => {

  const navigate = useNavigate();

  const [ userInfo, setUserInfo ] = useState();

  const { status } = useSelector((state) => state.register);
  const { statusUpdate } = useSelector((state) => state.updateSelf);

  const dispatch = useDispatch();
  
  const handleClickLogout = (e) => {
    dispatch(logout());
    LocalUserOut();
    setUserInfo('');
    navigate('/');
  }


  useEffect(() => {
    if(LocalUser()) {
      setUserInfo(LocalUser());
    }
  }, [statusUpdate]);

  return (
    <div className={s.container}>
      <div className={s.miniContainer}>
        <nav>
         <Link to="/" className={s.home}>
            Home
         </Link>
         <HomeIcon className={s.homeIcon}/>
        </nav>
      
        <div>
        { status || userInfo ? (
              <div>
                { userInfo ? (
                   <div className={s.rightInfo}>
                    <UserInfoNav
                      f_name={userInfo.first_name}
                      l_name={userInfo.last_name}
                      email={userInfo.email}
                    />

                    <Link to="/">
                      <Button 
                        newClass="login"
                        onClickLogout={handleClickLogout}
                      >
                        Выход
                      </Button>
                      <ArrowRightOnRectangleIcon 
                        className={s.exitIcon}
                        onClickLogout={handleClickLogout}
                      />
                    </Link> 
                  </div>

                ) : (

                  <div className={s.rightInfo}>
                  <UserInfoNav
                    f_name={statusReg.first_name}
                    l_name={statusReg.last_name}
                    email={statusReg.email}
                  />

                  <Link to="/">
                    <Button 
                      newClass="login"
                      onClickLogout={handleClickLogout}
                    >
                      Выход
                    </Button>
                  </Link>
                  </div>
                ) 
                }
              </div>
          ) : (
            <>
             <Link to="/login">
                <Button newClass="login">
                  Вход
                </Button>
              </Link> 
              <Link to="/register">
                <Button>
                  Регистрация
                </Button>
              </Link> 
            </>
          )}

        </div>
      </div>
      
    </div>
  )
};

export default NavBar;

