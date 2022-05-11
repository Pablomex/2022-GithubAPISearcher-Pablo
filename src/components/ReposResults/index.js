import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './style.scss';
import Repo from '../Repo';

export default function ReposResults({ results }) {
  return (
    <div className="repos-results">
      <Card.Group itemsPerRow={3} stackable>
        {results.map((result) => (
          <Repo
            key={result.id}
            // imageUrl={result.imageUrl}
            // title={result.title}
            // owner={result.owner}
            // description={result.description ?? 'no description'}

            // plutôt que de lister toutes les props
            // on utilise le spread operator pour copier/coller
            // les propriétés de result dans l'objet props
            {...result}
          />
        ))}
      </Card.Group>
    </div>
  );
}

ReposResults.propTypes = {
  // on ne sait pas ce qu'il y dans le tableau
  // results: PropTypes.array.isRequired,

  // on sait le type des éléments du tableau
  // results: PropTypes.arrayOf(PropTypes.object).isRequired,

  // on connait la forme des objets du tableau
  results: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};
