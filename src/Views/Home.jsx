import Header from "../components/common/header/Header";
import Footer from "../components/common/footer/Footer";
import MovieCardList from "../components/common/movieCardList/MovieCardList";
import Carousel from "../components/common/carousel/Carousel";

const Home = () => {
  return (
    <>
      <Header />
      <Carousel />
      <MovieCardList className="body-bg" />
      <br />
      <Footer />
    </>
  );
};

export default Home;
