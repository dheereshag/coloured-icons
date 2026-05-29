import Link from "next/link";
import { pacifico } from "@/lib/fonts";
export const Logo: React.FC = () => (
  <Link
    className={`${pacifico.className} text-2xl lg:text-3xl hover:text-purple-600 transition-colors select-none rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2`}
    href="/"
  >
    Coloured Icons
  </Link>
);
