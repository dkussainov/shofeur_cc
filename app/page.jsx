import Main from "@components/Main";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Limo, SUV, Party Bus rentals
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> New York City, NY</span>
      </h1>
      <p className="desc text-center">Chauffeured reservations made simple</p>
      <Main />
    </section>
  );
};

export default Home;
