import React from 'react';
import { useSelector } from 'react-redux';

import Sidebar from '../../organisms/sidebar/Sidebar';
import Feed from '../../organisms/feed/Feed';
import Book from '../../organisms/book/Book';
import Settings from '../../organisms/settings/Settings';

import s from './Profile.module.scss';
import { render } from '@testing-library/react';
import activeProfile from '../../../features/active-profile/activeProfile';

const components = [ <Feed />, <Book />, <Settings /> ];

const Profile = () => { 

  const { activeProfile, activeBook, activeSettings } = useSelector((state) => state.active);

  return (
    <>
        <div className={s.container}>
          <Sidebar />
          
          <Feed active={activeProfile}/>
          <Book active={activeBook}/>
          <Settings active={activeSettings}/>

        </div>
    </>
  )   
};

export default Profile;

/*
{ activeProfile && <Feed /> }
{ activeBook && <Book /> }
{ activeSettings && <Settings /> }
*/