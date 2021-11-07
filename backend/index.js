const https = require("https");
const cors = require("cors");
const app = require("express")();

app.use(cors());

const url = "https://fakestoreapi.com/products";

app.get("/", (req, res) => {
  const { page } = req.query;

  const items = 5;

  https
    .get(url, (response) => {
      let data = "";
      response.on("data", (res) => {
        data += res;
      });

      response.on("end", () => {
        const jsonData = JSON.parse(data);

        const temp = [];
        let end = false;

        if (items * page <= jsonData.length) {
          for (let index = items * (page - 1); index < items * page; index++) {
            temp.push(jsonData[index]);
          }
          if (items * page >= jsonData.length) {
            end = true;
          }
        }

        const pageData = {
          data: temp,
          end,
        };

        res.json(pageData);
      });
    })
    .on("error", (err) => console.log(err));
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`server listening at ${PORT}`));
