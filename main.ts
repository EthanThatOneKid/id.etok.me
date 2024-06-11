import { graph } from "./ethan.ts";

Deno.serve((request) => {
  if (!new URLPattern({ pathname: "/" }).test(request.url)) {
    return new Response("Not found", { status: 404 });
  }

  if (request.headers.get("Accept")?.includes("text/html")) {
    // TODO: https://github.com/pgrabovets/json-view?tab=readme-ov-file#example1
    return new Response("Not implemented", { status: 501 });
  }

  return new Response(JSON.stringify(graph), {
    headers: { "Content-Type": "application/ld+json" },
  });
});
