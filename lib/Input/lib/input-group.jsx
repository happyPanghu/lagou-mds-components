
import React from 'react';
import classnames from 'classnames';

export default function inputGroup(props) {
    const className = classnames({ 'input-group': true, 'clearfix': true, [props.className]: !!props.className });
    return (
        <div
            className={className}
            style={props.style}
        >
            {props.children}
        </div>
    );
}

inputGroup.propTypes = {
    children: React.PropTypes.any,
};
