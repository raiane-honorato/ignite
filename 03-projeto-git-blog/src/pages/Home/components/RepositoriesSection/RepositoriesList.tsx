import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { NavLink } from "react-router-dom";
import { ListContainer } from "./RepositoriesList.styles";
import { RepoInfo } from "./useGetRepositoriesInformation";

export function RepositoriesList({
  repositoryList,
}: {
  repositoryList: Array<RepoInfo>;
}) {
  function handleCardClick(repoName: string) {
    const linkElement = document.getElementById(`link-${repoName}`);

    linkElement?.click();
  }

  return (
    <ListContainer>
      {repositoryList.map((repository) => (
        <li
          key={repository.name}
          onClick={() => handleCardClick(repository.name)}
        >
          <header>
            <NavLink
              to={`/repo/${repository.name}`}
              id={`link-${repository.name}`}
            >
              {repository.name}
            </NavLink>
            <span>
              {formatDistanceToNow(repository.created_at, {
                addSuffix: true,
                locale: ptBR,
              })}
            </span>
          </header>
          <main>
            <p>{repository.language}</p>
            <p>{repository.description || ""}</p>
          </main>
        </li>
      ))}
    </ListContainer>
  );
}
