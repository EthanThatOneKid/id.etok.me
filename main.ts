import { HTML_JSON_VIEW } from "./json_view.ts";
import { graph } from "./etok.ts";

Deno.serve((request) => {
  if (!new URLPattern({ pathname: "/" }).test(request.url)) {
    return new Response("Not found", { status: 404 });
  }

  if (request.headers.get("Accept")?.toLowerCase().includes("text/html")) {
    return new Response(HTML_JSON_VIEW, {
      headers: new Headers({
        "Content-Type": "text/html",
        "Access-Control-Allow-Origin": "*",
      }),
    });
  }

  return new Response(JSON.stringify(graph), {
    headers: new Headers({
      "Content-Type": "application/ld+json",
      "Access-Control-Allow-Origin": "*",
    }),
  });
});
