
import { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux';

import { LocalUser, LocalUserId, LocalUserIn } from '../../../hooks/useLocalUser/useLocalUser';
import { saveProfile, saveStatus } from '../../../features/user/userSaveProfile';

import s from './Field.module.scss';
import {
  XMarkIcon
} from '@heroicons/react/24/outline';


const FieldsUpdate = ({
  textLabelOne, 
  dataOne,
  textLabelTwo, 
  dataTwo,
  textLabelThree, 
  dataThree,
  clearData,
}) => {

  const { statusUpdate } = useSelector((state) => state.updateSelf);
  const dispatch = useDispatch();

  const [ newValueFirstName, setNewValueFirstName ] = useState();
  const [ newValueLastName, setNewValueLastName ] = useState();
  const [ newValueMiddleName, setNewValueMiddleName ] = useState();

  const handleSaveNewValue = async () => {

    if (statusUpdate) { 
      const user = {
        first_name: newValueFirstName,
        last_name: newValueLastName,
        middle_name: newValueMiddleName,
        id: String(LocalUserId()),
      };

      const resault = await dispatch(saveProfile(user)).unwrap();
      console.log("result", resault);
      LocalUserIn(resault);
      dispatch(saveStatus(false));
   
  }};

  useEffect(() => {
    handleSaveNewValue();
  }, [statusUpdate]);

  return (
    <div>
        <div className={s.containerField}>
          <label className={s.label}>{textLabelOne}</label>
          <input 
            className={s.input} 
            type="text" 
            placeholder={dataOne}
            value={newValueFirstName} 
            onChange={(e) => setNewValueFirstName(e.target.value)}
          />
          <XMarkIcon 
            className={s.icon} 
            onClick={() => setNewValueFirstName('')}
          />
        </div>

        <div className={s.containerField}>
          <label className={s.label}>{textLabelTwo}</label>
          <input 
            className={s.input} 
            type="text" 
            placeholder={dataTwo}
            value={newValueLastName} 
            onChange={(e) => setNewValueLastName(e.target.value)}
          />
          <XMarkIcon 
            className={s.icon} 
            onClick={() => setNewValueLastName('')}
          />
        </div>

        <div className={s.containerField}>
          <label className={s.label}>{textLabelThree}</label>
          <input 
            className={s.input} 
            type="text" 
            placeholder={  dataThree}
            value={newValueMiddleName} 
            onChange={(e) => setNewValueMiddleName(e.target.value)}
          />
          <XMarkIcon 
            className={s.icon} 
            onClick={() => setNewValueMiddleName('')}
          />
        </div>
    </div>
  )
};

export default FieldsUpdate;


