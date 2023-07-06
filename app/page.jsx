import Footer from "@components/Footer";
import HowItWorks from "@components/HowItWorks";
import Main from "@components/Main";
import Operators from "@components/Operators";
import Subscribe from "@components/Subscribe";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Limo, SUV, Party Bus rentals
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> New York City, NY</span>
      </h1>
      <p className="desc text-center">Chauffeured reservations made simple</p>
      <HowItWorks />
      <Main />
      <Operators />
      <Subscribe />
      <Footer />
    </section>
  );
};

export default Home;
