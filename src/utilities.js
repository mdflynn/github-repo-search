// creates url based on user conditions for sort and filter
export const createSortFilterUrl = (selection, userUrl, page) => {
  let updatedUrl;

  switch (selection) {
    case "best-match":
      updatedUrl = userUrl;
      break;
    case "stars":
      updatedUrl = `${userUrl}&sort=stars&order=desc&page=${page}`;
      break;
    default:
      updatedUrl = `${userUrl}+language:${selection}&page=${page}`;
  }

  return updatedUrl;
};

// creates url based on initial search or single repo
export const createUrl = (searchCriteria) => {
  let baseUrl = "";

  if (!searchCriteria.includes("github")) {
    baseUrl = searchCriteria.includes("/")
      ? "https://api.github.com/repos/"
      : "https://api.github.com/search/repositories?&q=";
  }

  return `${baseUrl}${searchCriteria}`;
};

export const cleanSearchResults = (results) => {
  return results.map((result) => {
    return {
      id: result.id,
      name: result.name,
      language: result.language,
      stargazers_count: result.stargazers_count,
      owner: {
        login: result.owner.login,
      },
    };
  });
};

export const cleanSingleRepo = (repo) => {
  return {
    id: repo.id,
    name: repo.name,
    language: repo.language,
    stargazers_count: repo.stargazers_count,
    description: repo.description,
    html_url: repo.html_url,
    owner: {
      login: repo.owner.login,
      avatar_url: repo.owner.avatar_url,
    },
  };
};
