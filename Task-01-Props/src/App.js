import React from 'react';
import books from './data';


function ReadingList() {
  return (
    <main className='container'>
      <section>
        <div className='title'>
          <h1>TOP Reading List</h1>
          <div className='underline'></div>
        </div>
      </section>
        
      <section className='readingList'>
      {books.map((book) => {
          return <Book key={book.id} {...book}></Book>
        })}
      </section>
    </main>
  );
}

const Book = ({id,title,author,image,description}) => {
  return (
    <article>
      <span>{id}</span>
      <img src={image} alt="" />
      <div>
        <h2>{title}</h2>
        <h3>{author}</h3>
        <p>{description}</p>
      </div>
    </article>
  )
};

export default ReadingList;
