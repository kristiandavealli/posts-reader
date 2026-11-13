
import { Link, Outlet, useLocation } from "react-router";
import { ModeToggle } from "@/components/mode-toggle";

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="min-h-screen px-6 py-10 sm:px-10">
      <div className="mx-auto w-full max-w-2xl">
        <header className="flex items-center justify-between gap-5">
          {isHome ? (
            <span className="text-lg font-medium tracking-[-0.01em]">
              Posts
            </span>
          ) : (
            <Link
              to="/"
              className="text-lg font-medium tracking-[-0.01em] hover:underline"
            >
              All posts
            </Link>
          )}
          <ModeToggle />
        </header>

        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
