import React from 'react';
import PropTypes from 'prop-types';

import NavigationItem from './NavigationItem/NavigationItem';
import classes from './Navigation.module.scss'

function Navigation({
    items,
    className,
    itemClassName,
    itemActiveClassName
}) {
    return (
        <nav
            className={`${classes.Navigation} ${className}`}
        >
            {items.map(({
                id,
                link,
                label,
                onClick
            }) => (
                <NavigationItem
                    key={id || link}
                    className={itemClassName}
                    activeClassName={itemActiveClassName}
                    link={link}
                    onClick={onClick}
                >
                    {label}
                </NavigationItem>
            ))}
        </nav>
    );
}

Navigation.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            link: PropTypes.string,
            label: PropTypes.string,
            onClick: PropTypes.func
        })
    ).isRequired,

    className: PropTypes.string,
    itemClassName: PropTypes.string,
    itemActiveClassName: PropTypes.string
};

Navigation.defaultProps = {
    items: [],
    className: ''
};

export default Navigation;