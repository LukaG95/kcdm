import React from 'react';
import styles from './NewsFull.module.scss';

const NewsFull = ({ news }) => {

  return (
    <article className={styles.newsItem}>
      <h1>{news.title}</h1>
      <time>{news.date}</time>
      <p className={styles.description}>{news.description}</p>
      
      <div className={styles.content}>
        {news.content.map((item, index) => {
          switch(item.type) {
            case 'h2':
              return <h2 key={index}>{item.text}</h2>;
            case 'p':
              return <p key={index}>{item.text}</p>;
            case 'img':
              return <img key={index} src={item.src} alt={item.alt} />;
            case 'ul':
              return (
                <ul key={index}>
                  {item.text.map((li, i) => <li key={i}>{li}</li>)}
                </ul>
              );
            case 'a':
              return <a key={index} href={item.href}>{item.text}</a>;
            default:
              return null;
          }
        })}
      </div>
    </article>
  );
};

export default NewsFull;