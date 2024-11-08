import { useLoaderData, useParams } from "react-router-dom";
import { addToStoreCart, addToStoreCartWish } from "../Utilities/AddCart";

const BookDetails = () => {
  const { bookId } = useParams();

  const data = useLoaderData();
  const id = parseInt(bookId);
  const book = data.find((book) => book.bookId === id);
  const {
    bookId: currentId,
    image,
    bookName,
    review,
    author,
    category,
    publisher,
    yearOfPublishing,
    rating,
    totalPages,
  } = book;
  const handleAddCart = (id) => {
    addToStoreCart(id);
  };
  const handleAddCartWish = (id) => {
    addToStoreCartWish(id);
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">{bookName}</h1>
          <p className="py-6">By : {author}</p>
          <div className="border-t-2 "></div>
          <p className="py-6"> Category : {category}</p>
          <div className="border-t-2 "></div>
          <p className="py-6"> Review : {review}</p>
          <div className="border-t-2 "></div>
          <p className="py-2"> publisher : {publisher}</p>
          <p className="py-2"> Year of publish : {yearOfPublishing}</p>
          <p className="py-2"> Rating : {rating}</p>
          <p className="py-2"> Total page : {totalPages}</p>

          <button
            onClick={() => handleAddCart(bookId)}
            className="btn btn-primary"
          >
            Add to cart
          </button>
          <button
            onClick={() => handleAddCartWish(bookId)}
            className="btn btn-primary ml-3"
          >
            Add to WishList
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
