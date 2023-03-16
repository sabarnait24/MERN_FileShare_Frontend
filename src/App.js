import "./App.css";
import Footer from "./components/Footer";
import Upload from "./components/Upload";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <div className="bg-white">
        <Upload></Upload>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default App;
