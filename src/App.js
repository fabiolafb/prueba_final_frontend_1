import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CondominioProvider } from "./Context";

// components
import Navbar from "./components/Navbar";

// views
import Home from "./views/Home";

export default function App() {
  return (
    <div className="App">
      <CondominioProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />

            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </BrowserRouter>
      </CondominioProvider>
    </div>
  );
};


