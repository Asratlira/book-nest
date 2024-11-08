import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setbooks] = useState([]);
  useEffect(() => {
    fetch("/data/booksData.json")
      .then((res) => res.json())
      .then((data) => setbooks(data));
  }, []);
  return (
    <div className="mt-20">
      <h2 className="text-5xl font-bold text-center mb-10">Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <Book key={book.bookId} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
