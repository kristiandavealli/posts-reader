
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";
import { Monitor, Moon, Sun } from "lucide-react";

function App() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex max-w-5xl items-center justify-between border-b px-6 py-4">
        <h1 className="text-2xl font-bold tracking-tight">Posts</h1>

        <DropdownMenu>
          <DropdownMenuTrigger
            render={<Button variant="outline" size="icon" />}
          >
            {theme === "light" ? (
              <Sun className="size-4" />
            ) : theme === "dark" ? (
              <Moon className="size-4" />
            ) : (
              <Monitor className="size-4" />
            )}
            <span className="sr-only">Change theme</span>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuRadioGroup
              value={theme}
              onValueChange={(value) => setTheme(value as "light" | "dark" | "system")}
            >
              <DropdownMenuRadioItem value="light">
                <Sun className="mr-2 size-4" />
                Light
              </DropdownMenuRadioItem>

              <DropdownMenuRadioItem value="dark">
                <Moon className="mr-2 size-4" />
                Dark
              </DropdownMenuRadioItem>

              <DropdownMenuRadioItem value="system">
                <Monitor className="mr-2 size-4" />
                System
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-10">
        <h2 className="text-3xl font-bold">Posts</h2>
      </main>
    </div>
  );
}

export default App;
