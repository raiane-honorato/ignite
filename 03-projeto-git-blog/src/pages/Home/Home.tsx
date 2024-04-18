import { RepositoriesSection } from "./components/RepositoriesSection/RepositoriesSection";
import { UserCard } from "./components/UserCard/UserCard";

export function Home() {
  return (
    <main>
      <UserCard />
      <RepositoriesSection />
    </main>
  );
}
