import React, { cloneElement, isValidElement } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'link'
  size?: 'default' | 'sm' | 'lg' | 'icon'
  asChild?: boolean
  children: React.ReactNode
}

export function Button({
  variant = 'default',
  size = 'default',
  asChild = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const sizeClasses: Record<string, string> = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 px-3 text-sm',
    lg: 'h-12 px-8 text-base',
    icon: 'h-10 w-10',
  }

  const variantClasses: Record<string, string> = {
    default: 'bg-epc-navy text-white hover:bg-epc-navy/90',
    outline:
      'border border-epc-navy text-epc-navy hover:bg-epc-navy hover:text-white',
    ghost: 'hover:bg-epc-navy/10 text-epc-navy',
    link: 'text-epc-navy underline-offset-4 hover:underline',
  }

  const baseClasses =
    'inline-flex items-center justify-center font-body font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-epc-navy focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

  const combinedClassName = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (asChild && isValidElement(children)) {
    return cloneElement(children as React.ReactElement<Record<string, unknown>>, {
      className:
        `${combinedClassName} ${(children as React.ReactElement<Record<string, unknown>>).props.className || ''}`.trim(),
    })
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  )
}
