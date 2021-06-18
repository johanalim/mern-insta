import React from 'react';
import PropTypes from 'prop-types';
import  classname  from "classnames";

const Header = ({className}) => {
    const classNames = classname('m-header',className);
    return (
        <div className={classNames}>
            <div className="container">
                <div className="header-wrapper">
                    <img alt=""/>Logo
                    <div className="header-info">
                        <h3>Hello</h3>
                    </div>
                    <div className="header-center">
                        <ul className="header-list">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                            <li>6</li>
                            <li>7</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

Header.propTypes = {
    className: propTypes.string,
};
Header.defaultProps = {
    className: '',
};


export default Header;