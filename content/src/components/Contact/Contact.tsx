import React from 'react';
import ViewContainer from '../ViewContainer/ViewContainer';

import styles from './Contact.module.css';

// tslint:disable-next-line: max-line-length
const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSe6GC6p4WeOTMz3R0uYI1eKJw1Ri3mGP2AodfFl7PhpOvQj9A/viewform?embedded=true';

const Contact = () => {
  return (
    <div className={styles.main}>
      <ViewContainer>
        <iframe
          title="Contact form"
          className={styles.form}
          src={FORM_URL}
          marginHeight={0}
          marginWidth={0}
          frameBorder={0}
        >
          Loading…
        </iframe>
      </ViewContainer>
    </div>
  );
};

export default Contact;
