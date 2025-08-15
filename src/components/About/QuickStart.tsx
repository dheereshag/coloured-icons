import CdnInclude from "./CdnInclude";
import { CI_CSS_URL_LATEST, CI_CSS_URL_VERSION } from "@/constants/about";

export default function QuickStart() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">Quick Start</h2>

      <CdnInclude
        text="Include via CDN (another version):"
        url={CI_CSS_URL_VERSION}
      />
      <CdnInclude text="Include via CDN (latest):" url={CI_CSS_URL_LATEST} />
    </section>
  );
}
