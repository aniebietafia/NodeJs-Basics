const http = require("http");
// const routes = require("./routes");

const PORT = 3000;
const LOCAL_HOST = "localhost";

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Home page</title></head>");
    res.write("<body><h1>Welcome! Node.js</h1></body>");
    res.write("</html>");
    // res.end();
    res.write("<html>");
    res.write("<head><title>Create User</title></head>");
    res.write(
      "<body><form action='/create-user' method='POST'><input type='text' name='username'><input type='submit' value='Send'></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/users") {
    res.write("<html>");
    res.write("<head><title>Users</title></head>");
    res.write(
      "<body><ul><li>Aniebiet Afia</li><li>Margaret Briggs</li><li>Victoria Bell</li><li>James Preacher</li></ul></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const user = parsedBody.split("=")[1];
      console.log(user);
      res.statusCode = "302";
      res.setHeader("Location", "/");
      return res.end();
    });
  }
});

server.listen(PORT, LOCAL_HOST, () => {
  console.log(`Server started at http://${LOCAL_HOST}:${PORT}`);
});
