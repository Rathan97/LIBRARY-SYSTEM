import BookCard from "./BookCard";
import { useParams, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";



function BookContainer() {

  const BookData = useSelector(store => store.Library.data )


  const { category } = useParams();
  console.log(category);
  const [searchParams] = useSearchParams();
  console.log(searchParams);
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  // If no category, search in all categories
  const categoriesToSearch =
    category && BookData[category] ? [category] : Object.keys(BookData);

  const filteredBooks = categoriesToSearch.flatMap((cat) =>
    BookData[cat].filter(
      (book) =>
        book.title.toLowerCase().includes(searchQuery) ||
        book.author.toLowerCase().includes(searchQuery)
    )
  );

  return (
    <div className="flex flex-wrap justify-center gap-5 mt-10">
      {filteredBooks.length > 0 ? (
        filteredBooks.map((book) => (
          <BookCard key={book.id} data={book} />
        ))
      ) : (
        <p className="text-gray-600 text-lg">No books found.</p>
      )}
    </div>
  );
}

export default BookContainer;
