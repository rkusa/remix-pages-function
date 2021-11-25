async function errorHandler({ next }: EventContext<{}, string, unknown>) {
  try {
    return await next();
  } catch (err) {
    if (err instanceof Error) {
      return new Response(`${err.message}\n${err.stack}`, { status: 500 });
    } else {
      return new Response("Internal Error", {
        status: 500,
      });
    }
  }
}

export const onRequest = [errorHandler];
