
import '../index.less';
import classnames from 'classnames';
import React, { PropTypes } from 'react';

function fixControlledValue(value) {
    if (typeof value === 'undefined' || value === null) {
        return '';
    }
    return value;
}


export default class Input extends React.Component {
    static defaultProps = {
        prefixCls: 'input',
        type: 'text',
        defaultValue: '',
        disabled: false
    };

    static propTypes = {
        prefixCls: PropTypes.string,
        type: PropTypes.string,
        defaultValue: PropTypes.any,
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        disabled: PropTypes.bool,
        value: PropTypes.any,
        className: PropTypes.string,
        addonAfter: PropTypes.node,
        onPressEnter: PropTypes.func,
        onKeyDown: PropTypes.func
    };

    renderInputWrapper(children) {
        const props = this.props;
        const wrapperClassName = `${props.prefixCls}-group`;
        const addonClassName = `${wrapperClassName}-addon`;
        const addonAfter = props.addonAfter ? (
            <span className={addonClassName}>
                {props.addonAfter}
            </span>
        ) : null;
        const className = classnames({
            [`${props.prefixCls}-wrapper`]: true,
            [wrapperClassName]: addonAfter
        });
        return (
            <div className={className}>
                {children}
                {addonAfter}
            </div>
        );
    }

    handleKeyDown(e) {
        if (e.keyCode === 13) {
            this.props.onPressEnter && this.props.onPressEnter(e);
        }
        if (this.props.onKeyDown) {
            this.props.onKeyDown(e);
        }
    }

    focus() {
        this.refs.input.focus();
    }

    renderInput() {
        const props = this.props;
        const { prefixCls, addonAfter, onPressEnter, disabled, ...other } = this.props;
        const inputClassName = classnames({
            [`${prefixCls}`]: true,
            [`${props.className}`]: !!props.className,
            [`${prefixCls}-bottom-line`]: !!props.btmLine
        });
        // 主要修复 input 必需为controled ，uncontrolled 之一 ，而且value 和 defaultValue 只能有一个
        if ('value' in props) {
            other.value = fixControlledValue(props.value);
            delete other.defaultValue;
        }
        if (props.type === 'textarea') {
            console.warn('if you want use textarea,please use component <Textarea/>');
            return null;
        } else {
            let extend = {};
            disabled && (extend.disabled = disabled);
            return (
                <input
                    ref='input'
                    {...other}
                    {...extend}
                    className={inputClassName}
                    onKeyDown={this.handleKeyDown.bind(this)}
                />
            );
        }
    }

    render() {
        return this.renderInputWrapper(this.renderInput());
    }
}
