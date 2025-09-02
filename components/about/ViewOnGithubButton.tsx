import { SiGithub } from "@icons-pack/react-simple-icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const ViewOnGithubButton = () => {
  return (
    <Button asChild>
      <Link
        href="https://github.com/dheereshag/coloured-icons"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2"
      >
        <SiGithub className="h-4 w-4" />
        View on GitHub
      </Link>
    </Button>
  );
};
