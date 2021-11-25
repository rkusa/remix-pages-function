import { handleRequest } from "../worker/remix";

export async function onRequest({
  request,
  env,
}: EventContext<Env, string, unknown>) {
  const url = new URL(request.url);
  if (url.pathname.startsWith("/static/")) {
    return env.ASSETS.fetch(request);
  }

  return handleRequest(request);
}

interface Env {
  ASSETS: Fetcher;
}
