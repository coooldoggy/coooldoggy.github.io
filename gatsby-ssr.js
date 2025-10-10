// gatsby-ssr.js
const React = require("react");

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <meta
      key="google-site-verification"
      name="google-site-verification"
      content="eDQfqAYAOa75Lg2VJsC1EGNIZBOgfSqALpBHHSrxfYk"
    />,
  ]);
};