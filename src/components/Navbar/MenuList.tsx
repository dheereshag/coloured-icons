import Link from "next/link";

interface MenuListProps {
  className?: string;
  onClick?: () => void;
  activePathname?: string;
}

const MenuList: React.FC<MenuListProps> = ({ className, onClick, activePathname }) => {
  return (
    <ul className={className} onClick={onClick}>
      <li>
        <Link
          href="/"
          className={`text-gray-500 hover:text-gray-900 transition-colors ${activePathname === '/' ? 'text-gray-950' : ''}`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/about"
          className={`text-gray-500 hover:text-gray-900 transition-colors ${activePathname === '/about' ? 'text-gray-950' : ''}`}
        >
          About
        </Link>
      </li>
      <li>
        <a
          href="https://github.com/dheereshagrwal/coloured-icons/blob/master/README.md"
          target="_blank"
          className={`text-gray-500 hover:text-gray-900 transition-colors`}
        >
          Docs
        </a>
      </li>
    </ul>
  );
};

export default MenuList;
