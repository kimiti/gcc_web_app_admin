import "./bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomePage from "./screens/HomePage";
import Header from "./components/header/Header";
import LoginPage from "./screens/auth/login/Login";
import RegisterPage from "./screens/auth/register/Register";
import UploadVideo from "./screens/videosPage/UploadVideo";
import PlayVideo from "./screens/videosPage/PlayVideo";
import UploadPdf from "./screens/pdfs/UploadPdf";
import Upload from "./screens/Upload";
import View from "./screens/View";

function App() {
  return (
    <Router>
      <Header />
      <Container>
        <Route path="/" component={HomePage} exact />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/view" component={View} />
        <Route path="/upload" component={Upload} />
      </Container>
    </Router>
  );
}

export default App;
