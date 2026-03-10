import Link from "next/link";
import { cn } from "@/lib/utils";

interface ActionLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function ActionLink({
  href,
  children,
  className,
}: ActionLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-2 px-5 py-2.5 bg-primary/10 text-primary rounded-full border border-primary/50 hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 cursor-pointer",
        className,
      )}
    >
      {children}
    </Link>
  );
}
