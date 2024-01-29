import s from './styles.module.scss';
import React, {InputHTMLAttributes} from 'react';

const BaseInput = (props: InputHTMLAttributes<HTMLInputElement> & {label?: string}): React.JSX.Element => {
  const {
    name,
    type,
    className,
    onChange,
    ...attr
  } = props

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
        type='text'
        id='email'
        onChange={onChange}
      />
    </fieldset>
  )
}

export default BaseInput;