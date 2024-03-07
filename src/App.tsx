import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Root from "./pages/Root";
import data from "./data.json";
import Info from "./pages/Information";
import Main from "./pages/Mainpage";
function App() {
  const newData = data;
  console.log(newData);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Main />} />
            <Route path="info/:id" element={<Info />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
