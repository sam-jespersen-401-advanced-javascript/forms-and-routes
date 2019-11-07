import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Card.css';

const Card = ({ _id, name, photoUrl }) => {
  return (
    <Link to={`/Details/${_id}`} className={styles.Card}>
      <div >
        <figure>
          <img src={photoUrl} />
          <figcaption>{name}</figcaption>
        </figure>
      </div>
    </Link>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  photoUrl: PropTypes.string
};

export default Card;

