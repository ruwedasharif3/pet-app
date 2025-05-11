"use client";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="sticky top-0 bg-indigo-950 p-5 z-10 w-full shadow-lg">
      <div className="flex flex-row justify-center items-center">
        <div>
          <Link
            href="/"
            className="flex flex-row text-2xl text-white hover:text-orange-100 mx-10 md:text-md mx-4"
          >
            🪧 <span className="hidden sm:block">View Noticeboard</span>
          </Link>
        </div>
        <div>
          <Link
            href="/newpost"
            className="flex flex-row text-2xl text-white hover:text-orange-100 mx-10 md:text-md mx-4"
          >
            <span className="hidden sm:block">Pin a New Post</span> 📌
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
