
import { PostRow, PostRowSkeleton } from "./Post";
import { usePosts } from "../posts.hooks";

export function PostList() {
  const { data, error, isPending, isError, refetch } = usePosts();

  if (isPending) {
    return (
      <div className="grid gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <PostRowSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="space-y-3 rounded-lg border p-6 text-center">
        <p className="font-medium">Unable to load posts.</p>
        <p className="text-sm text-muted-foreground">
          {error instanceof Error ? error.message : "Something went wrong."}
        </p>
        <button
          type="button"
          onClick={() => refetch()}
          className="text-sm font-medium underline underline-offset-4"
        >
          Try again
        </button>
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
