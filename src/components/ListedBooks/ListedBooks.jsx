import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoreCart, getStoreCartWish } from "../Utilities/AddCart";
import Book from "../Book/Book";

const ListedBooks = () => {
  const [addCart, setBooks] = useState([]);
  const allBooks = useLoaderData();
  useEffect(() => {
    const storedListCart = getStoreCart();
    const storedListCartint = storedListCart.map((id) => parseInt(id));
    const allCartList = allBooks.filter((book) =>
      storedListCartint.includes(book.bookId)
    );

    setBooks(allCartList);
  }, []);
  const [addWish, setWish] = useState([]);
  const allWish = useLoaderData();
  useEffect(() => {
    const storedListCartWish = getStoreCartWish();
    const storedListCartWishint = storedListCartWish.map((id) => parseInt(id));
    const allCartListWish = allWish.filter((book) =>
      storedListCartWishint.includes(book.bookId)
    );

    setWish(allCartListWish);
  }, []);
  return (
    <div>
      <h1 className="text-3xl my-6 font-bold">Listed Books : </h1>
      <Tabs>
        <TabList className="font-bold text-2xl">
          <Tab>Add to cart</Tab>
          <Tab>Wish List</Tab>
          <div className="border-t-2 "></div>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl my-4 ">Cart List :{addCart.length}</h2>{" "}
          <div>
            {addCart.map((book) => (
              <Book key={book.bookId} book={book}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl my-4">Remind Me Later :{addWish.length}</h2>
          {addWish.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
