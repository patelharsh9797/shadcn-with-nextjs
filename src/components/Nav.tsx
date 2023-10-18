import Link from "next/link";
import { ModeToggle } from "@/components/ui/toggle-mode";
import { buttonVariants } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="max-w-4xl mx-auto px-4 py-8">
      <nav>
        <ul className={"flex justify-between gap-4"}>
          <li>
            <Link href={"/"} className={"flex text-2xl font-bold uppercase"}>
              Shadcn_Next
            </Link>
          </li>
          <li className="flex items-center gap-4">
            <Link
              href="/editor"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              Editor
            </Link>
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}
