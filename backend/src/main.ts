import http from "http";

const port = 3000;
const host = "localhost";

const server = http
  .createServer(async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.write("Hello world!");
    const amountOfChars = await getBody(req);
    res.end();
  })
  .listen(port);

const getBody = async (req: any) => {
  let body = "";
  req.on("data", (chunk: any) => {
    body += chunk;
    try {
      console.log({ body });
      return body
    } catch (err) {
      console.error(err);
    }
  });

};
