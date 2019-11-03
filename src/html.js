import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="" data-react-helmet="true" />
        {props.headComponents}
      </head>
      {/*
        TODO: handle theme-color flash when in dark-mode without that
        workaround
      */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
          (() => {
            try {
              const color = localStorage.getItem("darkMode") === "true" ? '#282C35' : '#4B334C';
              document.querySelector('meta[name="theme-color"]').setAttribute('content', color);
            } catch {}
          })()
          `,
        }}
      />
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          Esse site precisa do Javascript habilitado :D
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
