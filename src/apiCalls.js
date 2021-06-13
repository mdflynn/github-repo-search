export const searchGitHubApi = async (url) => {
  const searchResults = await fetch(`${url}`);
  return searchResults;
};

// single repo criteria => GET/repos/:owner{login}/:repo(name)
// https://api.github.com/repos/mdflynn/slapjack

// example search results for "tetris in javascript"
// query https://api.github.com/search/repositories?q=tetris+game+language:javascript&sort=stars&order=desc

const noResults = {
  total_count: 0,
  incomplete_results: false,
  items: [],
};

const apiResults = {
  total_count: 123,
  incomplete_results: false,
  items: [
    {
      id: 95957216,
      node_id: "MDEwOlJlcG9zaXRvcnk5NTk1NzIxNg==",
      name: "tetris",
      full_name: "osnr/tetris",
      private: false,
      owner: {
        login: "osnr",
        id: 96857,
        node_id: "MDQ6VXNlcjk2ODU3",
        avatar_url: "https://avatars.githubusercontent.com/u/96857?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/osnr",
        html_url: "https://github.com/osnr",
        followers_url: "https://api.github.com/users/osnr/followers",
        following_url:
          "https://api.github.com/users/osnr/following{/other_user}",
        gists_url: "https://api.github.com/users/osnr/gists{/gist_id}",
        starred_url: "https://api.github.com/users/osnr/starred{/owner}{/repo}",
        subscriptions_url: "https://api.github.com/users/osnr/subscriptions",
        organizations_url: "https://api.github.com/users/osnr/orgs",
        repos_url: "https://api.github.com/users/osnr/repos",
        events_url: "https://api.github.com/users/osnr/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/osnr/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/osnr/tetris",
      description: ":memo: Disassembly of Tetris for Game Boy.",
      fork: false,
      url: "https://api.github.com/repos/osnr/tetris",
      forks_url: "https://api.github.com/repos/osnr/tetris/forks",
      keys_url: "https://api.github.com/repos/osnr/tetris/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/osnr/tetris/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/osnr/tetris/teams",
      hooks_url: "https://api.github.com/repos/osnr/tetris/hooks",
      issue_events_url:
        "https://api.github.com/repos/osnr/tetris/issues/events{/number}",
      events_url: "https://api.github.com/repos/osnr/tetris/events",
      assignees_url:
        "https://api.github.com/repos/osnr/tetris/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/osnr/tetris/branches{/branch}",
      tags_url: "https://api.github.com/repos/osnr/tetris/tags",
      blobs_url: "https://api.github.com/repos/osnr/tetris/git/blobs{/sha}",
      git_tags_url: "https://api.github.com/repos/osnr/tetris/git/tags{/sha}",
      git_refs_url: "https://api.github.com/repos/osnr/tetris/git/refs{/sha}",
      trees_url: "https://api.github.com/repos/osnr/tetris/git/trees{/sha}",
      statuses_url: "https://api.github.com/repos/osnr/tetris/statuses/{sha}",
      languages_url: "https://api.github.com/repos/osnr/tetris/languages",
      stargazers_url: "https://api.github.com/repos/osnr/tetris/stargazers",
      contributors_url: "https://api.github.com/repos/osnr/tetris/contributors",
      subscribers_url: "https://api.github.com/repos/osnr/tetris/subscribers",
      subscription_url: "https://api.github.com/repos/osnr/tetris/subscription",
      commits_url: "https://api.github.com/repos/osnr/tetris/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/osnr/tetris/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/osnr/tetris/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/osnr/tetris/issues/comments{/number}",
      contents_url: "https://api.github.com/repos/osnr/tetris/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/osnr/tetris/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/osnr/tetris/merges",
      archive_url:
        "https://api.github.com/repos/osnr/tetris/{archive_format}{/ref}",
      downloads_url: "https://api.github.com/repos/osnr/tetris/downloads",
      issues_url: "https://api.github.com/repos/osnr/tetris/issues{/number}",
      pulls_url: "https://api.github.com/repos/osnr/tetris/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/osnr/tetris/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/osnr/tetris/notifications{?since,all,participating}",
      labels_url: "https://api.github.com/repos/osnr/tetris/labels{/name}",
      releases_url: "https://api.github.com/repos/osnr/tetris/releases{/id}",
      deployments_url: "https://api.github.com/repos/osnr/tetris/deployments",
      created_at: "2017-07-01T10:20:02Z",
      updated_at: "2021-05-06T01:19:48Z",
      pushed_at: "2017-07-01T10:20:15Z",
      git_url: "git://github.com/osnr/tetris.git",
      ssh_url: "git@github.com:osnr/tetris.git",
      clone_url: "https://github.com/osnr/tetris.git",
      svn_url: "https://github.com/osnr/tetris",
      homepage: "",
      size: 282,
      stargazers_count: 57,
      watchers_count: 57,
      language: "Assembly",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      forks_count: 10,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      forks: 10,
      open_issues: 0,
      watchers: 57,
      default_branch: "master",
      score: 1.0,
    },
  ],
};
