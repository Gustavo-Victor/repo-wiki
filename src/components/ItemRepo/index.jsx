import { ItemContainer } from "./style";

export default function ItemRepo({ repo, handleRemove }) {
  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <div className="align">
        <a href={repo.html_url} target="_blank">
          Visitar
        </a>
        <button onClick={() => handleRemove(repo.id)}>Delete</button>
      </div>
    </ItemContainer>
  );
}
