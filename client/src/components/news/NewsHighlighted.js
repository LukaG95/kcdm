import React from 'react';
import styles from './NewsHighlighted.module.scss';
import SearchIcon from '../../assets/images/one.png';

const NewsHighlighted = ({ news }) => {

  return (
    <article className={styles.newsItem}>
      <img src={SearchIcon} alt={"News image"} />
      <h1>{news.title}</h1>
      <p className={styles.description}>{news.description}</p>
      <time dateTime={news.date}>{news.date}</time>
    </article>
  );
};

export default NewsHighlighted;