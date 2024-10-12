import React from 'react'

const Button = ({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'white',
    ClassName = '',
    ...props
}) => {
  return (
    <button className={` ${bgColor} ${ClassName} ${textColor}`} {...props} > {children} </button>
  )
}

export default Button