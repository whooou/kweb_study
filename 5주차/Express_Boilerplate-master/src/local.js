// @flow
require('dotenv').config();
import Server from "./server";
const server: Server = new Server();
server.listen(4000);