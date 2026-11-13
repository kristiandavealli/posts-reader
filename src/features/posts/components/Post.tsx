
import { Link } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type { Post } from "../posts.types";

type PostRowProps = {
  post: Post;
};

export function PostRow({ post }: PostRowProps) {
  return (
    <Card className="relative transition-colors hover:bg-muted/40">
      <CardHeader>
        <CardTitle className="text-lg">
          <Link
            to={`/posts/${post.id}`}
            className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {post.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="line-clamp-2 text-sm text-muted-foreground">
          {post.body}
        </p>
        <p className="mt-3 text-xs text-muted-foreground">
          Post #{post.id}
        </p>
      </CardContent>
    </Card>
  );
}

export function PostRowSkeleton() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-6 w-3/4" />
      </CardHeader>
      <CardContent className="space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-3 w-16" />
      </CardContent>
    </Card>
  );
}
