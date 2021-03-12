import React, { useEffect, useState } from "react";
import RepositoryItem from "./RepositoryItem";
//style
import "../styles/repositories.scss";

//https://api.github.com/orgs/rocketseat/repos

interface Repository {
  id: number;
  description: string;
  html_url: string;
  name: string;
}

export default function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <div>
      <section className="repository-list">
        <h1>Repo List</h1>
        <ul>
          {repositories.map((repository) => (
            <RepositoryItem repository={repository} key={repository.id} />
          ))}
        </ul>
      </section>
    </div>
  );
}
