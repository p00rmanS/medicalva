// Local-only static preview. Production hosting is handled by GitHub Pages.
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "../site");
const types = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
};
http
  .createServer((request, response) => {
    try {
      let pathname = decodeURIComponent(
        new URL(request.url, "http://localhost").pathname,
      );
      if (pathname.startsWith("/medicalva/"))
        pathname = pathname.slice("/medicalva".length);
      const file = path.resolve(
        root,
        "." + pathname + (pathname.endsWith("/") ? "index.html" : ""),
      );
      if (!file.startsWith(root + path.sep)) {
        response.writeHead(403).end("Forbidden");
        return;
      }
      fs.readFile(file, (error, data) => {
        if (error) return response.writeHead(404).end("Not found");
        response.writeHead(200, {
          "Content-Type":
            (types[path.extname(file)] || "application/octet-stream") +
            "; charset=utf-8",
          "X-Content-Type-Options": "nosniff",
        });
        response.end(data);
      });
    } catch {
      response.writeHead(400).end("Invalid request");
    }
  })
  .listen(4173, "127.0.0.1", () =>
    console.log("Preview: http://127.0.0.1:4173/medicalva/"),
  );
