import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, image, bookName, author, tags, category } = book;
  return (
    <Link to={`/books/${bookId}`}>
      {" "}
      <div className="card bg-base-100 w-96 shadow-xl p-6">
        <figure className="bg-gray-200 py-7">
          <img src={image} alt={bookName} className="h-[166px]" />
        </figure>
        <div className="card-body">
          <div className=" flex justify-center gap-3">
            {tags.map((tag, index) => (
              <button key={index} className="btn btn-xs">
                {tags}
              </button>
            ))}
          </div>
          <h2 className="card-title py-3">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p className="py-3">By : {author}</p>
          <div className="border-t-2 border-dashed py-3"></div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{category}</div>
            <div className="rating">
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-orange-100"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
