import React from 'react';
import styles from './Home.module.scss';
import { useIntl } from 'react-intl';

const Home = () => {
    const { formatMessage } = useIntl();

    return (
      <div className={styles.container}>{formatMessage({ id: "NavbarHomeTitle" })}</div>
    );
}

export default Home;