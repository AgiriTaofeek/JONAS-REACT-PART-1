import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Menu from "./components/Menu";

type itemsType = {
  description: string;
  quantity: number;
  packed: boolean;
  id: number;
};

function App() {
  const [items, setItems] = useState<itemsType[]>([]);

  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
