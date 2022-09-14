import { useState , useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { booksId, filterBook, booksAll } from '../../../features/book/books';

import { getBookId, myBookMarkGet } from '../../../hooks/useBook/useBook';

import Card from '../../molecules/card/Card';

import s from './Book.module.scss';

const Book = ({
  active
}) => {

  const dispatch = useDispatch();
  const { booksMark, myBooks, books } = useSelector((state) => state.books);

  const [ booksAllProfile, setBooksAllProfile ] = useState();
  const [ bookIdLocal, setBooKIdLocal ] = useState(getBookId());

  const handleMyBooks = async () => {

    const res = await dispatch(booksAll()).unwrap();
    setBooksAllProfile(res);

  };

  useEffect(() => {
    handleMyBooks();

  }, [bookIdLocal]);

  return ( 
    
    <div className={s.container} state={active}>

        { bookIdLocal.length > 0 ? (
          bookIdLocal?.map((id) => (
            booksAllProfile?.map((book) => book.id == id && (
            <Card
              key={book.id} 
              dataId={book.id}
              title={book.name}
              desc={book.description}
              pages={book.pages_count}
              year={book.publishing_year}
              btn='Вернуть'
            />
            )
            )))) 
            : 
            (
              <h3 className={s.notBook}>В данный момент ваш список пуст.</h3>
            )}
    </div>
  )
};

export default Book;

{/*

 { myBookId.forEach((id) => {
            books.filter((book) => book.id == id && 
            <Card
              key={book.id} 
              dataId={book.id}
              title={book.name}
              desc={book.description}
              pages={book.pages_count}
              year={book.publishing_year}
            />
  )})}

  
        
          myBookId?.map((id) => {
            booksAllProfile?.map((book) => book.id == id && (
            
            <Card 
              key={book.id} 
              dataId={book.id}
              title={book.name}
              desc={book.description}
              pages={book.pages_count}
              year={book.publishing_year}
            />)
          )})
            

           normalBook.map((book) => (
              <Card
                key={book.id} 
                dataId={book.id}
                title={book.name}
                desc={book.description}
                pages={book.pages_count}
                year={book.publishing_year}
              />
          ))
        
          const myBookId = getBookId();
          const dispatch = useDispatch();
          const { booksMark, myBooks, books } = useSelector((state) => state.books);
        
          const [ booksProfile, setBooksProfile ] = useState([]);
          const [ booksAllProfile, setBooksAllProfile ] = useState();
          const [ normalBook, setNormalBook ] = useState();
          const [ bookIdLocal, setBooKIdLocal ] = useState(getBookId());
        
          console.log("booksProfile", booksProfile);
          console.log("booksAllProfile", booksAllProfile);
          console.log('normal', normalBook);
          console.log('bookIdLocal', bookIdLocal);
        
          const handleMyBooks = async () => {
        
            setNormalBook( await myBookMarkGet());
            const myBookId = getBookId();
        
            const res = await dispatch(booksAll()).unwrap();
            setBooksAllProfile(res);
        
            myBookId.map((id) => {
              booksAllProfile.map((book) => {
                if( book.id == id ) { setBooksProfile([...booksProfile, book]) }
              })
            })
             
            myBookId.map((id) => {
              console.log("id", id);
              booksAllProfile.map((book) => {
                console.log("book", book);
                if(book.id == id) { setBooksProfile([...booksProfile, book]) };
              });
            });
        
            
              books.map((book) => {
                for(let id in myBookId) {
                  if(book.id == id) { setBooksProfile[book]; }
                }
              }); 
        
            //const mb = await dispatch(filterBook());
            //setBooksProfile(mb);
            //const myBookId = getBookId();
            //const bookArr = [];
        
            //const result = await dispatch(booksAll()).unwrap();
            
           // myBookId.forEach((id) => {
              //const myBook = result.filter((book) => book.id == id);
              //setBooksProfile([ ...booksProfile ,myBook]);
            //});
            
          };
        
          useEffect(() => {
            //const resultBooks = dispatch(booksAll()).unwrap();
            //setBooksAllProfile(dispatch(booksAll()).unwrap());
            handleMyBooks();
        
          }, [booksMark]);

        */}