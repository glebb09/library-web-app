import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveStatus } from '../../../features/user/userSaveProfile';
import { returnBook } from '../../../features/book/books';

import { removeBook, removeBookId } from '../../../hooks/useBook/useBook';

import s from './ButtonSave.module.scss';

const Button = ({
  children,
  delId,
  del
}) => {

  const { statusUpdate } = useSelector((state) => state.updateSelf);
  const { myBooks } = useSelector((state) => state.books);

  const dispatch = useDispatch();

  const [ deleteId, setDeleteId ] = useState(delId);

  const handleSaveButton = () => {
    dispatch(saveStatus(true));
  };

  const handleDeleteButton = (id) => {
    dispatch(returnBook(id));
    
  };

  return (
    <>
    
      {
        del ? (
          <button 
            className={s.button}
            onClick={() => handleDeleteButton(deleteId)}
          >
            {children}
          </button>
        ) : (
          <button 
            className={s.button}
            onClick={() => handleSaveButton() }
          >
            {children}
          </button>
          )
      }

    </>
  )
};

export default Button;

/*
const Button = ({
  children,
  delId,
  del
}) => {

  const { statusUpdate } = useSelector((state) => state.updateSelf);
  console.log("Update", statusUpdate);
  const dispatch = useDispatch();

  const handleSaveButton = (id) => {
    del ? dispatch(returnBook(id)) : dispatch(saveStatus(true));
    
  };

  return (
    <button 
      className={s.button}
      onClick={delId ? () => handleSaveButton(delId) : () => handleSaveButton() }
    >
      {children}
    </button>
  )
};

export default Button;

*/