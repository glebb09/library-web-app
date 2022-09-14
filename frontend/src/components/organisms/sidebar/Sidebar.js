
import { useSelector, useDispatch } from 'react-redux';
import { profile, book, settings } from '../../../features/active-profile/activeProfile';

import { 
 UserCircleIcon,
 BookmarkIcon,
 Cog6ToothIcon,
 ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline';

import s from './Sidebar.module.scss';

const Sidebar = () => {

  const dispatch = useDispatch();

  const { activeProfile, activeBook, activeSettings } = useSelector((state) => state.active);
  
  return (
    <div className={s.containerSide}>
      
      <div 
        className={s.side}
        onClick={() => dispatch(profile('open'))}
      >
         <SideBarIcon 
            icon={<UserCircleIcon />}
            text='Profile'
            active={activeProfile}
          />
      </div>
       
      
      <div
        className={s.side}
        onClick={() => dispatch(book('open'))}
      >
        <SideBarIcon 
          icon={<BookmarkIcon />}
          text='Book'
          active={activeBook}
        />
      </div>
      
      <div
        className={s.side}
        onClick={() => dispatch(settings('open'))}
      >
         <SideBarIcon 
          icon={<Cog6ToothIcon />}
          text='Settings'
          active={activeSettings}
        />
      </div>
     
      {
        /*
        <SideBarIcon
        icon={<ArrowRightOnRectangleIcon />}
        text='Exit'
      />
        */
      }
      
      
    </div>
  )
};

const SideBarIcon = ({ icon, text = '💡', active}) => (
  <div 
    className={active == 'open' ? s.sideIconActive  : s.sideIcon}
  >
    <div className={s.icon}>
      {icon}
    </div>
    <span className={s.sideTooltip}>
      {text}
    </span>
  </div>
);

export default Sidebar;
