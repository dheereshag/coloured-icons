export interface MenuItem {
  href: string;
  label: string;
  external?: boolean;
}

export const menuItems: MenuItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "https://github.com/dheereshag/coloured-icons/blob/master/README.md",
    label: "Docs",
    external: true,
  },
];

export default menuItems;
