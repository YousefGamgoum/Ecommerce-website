import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import NotFound from "./Pages/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
