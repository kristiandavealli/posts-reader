import { PostList } from "@/features/posts/components/PostList";

export default function HomeScreen() {
  return (
    <main className="mt-12 space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-semibold tracking-tight">
          All Posts
        </h1>
        <p className="text-muted-foreground">
          Browse and read posts from around the world.
        </p>
      </div>

      <PostList />
    </main>
  );
}