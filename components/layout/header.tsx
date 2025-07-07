"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import GradientButton from "@/components/gradientButton";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";

// Navigation links array
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/#about" },
  { name: "Menu", href: "/menu" },
  { name: "Location", href: "/location" },
  { name: "Contact Us", href: "/contact" },
];

const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [show, setShow] = React.useState(true);
  const lastScrollY = React.useRef(0);
  const ticking = React.useRef(false);

  // Improved scroll handler to avoid flicker
  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (window.scrollY < 10) {
            setShow(true);
            lastScrollY.current = window.scrollY;
            ticking.current = false;
            return;
          }
          if (window.scrollY < lastScrollY.current) {
            setShow(true);
          } else if (window.scrollY > lastScrollY.current) {
            setShow(false);
          }
          lastScrollY.current = window.scrollY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Remove framer-motion: just use a regular header, hide/show with CSS
  return (
    <header
      className={`w-full sticky top-0 left-0 bg-white shadow-sm z-50 transition-all duration-400 ease-in-out ${
        show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-16 pointer-events-none"
      }`}
      style={{ willChange: "transform" }}
    >
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 py-2 min-h-[80px]">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center min-w-[80px] h-[64px]"
          tabIndex={0}
        >
          <Image
            src="/images/logo.png"
            alt="Milan Juice Logo"
            width={80}
            height={64}
            priority
          />
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-outfit text-base lg:text-lg leading-[23px] ${
                pathname === link.href ? "font-bold" : "font-normal"
              } text-black transition-colors`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        {/* Desktop Order Now */}
        <div className="hidden lg:block">
          <GradientButton>Order Now</GradientButton>
        </div>
        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className="focus:outline-none"
              >
                <Menu className="w-7 h-7" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] max-w-xs p-0">
              <SheetTitle></SheetTitle>
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between px-4 py-4 border-b">
                  <Link href="/" onClick={() => setOpen(false)}>
                    <Image
                      src="/images/logo.png"
                      alt="Milan Juice Logo"
                      width={60}
                      height={50}
                    />
                  </Link>
                </div>
                <nav className="flex flex-col gap-4 px-6 py-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`font-outfit text-base leading-[23px] ${
                        pathname === link.href
                          ? "font-bold"
                          : "font-normal"
                      } text-black`}
                      onClick={() => setOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <div className="mt-6">
                    <GradientButton>Order Now</GradientButton>
                  </div>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;