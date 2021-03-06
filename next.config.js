const withLess = require("next-with-less");

module.exports = withLess({
  lessLoaderOptions: {
    /* ... */
    lessOptions: {
      /* ... */
      modifyVars: {
        "primary-color": "#9900FF",
        "border-radius-base": "2px",
        /* ... */
      },
    },
    javascriptEnabled: true,
  },
  images: {
    domains: ["backend.matrixfitness.uz"],
  },
});
