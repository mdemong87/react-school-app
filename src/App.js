import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Admistration from "./pages/admistration/Admistration";
import ApplyOrRagi from "./pages/applyorragi/ApplyOrRagi";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Notice from "./pages/notice/Notice";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/login" element={<Login />} />
        <Route path="/apply" element={<ApplyOrRagi />} />
        <Route path="/admistration" element={<Admistration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
