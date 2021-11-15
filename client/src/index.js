import reactDom from "react-dom";

// Bootstrap CSS & JS Libareries
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

// Custom Css
import './assets/css/style.css';

import App from "./App";

reactDom.render(<App />,document.getElementById('root'));