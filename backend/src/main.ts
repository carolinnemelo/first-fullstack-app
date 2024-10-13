import { rejects } from "assert";
import http from "http";
import { resolve } from "path";

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
  return new Promise((resolve, reject) => {
    let body = "";

    req.on("data", async (chunk: any) => {
      body += chunk.toString()
    });

    req.on("end", () => { 
        resolve(body)
    })
  });
};
