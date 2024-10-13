import http from "http";
import { buildPassword } from "./lib";
import { error } from "console";

const port = 3000;
const host = "localhost";

const server = http
  .createServer(async (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.write("Hello world!");
    const passwordLength = await handleReq(req);
    const turingKey = await buildPassword(passwordLength);
    console.log(turingKey);
    res.end();
  })
  .listen(port);


const handleReq = async (req: any) => {
  try {
    const reqBody = await getBody(req);
    const passwordLength = parseInt(reqBody);
  } catch (err) {
    console.log(err)
  }
};

const getBody = async (req: any) => {
  return new Promise<string>((resolve, reject) => {
    let body = "";

    req.on("data", async (chunk: any) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      resolve(body);
    });

    req.on("error", (err: Error) => {
      reject(err);
    });
  });
};
