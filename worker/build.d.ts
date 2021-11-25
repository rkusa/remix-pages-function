import { ServerEntryModule } from "@remix-run/server-runtime";
import { AssetsManifest } from "@remix-run/server-runtime/entry";
import { ServerRouteManifest } from "@remix-run/server-runtime/routes";

declare module "./build" {
  const entry: {
    module: ServerEntryModule;
  };
  const routes: ServerRouteManifest;
  const assets: AssetsManifest;
}
