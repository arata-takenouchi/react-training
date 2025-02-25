import type { Preview } from "@storybook/react";

/** @type { import('@storybook/react').Preview } **/
const preview: Preview = {
  parameters: {
    controls: {
      actions: { argTypesRegex: "^on[A-Z].*" },
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
