
import { useState } from 'react';

import { setBookId } from '../../../hooks/useBook/useBook';

import { useDispatch, useSelector } from 'react-redux';
import { addBook, returnBook } from '../../../features/book/books';

import ButtonSave from '../../atoms/button-save';

import s from './Card.module.scss';

const Card = ({
  dataId,
  title,
  desc,
  pages,
  year,
  btn
}) => {

  const dispatch = useDispatch();
  const { booksMark } = useSelector((state) => state.books);
  console.log("booksMark", booksMark);

  const [ id, setId ] = useState(dataId);
  console.log("key", id);

  const handlerSaveBook = (id) => {
    dispatch(addBook(id));
  };

  const handlerReturnBook = (id) => {
    dispatch(returnBook(id));
  }

  return (
    <div className={s.container}>
      <div className={s.containerImage}>
        <img 
          src="https://s1.livelib.ru/boocover/1003317448/200x305/2954/boocover.jpg"
          className={s.image}
        />
      </div>
      <div className={s.containerDesc}>
        <div>
           <h3>{title}</h3>
          <p className={s.desc}>
            {desc}
          </p>
        </div>
        <div className={s.bottomDesc}>
          <span>Страниц: {pages}</span>
          <span>Год издания: {year}</span>
        </div>
        <div 
          className={s.buttonAdd}
        >
            { btn ? (
              <div
              onClick={() => handlerReturnBook(dataId)}
              >
                 <ButtonSave
                  del='return'
                  delId={id}
                >
                    {btn}
                  </ButtonSave>
              </div>  
               
            ) : (
              <div
              onClick={() => handlerSaveBook(dataId)}
              >
                <ButtonSave>
                  Добавить
                </ButtonSave>
              </div>
            ) }
           
          </div>
      </div>
    </div>
  )
};

export default Card;

/*
   Встреча со старыми друзьями, и знакомство с новыми. 
            Продолжение учебы с любимыми преподавателями и Снеггом. 
            Ну и конечно же Квиддич. Ну а там где приключения, таится и опасность. 
            Серийный убийца Сириус Блэк 
            сбежал из самой защищенной тюрьмы мира - Азкабан. 
            И цель Блэка одна - найти и убить Гарри Поттера...


             return (
    <div className={s.container}>
      <div className={s.containerImage}>
        <img 
          src="https://s1.livelib.ru/boocover/1003317448/200x305/2954/boocover.jpg"
          className={s.image}
        />
      </div>
      <div className={s.containerDesc}>
        <div>
           <h3>Гарри Поттер и узник Азкабана</h3>
          <p className={s.desc}>
            У Гарри начался 3 год учебы в Хогвартс.
            Встреча со старыми друзьями, и знакомство с новыми. 
            Продолжение учебы с любимыми преподавателями и Снеггом. 
            Ну и конечно же Квиддич. Ну а там где приключения, таится и опасность. 
            Серийный убийца Сириус Блэк 
            сбежал из самой защищенной тюрьмы мира - Азкабан. 
          </p>
        </div>
        <div className={s.bottomDesc}>
          <span>Страниц: 480</span>
          <span>Год издания: 2019</span>
        </div>
        <div className={s.buttonAdd}>
            <ButtonSave>
                Добавить
            </ButtonSave>
          </div>
      </div>
    </div>
  )
};
*/
