import { UserCardSection } from "./UserCard.styles";
import { useGetUserInformation } from "./useGetUserInformation";

// const mockUserInfo = {
//   "login": "raiane-honorato",
//   "id": 71676577,
//   "node_id": "MDQ6VXNlcjcxNjc2NTc3",
//   "avatar_url": "https://avatars.githubusercontent.com/u/71676577?v=4",
//   "gravatar_id": "",
//   "url": "https://api.github.com/users/raiane-honorato",
//   "html_url": "https://github.com/raiane-honorato",
//   "followers_url": "https://api.github.com/users/raiane-honorato/followers",
//   "following_url": "https://api.github.com/users/raiane-honorato/following{/other_user}",
//   "gists_url": "https://api.github.com/users/raiane-honorato/gists{/gist_id}",
//   "starred_url": "https://api.github.com/users/raiane-honorato/starred{/owner}{/repo}",
//   "subscriptions_url": "https://api.github.com/users/raiane-honorato/subscriptions",
//   "organizations_url": "https://api.github.com/users/raiane-honorato/orgs",
//   "repos_url": "https://api.github.com/users/raiane-honorato/repos",
//   "events_url": "https://api.github.com/users/raiane-honorato/events{/privacy}",
//   "received_events_url": "https://api.github.com/users/raiane-honorato/received_events",
//   "type": "User",
//   "site_admin": false,
//   "name": "Raiane Honorato",
//   "company": "Instituto Eldorado",
//   "blog": "",
//   "location": "São Paulo",
//   "email": null,
//   "hireable": null,
//   "bio": "Front-end developer",
//   "twitter_username": null,
//   "public_repos": 20,
//   "public_gists": 0,
//   "followers": 22,
//   "following": 12,
//   "created_at": "2020-09-21T23:49:46Z",
//   "updated_at": "2024-04-17T14:37:37Z"
// }

export function UserCard() {
  const userInfo = useGetUserInformation();

  function loadCardInfo() {
    if (userInfo.userIsLoading) {
      return <p>Loading...</p>;
    }

    if (userInfo.userIsError) {
      return <p>Error...</p>;
    }

    return (
      <>
        <img src={userInfo.avatar_url} />

        <div className="user-text-info-container">
          <h2>{userInfo.name}</h2>
          <p>{userInfo.bio}</p>
          <a href={userInfo.url}>github</a>

          <div className="span-info">
            <span>{userInfo.login}</span>
            <span>{userInfo.company}</span>
            <span>{`${userInfo.followers} seguidores`}</span>
          </div>
        </div>
      </>
    );
  }

  return <UserCardSection>{loadCardInfo()}</UserCardSection>;
}
