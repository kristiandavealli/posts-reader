
import { isAxiosError } from "axios";
import { Link, useParams } from "react-router";
import { Button, buttonVariants } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { usePost } from "@/features/posts/posts.hooks";
import { gutter } from "@/lib/layout";

export default function PostDetailsScreen() {
  const { postId } = useParams();
  const id = Number(postId);
  const { data: post, error, isPending, isError, refetch } = usePost(id);

  if (isPending) {
    return (
      <main className="mt-12 space-y-8">
        <Skeleton className="h-10 w-3/4" />
        <Skeleton className="h-4 w-1/3" />
        <div className="space-y-3">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      </main>
    );
  }

  if (isError) {
    if (isAxiosError(error) && error.response?.status === 404) {
      return (
        <main className="mt-12 space-y-6">
          <p className="text-4xl font-semibold">404</p>
          <h1 className="text-2xl font-semibold">
            No post at this address
          </h1>
          <Link to="/" className={buttonVariants()}>
            Browse all posts
          </Link>
        </main>
      );
    }

    return (
      <main className="mt-12 space-y-4">
        <p className="font-medium">Unable to load this post.</p>
        <p className="text-sm text-muted-foreground">{error.message}</p>
        <Button onClick={() => refetch()}>Try again</Button>
      </main>
    );
  }

  if (!post) return null;

  return (
    <main className="mt-12 space-y-8">
      <div className={gutter}>
        <p className="text-sm text-muted-foreground">#{post.id}</p>
        <div className="space-y-4">
          <h1 className="font-reading text-4xl font-semibold tracking-tight">
            {post.title}
          </h1>
          <p className="text-sm text-muted-foreground">
            By User {post.userId}
          </p>
        </div>
      </div>

      <div className={`${gutter} border-t pt-8`}>
        <div />
        <article className="font-reading space-y-6 text-lg leading-8">
          <p>{post.body}</p>
        </article>
      </div>
    </main>
  );
}
