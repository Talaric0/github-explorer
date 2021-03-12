import React, { useEffect, useState } from "react";
import RepositoryItem from "./RepositoryItem";
//style
import "../styles/repositories.scss";

//https://api.github.com/orgs/rocketseat/repos

const repository = {
  name: "unform",
  description: "Forms in React",
  link: "https://github.com/unform/unform",
};

export default function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

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
          <RepositoryItem repository={repository} />
          <RepositoryItem repository={repository} />
          <RepositoryItem repository={repository} />
        </ul>
      </section>
    </div>
  );
}
