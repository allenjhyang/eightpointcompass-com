import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger, SheetClose } from './ui/sheet'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navLinks = [
    { name: 'What I Do', href: '#what-i-do' },
    { name: 'About', href: '#about' },
    { name: 'Writing', href: '#writing' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#F7F6F3]/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'}`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between max-w-6xl">
        <a
          href="#"
          onClick={(e) => handleNavClick(e, '#top')}
          className="flex items-center gap-2.5 font-headings text-xl md:text-2xl font-semibold text-epc-navy tracking-tight"
        >
          <img
            src="https://cdn.magicpatterns.com/uploads/nasu6ovqNbifrZ89QkM8SW/EPC_Final_logo_black_(1).png"
            alt="Eight Point Compass logo"
            className="h-7 md:h-8 w-auto"
          />
          Eight Point Compass
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-body text-sm text-epc-navy font-medium hover:text-epc-gold transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-epc-gold transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 text-epc-navy hover:text-epc-gold transition-colors">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] bg-epc-bg border-l-0"
            >
              <nav className="flex flex-col space-y-8 mt-12">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="font-body text-xl text-epc-navy font-medium hover:text-epc-gold transition-colors"
                    >
                      {link.name}
                    </a>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
