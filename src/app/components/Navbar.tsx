import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

function Nabvar() {
  return (
    <nav className="fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-slate-800 text-gray-300">
      <Link
        className="uppercase font-bold text-md h-12 flex items-center"
        href="/"
      >
        Simplo Store
      </Link>
      <div className="flex items-center gap-8">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <button className="uppercase rounded-md border-gray-400 px-3 py-2">
            Fazer Login
          </button>
        </SignedOut>
      </div>
    </nav>
  );
}

export default Nabvar;
