interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical'
  className?: string
}

export function Separator({
  orientation = 'horizontal',
  className = '',
}: SeparatorProps) {
  return (
    <div
      role="separator"
      aria-orientation={orientation}
      className={`shrink-0 bg-epc-navy/20 ${orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]'} ${className}`}
    />
  )
}
