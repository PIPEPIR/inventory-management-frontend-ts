import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import SideNav from "./components/SideNav/SideNav";
import { Card } from "antd";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex h-screen">
          <div>
            <SideNav />
          </div>
          <div className="w-full place-items-center p-10">
            <Card className="w-4xl h-full ">
              <Routes>
                <Route path="" element={<h1>hid</h1>} />
                <Route path="home" element={<h1>hid</h1>} />
              </Routes>
            </Card>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
