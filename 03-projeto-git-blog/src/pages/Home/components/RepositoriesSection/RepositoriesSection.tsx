import { RepositoriesList } from "./RepositoriesList";
import { RepositoriesSearch } from "./RepositoriesSearch";
import { useGetRepositoriesInformation } from "./useGetRepositoriesInformation";

export function RepositoriesSection() {
  const { repositoryInfo, onChangeSearchTemrs } =
    useGetRepositoriesInformation();
  console.log(repositoryInfo);

  function loadContent() {
    if (repositoryInfo.reposIsLoading) {
      return <span>Loading...</span>;
    }

    if (repositoryInfo.reposIsError) {
      return <span>Error</span>;
    }

    return (
      <div>
        <RepositoriesSearch
          onChangeSearchTerms={onChangeSearchTemrs}
          totalReposCount={repositoryInfo.totalCount}
        />
        <RepositoriesList repositoryList={repositoryInfo.items} />
      </div>
    );
  }

  console.log("repositoryInfo", repositoryInfo);
  return <section>{loadContent()}</section>;
}
