import "./App.css";
import "./input.css";
import Header from "./components/Header";
import Section_1 from "./components/section_1";
import Section_2 from "./components/section_2";
import Tintuc from "./components/tintuc";
import NhaCungCap from "./components/NhaCungCap";
import Sanpham from "./components/sanpham";
import NearFooter from "./components/nearFooter";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <Section_1 />
      <Section_2 />
      <Tintuc />
      <NhaCungCap />
      <Sanpham />
      <NearFooter />
      <Footer />
    </>
  );
}

export default App;
