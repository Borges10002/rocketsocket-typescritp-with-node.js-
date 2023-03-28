import { server } from "./http";
import "./websocket/ChartService";

server.listen(3000, () => console.log("Server is running on port 3000"));
