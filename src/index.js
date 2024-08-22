import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';
const books = [
  {
    author: 'Colleen Hoover',
    title: 'It Ends with Us: A Novel',
    img: 'https://images-na.ssl-images-amazon.com/images/I/813aV273-rL._AC_UL600_SR600,400_.jpg',
    id: 1,
  },
  {
    author: 'Casey Means MD',
    title:
      'Good Energy: The Surprising Connection Between Metabolism and Limitless Health ',
    img: 'https://images-na.ssl-images-amazon.com/images/I/71KTwO53SnL._AC_UL600_SR600,400_.jpg',
    id: 2,
  },
];

const BookList = () => {
  const someValue = 'aurthor conor doyel';
  const displaySomevlaue = () => {
    console.log(someValue);
  };
  return (
    <section className='booklist'>
      {books.map((book) => {
        // const { author, title, img, id } = book;
        return (
          <Book {...book} displaySomevlaue={displaySomevlaue} key={book.id} />
        );
      })}
    </section>
  );
};

const Book = ({ img, title, author, displaySomevlaue }) => {
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={displaySomevlaue}>click me</button>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<BookList />);

// {
//   /* <EventExamPale /> */
// }
// const EventExamPale = () => {
//   const hadndleFromInput = (e) => {
//     // console.log(e.target.name);
//     // console.log(e.target.value);
//     console.log('hello from handle input');
//   };
//   const hadndleButtonClick = () => {
//     console.log('the click me was clicked');
//   };
//   const handleFormSubmition = (e) => {
//     e.preventDefault();
//     console.log('form submitted');
//   };

//   return (
//     <section>
//       <form onSubmit={handleFormSubmition}>
//         <h2>Typical form</h2>
//         <input
//           type='text'
//           name='exampale'
//           onChange={hadndleFromInput}
//           style={{ margin: '1rem 0' }}
//         />
//         <button onClick={hadndleButtonClick}>click me</button>
//       </form>
//     </section>
//   );
// };
