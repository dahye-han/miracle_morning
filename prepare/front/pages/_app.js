import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';

import wrapper from '../store/configureStore';

const hanae = ({ Component }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>HANAE</title>
    </Head>
    <Component />
  </>
);

hanae.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(hanae);
