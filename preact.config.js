/* eslint-disable @typescript-eslint/no-var-requires */
import { resolve } from "path";

export default {
  /**
   * Function that mutates the original webpack config.
   * Supports asynchronous changes when a promise is returned (or it's an async function).
   *
   * @param {object} config - original webpack config.
   * @param {object} env - options passed to the CLI.
   * @param {WebpackConfigHelpers} helpers - object with useful helpers for working with the webpack config.
   * @param {object} options - this is mainly relevant for plugins (will always be empty in the config), default to an empty object
   **/
  webpack(config, env, helpers, options) {
    // Use any `index` file, not just index.js
    config.resolve.alias["preact-cli-entrypoint"] = resolve(process.cwd(), "src", "index");

    // My config for tailwind css
    // config = tailwind(config, env, helpers);
    // return config;
    const purgecss = require("@fullhuman/postcss-purgecss")({
      // Specify the paths to all of the template files in your project
      content: ["./src/**/*.tsx"],

      // Include any special characters you're using in this regular expression
      defaultExtractor: (content) => content.match(/[\w-/:%]+(?<!:)/g) || [],
    });

    const postCssLoaders = helpers.getLoadersByName(config, "postcss-loader");
    postCssLoaders.forEach(({ loader }) => {
      const plugins = loader.options.plugins;

      // Add tailwind css at the top.
      plugins.unshift(require("tailwindcss"));

      // Add PurgeCSS only in production.
      if (env.production) {
        plugins.push(purgecss);
      }
    });
    return config;
  },
};
