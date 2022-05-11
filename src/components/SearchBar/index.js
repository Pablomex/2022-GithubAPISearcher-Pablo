import { Segment, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './style.scss';

export default function SearchBar({ inputValue, onChangeInputValue, onSubmitForm }) {
  const handleChange = (event) => {
    onChangeInputValue(event.target.value);
  };

  const handleSubmit = () => {
    // conditions pour lancer la soumission du form
    // if (inputValue.length < 3) {
    //   return;
    // }

    onSubmitForm();
  };

  return (
    <div className="searchbar">
      <Segment>
        <Form onSubmit={handleSubmit}>
          <Form.Input
            value={inputValue}
            icon="search"
            iconPosition="left"
            placeholder="Votre recherche"
            // on met un gestionnaire d'événement
            // pour réagir lorsque l'utilisateur tape
            // du texte dans le champs
            onChange={handleChange}
          />
        </Form>
      </Segment>
    </div>
  );
}

SearchBar.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onChangeInputValue: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
};
