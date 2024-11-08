import bannerImg from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen mt-8 "
      style={{
        backgroundImage: `url(${bannerImg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md ">
          <h1 className="mb-10 text-7xl font-bold">
            Books to freshen up your bookshelf
          </h1>

          <button className="btn btn-primary bg-black border-none text-bold text-2xl">
            welcome to book era
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
