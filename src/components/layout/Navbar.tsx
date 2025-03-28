import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQs", href: "#faqs" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const isMobile = useIsMobile();

  const NavLinks = () => (
    <>
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          {item.label}
        </a>
      ))}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-8 flex items-center space-x-2">
        <svg width="50px" height="50px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="#000000">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier"> 
            <defs> 
              <style>{`.cls-1{fill:none;}.cls-2{fill:#1b5cf3;}.cls-3{fill:#f92115;}.cls-4{fill:#190d15;}`}</style> 
            </defs> 
            <g data-name="Layer 2" id="Layer_2"> 
              <g data-name="Layer 1" id="Layer_1-2"> 
                <rect className="cls-1" height="20" width="20"></rect> 
                <path className="cls-2" d="M17.88,18H6.81a.73.73,0,0,1-.73-.73V6.57A.73.73,0,0,1,6.4,6l5.53-3.83a.74.74,0,0,1,.83,0L18.29,6a.73.73,0,0,1,.32.6V17.29A.73.73,0,0,1,17.88,18Z"></path> 
                <circle className="cls-3" cx="5.86" cy="6.89" r="5"></circle> 
                <path className="cls-4" d="M10.86,6.89A4.93,4.93,0,0,0,9.68,3.7L6.4,6a.73.73,0,0,0-.32.6v5.3A5,5,0,0,0,10.86,6.89Z"></path> 
              </g> 
            </g> 
          </g>
        </svg>
          <span className="font-bold text-xl">PropTech</span>
        </Link>

        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="ml-auto">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-4">
              <NavLinks />
              <button className="px-6 py-3 bg-blue-700 hover:bg-blue-600 border border-white/30 text-white font-semibold rounded-lg transition duration-200">
              Get Started
            </button>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="flex items-center space-x-6 ml-6 flex-1">
            <NavLinks />
          </nav>
        )}
          <button className="px-6 py-3 hidden md:flex bg-blue-700 hover:bg-blue-600 border border-white/30 text-white font-semibold rounded-lg transition duration-200">
              Get Started
            </button>
        <div className={`${isMobile ? 'mr-2' : 'ml-auto'}`}>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}