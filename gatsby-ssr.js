// gatsby-ssr.js
const React = require("react");

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <meta
      key="google-site-verification"
      name="google-site-verification"
      content="PA_W6AUEtcTP4JxquS-QYPZCRVbdgfEQW9Z-4m6NDro"
    />,
  ]);
};