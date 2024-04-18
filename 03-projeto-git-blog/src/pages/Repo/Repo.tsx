import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { NavLink } from "react-router-dom";
import { RepoDetailsSection } from "./Repo.styles";
import { useGetRepoDetails } from "./useGetRepoDetails";

export function Repo() {
  const repoDetails = useGetRepoDetails();
  console.log(repoDetails);

  if (repoDetails.repoInfoDetailIsLoading) {
    return <span>Loading...</span>;
  }

  if (repoDetails.repoInfoDetailIsError) {
    return <span>Error...</span>;
  }

  return (
    <RepoDetailsSection>
      <header>
        <div className="link-container">
          <NavLink to="/">Voltar</NavLink>
          <a href={repoDetails.html_url}>Ver no github</a>
        </div>

        <h2>{repoDetails.name}</h2>
        <div className="span-container">
          <span>{repoDetails.owner.login}</span>
          <span>
            {repoDetails.created_at &&
              formatDistanceToNow(repoDetails.created_at, {
                addSuffix: true,
                locale: ptBR,
              })}
          </span>
          <span>{`${repoDetails.subscribers_count} inscritos`}</span>
        </div>
      </header>

      <main>
        <p>{repoDetails.description}</p>
      </main>
    </RepoDetailsSection>
  );
}
