import { useState, useEffect } from 'react';
import { RepositoryItem } from "./RepositoryItem";

// https://api.github.com/users/jeansantosw/repos

import '../styles/repositories.scss';

const repository = {
  name: 'new unform',
  description: 'Forms em React',
  link: 'https://github.com/jeansantosw'
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(()=>{
    fetch('https://api.github.com/users/jeansantosw/repos')
    .then(response => response.json())
    .then(data => setRepositories(data))
  },[]);


  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />
        <RepositoryItem repository={repository} />

      </ul>

    </section>

  );
}