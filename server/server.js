const exports = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));
