import React from 'react';
import PropTypes from 'prop-types';
import s from '../Section/Section.module.css';

const Section = ({ children }) => <div className={s.section}>{children}</div>;

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
