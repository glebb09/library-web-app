import { useState, useEffect } from 'react';

import FieldsUpdate from '../../atoms/field/FieldsUpdate';
import ButtonSave from '../../atoms/button-save';

import { useSelector, useDispatch } from 'react-redux';
import userFormSlice from '../../../features/user/userFormSlice';

import { LocalUser, LocalUserIn } from '../../../hooks/useLocalUser/useLocalUser';
 
import s from './Feed.module.scss';

const Feed = ({
  active
}) => {

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [middleName, setMiddleName] = useState();

  useEffect(() => {
    if(LocalUser()) { 
      const userProfile = LocalUser();
      setFirstName(userProfile.first_name);
      setLastName(userProfile.last_name);
      setMiddleName(userProfile.middle_name);
    }
  }, []);

  return (
    <div className={s.container} state={active}>
      <div className={s.fieldContainer}>
          <FieldsUpdate 
            textLabelOne='First Name'
            dataOne={firstName}
            textLabelTwo='Last Name'
            dataTwo={lastName}
            textLabelThree='Middle Name'
            dataThree={middleName}
          /> 

      </div>
          <div className={s.buttonSave}>
            <ButtonSave>
              Сохранить
            </ButtonSave> 
          </div>    
    </div>
  )
};

export default Feed;