import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';
import { books } from './book';
import Book from './Books';

const BookList = () => {
  return (
    <>
      <h1>Amazon best seller</h1>
      <section className='booklist'>
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />;
        })}
      </section>
    </>
  );
};

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<BookList />);
