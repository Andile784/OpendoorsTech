import Link from "next/link";
import Image from "next/image";

const navItems = [
  { href: "/services", label: "Services" },
  { href: "/architecture", label: "Architecture" },
  { href: "/integrations", label: "Integrations" },
  { href: "/use-cases", label: "Use Cases" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container-max flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/cropped-logoOpen1-2.png"
            alt="OpendoorsTech logo"
            width={44}
            height={20}
            className="h-8 w-auto"
            priority
          />
          <span className="text-lg font-bold tracking-tight text-ink">OpendoorsTech</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/book" className="btn-primary text-xs sm:text-sm">
          Book a Consultation
        </Link>
      </div>

      <nav
        aria-label="Mobile primary"
        className="container-max flex gap-4 overflow-x-auto py-2 md:hidden"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="whitespace-nowrap text-sm font-medium text-slate-700"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
