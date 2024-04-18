import { useEffect, useState } from "react";
import { GIT_USER_NAME } from "../../../../domains/gitValues";
import { GithubServices } from "../../../../services/githubServices";

export interface RepoInfo {
  name: string;
  description: string | null;
  language: string;
  created_at: string;
}

interface RepositoryInfoState {
  items: Array<RepoInfo>;
  totalCount: number;
  reposIsLoading: boolean;
  reposIsError: boolean;
  searchTerms: string;
}

const repoInitialState: RepositoryInfoState = {
  items: [],
  totalCount: 0,
  reposIsLoading: false,
  reposIsError: false,
  searchTerms: "",
};

export function useGetRepositoriesInformation() {
  const [repositoryInfo, setRepositoryInfo] =
    useState<RepositoryInfoState>(repoInitialState);

  async function getRepositoryInfo(searchTerms: string) {
    try {
      setRepositoryInfo((state) => ({
        ...state,
        userIsLoading: true,
        userIsError: false,
      }));
      const repositoryInfoResponse = await GithubServices.getUserRepos(
        GIT_USER_NAME,
        searchTerms
      );

      setRepositoryInfo({
        searchTerms,
        items: repositoryInfoResponse.data.items,
        totalCount: repositoryInfoResponse.data.total_count,
        reposIsLoading: false,
        reposIsError: false,
      });
    } catch (e) {
      setRepositoryInfo((state) => ({
        ...state,
        reposIsLoading: false,
        reposIsError: true,
      }));
    }
  }

  useEffect(() => {
    getRepositoryInfo(repoInitialState.searchTerms);
  }, []);

  function onChangeSearchTemrs(searchTerms: string) {
    getRepositoryInfo(searchTerms);
  }

  return { repositoryInfo, onChangeSearchTemrs };
}
