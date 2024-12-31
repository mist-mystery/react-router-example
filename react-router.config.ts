import type { Config } from "@react-router/dev/config";

export default {
  async prerender() {
    return ["/home", "/todo"];
  },
} satisfies Config;
