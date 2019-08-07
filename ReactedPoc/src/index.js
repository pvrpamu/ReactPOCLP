import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { routing } from "./routes/routes";
import "bootstrap/dist/css/bootstrap.css";
import "./lib/globalStyles.scss";
import "./lib/_mixins.scss";
import "./lib/_variables.scss";

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
