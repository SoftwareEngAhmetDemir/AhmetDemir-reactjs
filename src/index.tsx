import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css'
import axios from 'axios';
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
axios.defaults.baseURL = process.env.REACT_APP_BASE_URL; 
root.render(
  <App />
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();