import { api } from "../lib/axios";

function getUser(userName: string) {
  return api.get(`/users/${userName}`);
}

function getUserRepos(userName: string, searchTerms: string) {
  return api.get(`/search/repositories`, {
    params: { q: `${searchTerms}%20user:${userName}` },
  });
}

function getRepoDetails(userName: string, repoName: string) {
  return api.get(`/repos/${userName}/${repoName}`);
}

export const GithubServices = { getRepoDetails, getUser, getUserRepos };
