import React from 'react';
import styles from './NewsSmall.module.scss';
import { Link } from 'react-router-dom';
import useGradientEffect from '../../hooks/useGradientEffect';

const NewsSmall = ({ news, useAnimation, extraSmall }) => {
  const { gradientWidth, isHovered, handleMouseEnter, handleMouseLeave } = useGradientEffect(0, 4, 1);

  const linkStyle = useAnimation
    ? { background: `linear-gradient(to right, #4BAC87 ${gradientWidth}%, transparent ${gradientWidth}%)`,
    color: isHovered && '#FFFFFF',
    textDecoration: isHovered && 'underline dotted #FFFFFF',
    lineHeight: (isHovered && extraSmall) && '121%'}
    : {};

  return (
    <article className={`${styles.newsItem} ${extraSmall ? styles.small : ''}`}>
      <h2 className={styles.title}>
        <Link
          to={`/novice/${news.id}`}
          className={styles.newsTitleLink}
          style={linkStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {news.title}
          <div className={styles.loader}></div>
        </Link>
      </h2>
      <time>{news.date}</time>
      <div className={styles.spacer}></div>
    </article>
  );
};

export default NewsSmall;
