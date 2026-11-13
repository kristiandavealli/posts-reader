
import { Link, useLocation } from "react-router";
import { buttonVariants } from "@/components/ui/button";
import { gutter } from "@/lib/layout";

export default function NotFoundScreen() {
  const location = useLocation();

  return (
    <main className="mt-12 space-y-8">
      <div className={gutter}>
        <p className="text-4xl font-semibold">404</p>
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold">
            Page not found
          </h1>
          <p className="text-sm text-muted-foreground">
            No page exists at{" "}
            <code className="rounded bg-muted px-1 py-0.5">
              {location.pathname}
            </code>
          </p>
          <Link to="/" className={buttonVariants()}>
            Browse all posts
          </Link>
        </div>
      </div>
    </main>
  );
}
