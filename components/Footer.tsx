import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-panel">
      <div className="container-max grid gap-10 py-12 md:grid-cols-3">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <Image
              src="/cropped-logoOpen1-2.png"
              alt="OpendoorsTech logo"
              width={44}
              height={20}
              className="h-7 w-auto"
            />
            <p className="text-base font-semibold text-ink">OpendoorsTech</p>
          </div>
          <p className="text-lg font-semibold text-ink">
            AI integration architecture and agentic workflow automation built for production.
          </p>
          <p className="mt-3 text-sm text-muted">
            HubSpot-first integrations across APIs, webhooks, microservices, and AWS-native event
            pipelines.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink">Quick Links</p>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            <li>
              <Link href="/services" className="hover:text-ink">
                Services
              </Link>
            </li>
            <li>
              <Link href="/architecture" className="hover:text-ink">
                Architecture
              </Link>
            </li>
            <li>
              <Link href="/integrations/hubspot" className="hover:text-ink">
                HubSpot Integrations
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-ink">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink">Contact</p>
          <p className="mt-3 text-sm text-muted">
            sales@opendoorstech.co.za
            <br />
            +27 79 089 9186
            <br />
            Johannesburg, South Africa
          </p>
          <div className="mt-4 flex gap-3">
            <Link href="/contact?intent=audit" className="btn-secondary text-xs sm:text-sm">
              Request an Audit
            </Link>
            <Link href="/book" className="btn-primary text-xs sm:text-sm">
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
