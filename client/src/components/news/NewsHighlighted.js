import React from 'react';
import styles from './NewsHighlighted.module.scss';
import { Link } from 'react-router-dom';

const NewsHighlighted = ({ news }) => {

  return (
    <article className={styles.newsItem}>
      <img src={news.img} alt="News image" />
      <h1>
        <Link to="/novice" className={styles.newsTitleLink}>
          {news.title}
        </Link>
      </h1>
      <p className={styles.description}>{news.description}</p>
      <time>{news.date}</time>
      <div className={styles.spacer}></div>
    </article>
  );
};

export default NewsHighlighted;