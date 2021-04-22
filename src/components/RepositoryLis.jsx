import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: 'new unform',
  description: 'Forms em React',
  link: 'https://github.com/jeansantosw'
}

export function RepositoryList() {
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