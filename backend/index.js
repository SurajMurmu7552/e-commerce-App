const https = require("https");
const app = require("express")();

const url = "https://fakestoreapi.com/products";

app.get("/", (req, res) => {
  https
    .get(url, (response) => {
      let data = "";
      response.on("data", (res) => {
        data += res;
      });

      response.on("end", () => {
        const jsonData = JSON.parse(data);
        res.json(jsonData);
      });
    })
    .on("error", (err) => console.log(err));
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`server listening at ${PORT}`));
