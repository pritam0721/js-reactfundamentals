const Books = ({ img, title, author, number }) => {
  return (
    <article className='book'>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <h4 className='number' style={{ color: 'white' }}>
        #{number + 1}
      </h4>
    </article>
  );
};
export default Books;
