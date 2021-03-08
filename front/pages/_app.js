import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';
import withReduxSaga from 'next-redux-saga';
import wrapper from '../store/configureStore';

const MiracleMorning = ({ Component }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>Miracle Morning</title>
    </Head>
    <Component />
  </>
);

MiracleMorning.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(withReduxSaga(MiracleMorning));
