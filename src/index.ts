import app from "./server";
import config from "./config/config";

console.log(config);

const PORT = 4000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
