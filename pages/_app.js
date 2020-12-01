import React, { Component } from 'react';
// import '../styles/globals.css'
import '../styles/css/bundle.min.css'
import '../styles/css/owl.carousel.min.css'
import '../styles/css/animate.min.css'
import '../styles/css/line-awesome.min.css'
import  '../styles/css/style.css'
// import '../styles/css/settings.css'
// import '../styles/css/slick-theme.css'
import '../styles/css/slick.css'
import App from 'next/app';
import Layout from '../components/Layout';

export default class MyApp extends App {
  render () {
    const { Component, pageProps } = this.props
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp
