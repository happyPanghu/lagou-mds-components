
import React from 'react';
import classNames from 'classnames';
import PureRenderMixin from 'react/lib/ReactComponentWithPureRenderMixin';
import Checkbox from '../Checkbox';

export default class Radio extends React.Component {
    static defaultProps = {
        prefixCls: 'radio'
    };
    shouldComponentUpdate(...args) {
        return PureRenderMixin.shouldComponentUpdate.apply(this, args);
    }
    handleChange(e) {
        if (!('checked' in this.props)) {
            this.setState({ checked: e.target.checked });
        }
        this.props.onChange({
            target: {
                ...this.props,
                checked: e.target.checked,
            },
            stopPropagation() {
                e.stopPropagation();
            },
            preventDefault() {
                e.preventDefault();
            },
        });
    }
    render() {
        const {
            prefixCls,
            children,
            checked,
            disabled,
            className,
            style
        } = this.props;
        const wrapperClassString = classNames({
            [`${prefixCls}-wrapper`]: true,
            [`${prefixCls}-wrapper-checked`]: checked,
            [`${prefixCls}-wrapper-disabled`]: disabled,
            [className]: !!className
        });
        const classString = classNames({
            [`${prefixCls}`]: true,
            [`${prefixCls}-checked`]: checked,
            [`${prefixCls}-disabled`]: disabled
        });
        return (
            <label
                className={wrapperClassString}
                style={style}
            >
                <span className={classString}>
                    <span className={`${prefixCls}-inner`} />
                    <input
                        type='radio'
                        disabled={disabled}
                        className={`${prefixCls}-input`}
                        checked={!!checked}
                        onClick={this.props.onClick}
                        onChange={this.handleChange.bind(this)}
                    />
                </span>
                {children ? <span className='radio-text'>{children}</span> : null}
            </label>
        );
    }
}
