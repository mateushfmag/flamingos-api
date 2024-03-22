import http from "http";
import fs from "fs/promises";

const server = http.createServer(async (req, res) => {
  if (req.method === "GET" && req.url === "/flamingo") {
    // Configuração do cabeçalho da resposta HTTP
    res.writeHead(200, { "Content-Type": "application/json" });
    const flamingos = await fs.readFile("./flamingos.json");

    // Envio da lista de flamingos como resposta
    res.end(flamingos.toString());
  } else {
    // Rota não encontrada
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Rota não encontrada");
  }
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
