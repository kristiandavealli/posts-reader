
import { Button } from "@/components/ui/button";
import { usePosts } from "../posts.hooks";
import { PostRow, PostRowSkeleton } from "./Post";

export function PostList() {
  const { data, error, isPending, isError, refetch } = usePosts();

  if (isPending) {
    return (
      <div className="grid gap-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <PostRowSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="space-y-3 rounded-lg border p-6 text-center">
        <p className="font-medium">Unable to load posts.</p>
        <p className="text-sm text-muted-foreground">{error.message}</p>
        <Button onClick={() => refetch()}>Try again</Button>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <p className="rounded-lg border p-6 text-center text-muted-foreground">
        No posts found.
      </p>
    );
  }

  return (
    <div className="grid gap-4">
      {data.map((post) => (
        <PostRow key={post.id} post={post} />
      ))}
    </div>
  );
}
