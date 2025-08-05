import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const StarUsOnGithubButton = () => {
  return (
    <Button asChild variant="outline" className="rounded-full mt-6">
      <Link
        href="https://github.com/dheereshagrwal/coloured-icons"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Star className="text-amber-500" fill="currentColor" />
        Star us on GitHub
      </Link>
    </Button>
  );
};

export default StarUsOnGithubButton;
