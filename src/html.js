import React from "react"
import PropTypes from "prop-types"

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
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>

        {/*
          At this case, inject a global var is harmless
          and works better to set initial theme
          than useEffect on Layout.js
        */}

        <script
          dangerouslySetInnerHTML={{
            __html:`(() => {
              const preferredTheme = localStorage.getItem('theme');
              window.__theme = preferredTheme ? preferredTheme : 'light';
              window.__setTheme = newTheme => {
                window.__theme = newTheme;
                try {
                  localStorage.setItem('theme', newTheme);
                } catch (err) {}
              }
            })();
            `
          }}
        />

        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}