import * as React from 'react';
import PropTypes from 'prop-types';

const Link = ({ className, href, children }) => {
  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

Link.propTypes = {
  href: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.element.isRequired,
};

Link.defaultProps = {
  children: false,
};

export default Link;
