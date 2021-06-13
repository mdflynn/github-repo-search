export const searchGitHubApi = async (url) => {
  const searchResults = await fetch(`${url}`);
  return searchResults;
};