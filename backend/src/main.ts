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
  console.log(req);
};
