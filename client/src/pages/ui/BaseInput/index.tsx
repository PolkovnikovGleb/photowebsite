import React, { InputHTMLAttributes } from 'react';
import s from './styles.module.scss';

type IBaseInput = {
  label?: string
} & InputHTMLAttributes<HTMLInputElement>;

function BaseInput(props: IBaseInput): React.JSX.Element {
  const {
    name,
    type,
    className,
    onChange,
    ...attr
  } = props;

  return (
    <fieldset className={s.baseInput}>
      <label
        className={s.baseInput__label}
        htmlFor={name}
      >
        { attr.label ?? name }
      </label>
      <input
        className={s.baseInput__input}
        placeholder={name}
        type="text"
        id="email"
        onChange={onChange}
      />
    </fieldset>
  );
}

export default BaseInput;
