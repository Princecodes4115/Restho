import FoodItem from "./LandingPage/Sections/FoodItem";
import SwiperComp from "./LandingPage/Sections/SwiperComp";
import Welcome from "./LandingPage/Sections/Welcome";
import Navigation from "./components/Navbar";
import Header from "./components/header";

function App() {
  return (
    <main>
      <Header />
      <Navigation />
      <Welcome />
      <SwiperComp />
      <FoodItem />
    </main>
  );
}

export default App;
