import { useState } from "react";
import { Dashboard } from "./pages/Dashboard";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Outlet } from "react-router";
import { Navbar } from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <main id="content" className="space-y-12">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default App;
