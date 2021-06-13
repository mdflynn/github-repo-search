// creates url based on user conditions for sort and filter
export const createSortFilterUrl = (selection, userUrl) => {
  let updatedUrl;

  switch (selection) {
    case "best-match":
      updatedUrl = userUrl;
      break;
    case "stars":
      updatedUrl = `${userUrl}&sort=stars&order=desc`;
      break;
    default:
      updatedUrl = `${userUrl}+language:${selection}`;
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