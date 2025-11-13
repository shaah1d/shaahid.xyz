"use client";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { navbarConfig } from "@/config/navbar.config";
import { useRef, useEffect } from "react";

export default function Navbar() {
  const popRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/pop.mp3");
    audio.volume = 0.2;
    popRef.current = audio;
  }, []);

  const playPop = () => {
    popRef.current?.play().catch(() => {});
  };

  return (
    <div
      className="sticky top-0 inline-flex items-center text-sm rounded-lg z-50"
      onMouseEnter={playPop}
      onClick={playPop}
    >
      {navbarConfig.map((item, index) => (
        <NavItem
          key={index}
          url={item.url}
          className={cn(
            index === 0 && "rounded-l-lg border-l-[0.5px]",
            index === navbarConfig.length - 1 && "rounded-r-lg border-r-[0.5px]"
          )}
        >
          {item.title}
        </NavItem>
      ))}
    </div>
  );
}

type NavItemProps = {
  children: React.ReactNode;
  url: string;
  className?: string;
};

const NavItem = ({ children, url, className }: NavItemProps) => {
  const pathname = usePathname();
  const active =
    pathname === url || (pathname.includes(url) && url !== "/");

  return (
    <Link href={url}>
      <div
        className={cn(
          "p-2 min-w-16 lg:min-w-24 text-center hover:bg-secondary cursor-pointer border-t-[0.5px] bg-background transition-all duration-100 ease-out",
          active ? "current hover:bg-background" : "nav-item",
          className
        )}
      >
        {children}
      </div>
    </Link>
  );
};
