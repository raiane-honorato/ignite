import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GIT_USER_NAME } from "../../domains/gitValues";
import { GithubServices } from "../../services/githubServices";

interface RepoInfoDetail {
  name: string;
  owner: {
    login: string;
  };
  created_at: string;
  html_url: string;
  subscribers_count: string;
  description: string;
}

interface RepoInfoDetailState extends RepoInfoDetail {
  repoInfoDetailIsLoading: boolean;
  repoInfoDetailIsError: boolean;
}

const repoInfoDetailInitialState: RepoInfoDetailState = {
  repoInfoDetailIsError: false,
  repoInfoDetailIsLoading: false,
  name: "",
  owner: {
    login: "",
  },
  created_at: "",
  html_url: "",
  subscribers_count: "",
  description: "",
};

export function useGetRepoDetails() {
  const { repoName } = useParams();

  const [repoDetails, setRepoDetails] = useState<RepoInfoDetailState>(
    repoInfoDetailInitialState
  );

  async function getRepositoryInfo() {
    try {
      setRepoDetails((state) => ({
        ...state,
        userIsLoading: true,
        userIsError: false,
      }));

      const repositoryInfoDetailsResponse = await GithubServices.getRepoDetails(
        GIT_USER_NAME,
        repoName || ""
      );

      setRepoDetails({
        ...repositoryInfoDetailsResponse.data,
        reposIsLoading: false,
        reposIsError: false,
      });
    } catch (e) {
      setRepoDetails((state) => ({
        ...state,
        reposIsLoading: false,
        reposIsError: true,
      }));
    }
  }

  useEffect(() => {
    getRepositoryInfo();
  }, []);

  return repoDetails;
}
