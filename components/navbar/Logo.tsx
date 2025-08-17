import Link from "next/link";
import { pacifico } from "@/lib/fonts";
export const Logo: React.FC = () => (
  <Link
    className={`${pacifico.className} text-2xl lg:text-3xl hover:text-gray-600 transition-colors select-none`}
    href="/"
  >
    Coloured Icons
  </Link>
);
