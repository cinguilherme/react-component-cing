import React from 'react';
import PropTypes from 'prop-types';
import { headerStyle, containerStyle, titleStyle, subtitleStyle, defaultProps } from './Styles';

const FullHeader = ({ title, subtitle, bgColor, textColor, font, bgImg }) => {
    const headerStylesCombined = {
        ...headerStyle,
        backgroundColor: bgColor,
        color: textColor,
        fontFamily: font,
        backgroundImage: `url(${bgImg})`,
    };

    const component = (
        <header style={headerStylesCombined}>
            <div style={containerStyle}>
                {title && <h1 style={titleStyle}>{title}</h1>}
                {subtitle && <h2 style={subtitleStyle}>{subtitle}</h2>}
            </div>
        </header>
    );

    return component;
};

const typesRules = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    bgImg: PropTypes.string,
};

FullHeader.propTypes = typesRules;
FullHeader.defaultProps = defaultProps;

export default FullHeader;
