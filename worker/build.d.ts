import { ServerBuild } from "@remix-run/server-runtime";

declare module "./build" {
  const build: ServerBuild;
  export = build;
}
