import { NavLink } from 'react-router-dom';
import { Menu as MenuSUI } from 'semantic-ui-react';

export default function Menu() {
  return (
    <div className="menu">
      <MenuSUI>
        <MenuSUI.Item
          to="/"
          // on peut demander au composant Item de se comporter comme un autre composant
          // on appelle ça un composant polymorphique
          as={NavLink}
        >
          Recherche
        </MenuSUI.Item>

        <MenuSUI.Item
          to="/faq"
          as={NavLink}
        >
          FAQ
        </MenuSUI.Item>

      </MenuSUI>
    </div>
  );
}
