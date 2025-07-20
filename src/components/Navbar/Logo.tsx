import Link from "next/link";
import { pacifico } from "@/lib/fonts";
const Logo: React.FC = () => (
  <Link
    className={`${pacifico.className} text-2xl lg:text-3xl hover:text-gray-600 transition-colors`}
    href="/"
  >
    Coloured Icons
  </Link>
);

export default Logo;
