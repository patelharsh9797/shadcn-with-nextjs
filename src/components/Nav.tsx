import Link from "next/link";

export default function Navbar() {
  return (
    <header className="max-w-4xl mx-auto p-4">
      <nav>
        <ul className={"flex justify-between gap-4"}>
          <li>
            <Link href={"/"} className={"flex text-2xl font-bold uppercase"}>
              Shadcn_Next
            </Link>
          </li>
          <li>Toggle Button</li>
        </ul>
      </nav>
    </header>
  );
}
