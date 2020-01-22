import * as React from 'react';
import defaultStyle from './Button.module.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Button = ({ size, color, bordered, children }) => {
  return (
    <button
      className={cn(
        defaultStyle.button,
        defaultStyle[size],
        bordered ? defaultStyle.bordered : null,
        defaultStyle[color]
      )}>
      {children}
    </button>
  );
};
Button.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  bordered: PropTypes.bool,
  children: PropTypes.element.isRequired,
};

Button.defaultProps = {
  size: 'small',
  color: 'primary',
  bordered: false,
  children: false,
};

export default Button;
