'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { LinkProps } from 'next/link'

interface Props extends LinkProps {
  children: React.ReactNode
  activeClassName: string
  className: string
}

const ActiveLink = ({ children, activeClassName, className, ...props }: Props) => {
  const pathname = usePathname()
  const childClassName = className || ''
  const customClassName =
    pathname === props.href ? `${childClassName} ${activeClassName}`.trim() : childClassName

  const child = React.createElement(
    'a',
    {
      className: customClassName || null,
      ...props,
    },
    children,
  )

  return child
}

export default ActiveLink
