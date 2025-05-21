import React from 'react';
import styles from './EventSmall.module.scss';

const EventSmall = ({ event }) => {
  return (
    <article className={styles.eventItem}>
      <h2 className={styles.location}>{event.location}</h2>
      <time>{event.date}</time>
      <h3 className={styles.title}>{event.title}</h3>
      <div className={styles.spacer}></div>
    </article>
  );
};

export default EventSmall;
