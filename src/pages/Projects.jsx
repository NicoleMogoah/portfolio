import React, { useEffect, useState } from 'react';
import { fetchGithubRepos } from '../services/github';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGithubRepos("NicoleMogoah") // ✅ replace with your GitHub username
      .then(setRepos)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-6 md:p-10">
      <h1 className="text-3xl font-bold mb-6 text-center">GitHub Projects</h1>

      {loading ? (
        <p className="text-center">Loading projects...</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="bg-white rounded-xl shadow-md p-5 border hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-1">{repo.name}</h2>
              <p className="text-gray-600 mb-3">
                {repo.description || "No description available."}
              </p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>⭐ {repo.stargazers_count}</span>
                <span>🍴 {repo.forks_count}</span>
              </div>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="block mt-4 text-blue-600 hover:underline"
              >
                View on GitHub
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
