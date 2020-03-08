/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
// Taken from https://dev.to/boywithsilverwings/configuring-preact-cli-with-tailwind-css-3ckj

const purgecss = require("@fullhuman/postcss-purgecss")({
  // Specify the paths to all of the template files in your project
  content: [
    "./src/**/*.html",
    "./src/**/*.jsx",
    "./src/**/*.tsx",
    // etc.
  ],
  fontFace: false,
  whitelist: ["html", "body"],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

module.exports = {
  plugins: [
    // ...
    require("postcss-import"),
    require("tailwindcss"),
    require("autoprefixer"),
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
    // ...
  ],
};
