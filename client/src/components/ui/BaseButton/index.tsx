import React, { ButtonHTMLAttributes } from 'react'
import s from './styles.module.scss'

function BaseButton (props: ButtonHTMLAttributes<HTMLButtonElement>): React.JSX.Element {
  const {
    children,
    className,
    type = 'button',
    onClick,
    ...attr
  } = props

  return (
    <button
      type={type}
      className={`${s.baseButton} ${className ?? ''}`}
      onClick={onClick}
      {...attr}
    >
      {children}
    </button>
  )
}

export default BaseButton
