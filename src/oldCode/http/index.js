const https = require("https");

const options = "http://localhost:8080/api/productos"


const req = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);
  res.on("data", (data) => {
    console.log(data);
  });
});
req.on("error", (error) => {
  console.log(error);
});
req.end();


const data = JSON.stringify({
  name: "salva",
  email: "salva@email.com",
});

const option = {
  hostname: "http://localhost",
  port: 3000,
  headers: {
    "Content-Type": "application/json",
    "Content-length": data.length,
  },
  method: "POST",
  path: "/api/user",
};

const reqy = https.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on("data", (data) => {
    console.log(data);
  });
});

req.on("error", (error) => {
  console.log(error);
});

req.write(data);

req.end();