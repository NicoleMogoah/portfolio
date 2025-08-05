// src/services/github.js
export const fetchGithubRepos = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  if (!response.ok) throw new Error("Failed to fetch repositories");
  const data = await response.json();

  // Optional: filter out forks and sort by most stars
  return data
    .filter(repo => !repo.fork)
    .sort((a, b) => b.stargazers_count - a.stargazers_count);
};

