"use client";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="flex flex-row justify-center items-center bg-indigo-950 p-8">
      <div className="mx-15">
          <Link href="/"
                className="text-2xl text-bold text-white hover:text-sky-300"
           >
            🪧  View noticeboard
          </Link>
        </div>
        <div className="mx-15">
          <Link href="/newpost"
                className="text-2xl text-bold text-white hover:text-sky-300"
           >
           Pin a new post  📌
          </Link>
        </div>
    </nav>
  );
};

export default Navigation;