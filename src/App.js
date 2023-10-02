import "./App.css";
import Banner from "./pages/banner/Banner";
import Footer from "./component/footer/Footer";
import HeaderPage from "./HeaderPage/HeaderPage";
import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./component/Navbar/Navbar";
import Question from "./pages/question/Question";

function App() {
  return (
    <div>
      <Navbar />
      <HeaderPage />
      <HomePage />
      <Question />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
