import React, {
  useCallback,
  useEffect,
  useState,
  createContext,
  useContext,
  cloneElement,
  isValidElement,
} from 'react'

interface SheetContextType {
  open: boolean
  setOpen: (open: boolean) => void
}

const SheetContext = createContext<SheetContextType>({
  open: false,
  setOpen: () => {},
})

export function Sheet({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <SheetContext.Provider value={{ open, setOpen }}>
      {children}
    </SheetContext.Provider>
  )
}

export function SheetTrigger({
  children,
  asChild = false,
}: {
  children: React.ReactNode
  asChild?: boolean
}) {
  const { setOpen } = useContext(SheetContext)
  const handleClick = useCallback(() => setOpen(true), [setOpen])

  if (asChild && isValidElement(children)) {
    return cloneElement(children as React.ReactElement<Record<string, unknown>>, {
      onClick: (e: React.MouseEvent) => {
        handleClick()
        const childOnClick = (children as React.ReactElement<Record<string, unknown>>).props.onClick
        if (typeof childOnClick === 'function') (childOnClick as (e: React.MouseEvent) => void)(e)
      },
    })
  }

  return (
    <button onClick={handleClick} type="button">
      {children}
    </button>
  )
}

export function SheetContent({
  children,
  side = 'right',
  className = '',
}: {
  children: React.ReactNode
  side?: 'left' | 'right'
  className?: string
}) {
  const { open, setOpen } = useContext(SheetContext)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    if (open) {
      document.addEventListener('keydown', handleEscape)
    }
    return () => document.removeEventListener('keydown', handleEscape)
  }, [open, setOpen])

  if (!open) return null

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        className={`fixed inset-y-0 z-50 ${side === 'right' ? 'right-0' : 'left-0'} flex flex-col shadow-2xl transition-transform duration-300 ${className}`}
        style={{
          animation: `${side === 'right' ? 'slideInRight' : 'slideInLeft'} 0.3s ease-out`,
        }}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 p-2 text-epc-navy/60 hover:text-epc-navy transition-colors"
          aria-label="Close menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        {children}
      </div>

      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes slideInLeft {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </>
  )
}

export function SheetClose({
  children,
  asChild = false,
}: {
  children: React.ReactNode
  asChild?: boolean
}) {
  const { setOpen } = useContext(SheetContext)
  const handleClick = useCallback(() => setOpen(false), [setOpen])

  if (asChild && isValidElement(children)) {
    return cloneElement(children as React.ReactElement<Record<string, unknown>>, {
      onClick: (e: React.MouseEvent) => {
        const childOnClick = (children as React.ReactElement<Record<string, unknown>>).props.onClick
        if (typeof childOnClick === 'function') (childOnClick as (e: React.MouseEvent) => void)(e)
        handleClick()
      },
    })
  }

  return (
    <button onClick={handleClick} type="button">
      {children}
    </button>
  )
}
