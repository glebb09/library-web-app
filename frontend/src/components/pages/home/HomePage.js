import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { booksAll } from '../../../features/book/books';

import Layout from '../../organisms/layout/Layout';
import Card from '../../molecules/card/Card';

import s from './HomePage.module.scss';

const HomePage = () => {

  const dispatch = useDispatch();
  const { books } = useSelector((state) => state.books);

  useEffect(() => {
    const resultBooks = dispatch(booksAll()).unwrap();
  }, [])

  return (
    <>
      <div className={s.content}>

      { books.map((book) => (
          <Card
            key={book.id} 
            dataId={book.id}
            title={book.name}
            desc={book.description}
            pages={book.pages_count}
            year={book.publishing_year}
          />
        )) }
        
        
        {/*
        <Outlet />
        */}
      </div>
    </>
  )
}

export default HomePage;