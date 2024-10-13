import http from "http";

const port = 3000;
const host = "localhost";

const server = http
  .createServer(async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.write("Hello world!");
    const amountOfChars = await getBody(req);
    console.log(amountOfChars);
    res.end();
  })
  .listen(port);

const getBody = async (req: any) => {
  const body = await req.on("data", async (chunk: any) => {
    let body = "";
    body += chunk;
    return body;
  });
  console.log({ body });
  return body;
};
