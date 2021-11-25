import {
  createRequestHandler,
  ServerPlatform,
} from "@remix-run/server-runtime";
import * as build from "./build";

export async function handleRequest(request: Request): Promise<Response> {
  const platform: ServerPlatform = {};
  const handle = createRequestHandler(build, platform, "production");
  return handle(request);
}
