import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://creativeranges.org/",
  integrations: [tailwind(), icon( )],
  output: "server",

  adapter: node({
    mode: "standalone",
  }),
});