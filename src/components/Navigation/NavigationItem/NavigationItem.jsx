import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function NavigationItem({
    activeClassName,
    className,
    children,
    exact,
    link,
    onClick
}) {

    if (link.length > 0) {
        return (
            <NavLink
                to={link}
                exact={exact}
                className={className}
                activeClassName={activeClassName}
            >
                {children}
            </NavLink>
        );
    }

    return (
        <button
            className={className}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

NavigationItem.propTypes = {
    children: PropTypes.node.isRequired,
    link: PropTypes.string.isRequired,
    exact: PropTypes.bool,
    activeClassName: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func
};

NavigationItem.defaultProps = {
    exact: false,
    className: '',
    activeClassName: '',
    link: '',
    onClick: () => {}
};

export default NavigationItem;