import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { profile } from '../../../features/active-profile/activeProfile';

import { useNavigate } from 'react-router-dom';

import { LocalUserId, LocalUser } from '../../../hooks/useLocalUser/useLocalUser';

import s from './UserInfoNav.module.scss';

const UserInfoNav = ({
  f_name,
  l_name,
  email
}) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.register);
  const { statusUpdate } = useSelector((state) => state.updateSelf);
  const { activeProfile } = useSelector((state) => state.active);

  const handlProfile = () => {
    navigate(`/updateSelf`);
    dispatch(profile(true));
  }

  useEffect(() => {

  }, [statusUpdate]);

  return (
    <div 
      className={s.container}
      onClick={() => handlProfile()}
    >
      <div className={s.icon}>
        <svg 
          enable-background="new 0 0 32 32" 
          id="Stock_cut" 
          version="1.1" 
          viewBox="0 0 32 32" 
          >
            <desc/><g><circle cx="16" cy="16" fill="none" r="15" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
            <path d="M26,27L26,27   c0-5.523-4.477-10-10-10h0c-5.523,0-10,4.477-10,10v0" fill="none" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/>
            <circle cx="16" cy="11" fill="none" r="6" stroke="#000000" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/></g>
          </svg>
      </div>
      <div className={s.rightInfo}>
        <span className={s.name}>
          {userInfo.firstName || f_name}{" "}
          {userInfo.lastName || l_name}{" "}
        </span>
        <span className={s.email}>
          {userInfo.email || email}
        </span>
      </div>
    </div>
  )
};

export default UserInfoNav;
