import React from 'react';
import PropTypes from 'prop-types';
import s from '../ContactForm/ContactForm.module.css';

const Filter = ({ value, onChange }) => (
  <label className={s.label}>
    Find contacts by name
    <input type="text" className={s.input} value={value} onChange={onChange} />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Filter;
