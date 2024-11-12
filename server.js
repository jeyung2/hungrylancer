const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/hello", (req, res) => {
  res.send({ message: "Hello Express!" });
});

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "https://picsum.photos/200/300?random=1",
      name: "홍길동1",
      birthday: "123456",
      gender: "남자",
      job: "대학생",
    },
    {
      id: 2,
      image: "https://picsum.photos/200/300?random=2",
      name: "박제영1",
      birthday: "711123",
      gender: "남자",
      job: "프리랜서",
    },
    {
      id: 3,
      image: "https://picsum.photos/200/300?random=3",
      name: "박현지1",
      birthday: "111221",
      gender: "여자",
      job: "중학생",
    },
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
