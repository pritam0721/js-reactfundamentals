```js
{
  /* <EventExamPale /> */
}
const EventExamPale = () => {
  const hadndleFromInput = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    console.log('hello from handle input');
  };
  const hadndleButtonClick = () => {
    console.log('the click me was clicked');
  };
  const handleFormSubmition = (e) => {
    e.preventDefault();
    console.log('form submitted');
  };

  return (
    <section>
      <form onSubmit={handleFormSubmition}>
        <h2>Typical form</h2>
        <input
          type='text'
          name='exampale'
          onChange={hadndleFromInput}
          style={{ margin: '1rem 0' }}
        />
        <button onClick={hadndleButtonClick}>click me</button>
      </form>
    </section>
  );
};

const { author, title, img, id } = book;
const someValue = 'aurthor conor doyel';
const displaySomevlaue = () => {
  console.log(someValue);
};
const getSingleBook = () => {
  getBook(id);
};
<button onClick={() => getBook(id)}>click me </button>;
const getBook = (id) => {
  const book = books.find((book) => book.id === id);
  console.log(book);
};
```
