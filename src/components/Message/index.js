import { useState, useEffect } from 'react';
import { Message as MessageSUI } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './style.scss';

export default function Message({ content }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timeout;

    if (content) {
      setVisible(true);

      timeout = setTimeout(() => {
        setVisible(false);
      }, 3000);
    }

    return () => {
      // elle nettoie avant un prochain passage
      // timeout
      // listener
      clearTimeout(timeout);
    };
  }, [content]);

  if (!visible) {
    return null;
  }

  return (
    <div className="message">
      <MessageSUI content={content} />
    </div>
  );
}

Message.propTypes = {
  content: PropTypes.string.isRequired,
};
