import TopBar from "../components/TopBar";
import MainHeader from "../components/MainHeader";
import Footer from "../components/Footer";
import hero from "../assets/hero.jpg";

function Home() {
  return (
    <>
      <TopBar />
      <MainHeader />

      <div
        className="hero"
        style={{ backgroundImage: `url(${hero})` }}
      ></div>

      <Footer />
    </>
  );
}

export default Home;
