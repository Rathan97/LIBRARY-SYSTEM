import BookCard from "./BookCard";
import { useParams, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

function BookContainer() {
  // Access book data from Redux store
  const BookData = useSelector(store => store.Library.data);

  // Get category from URL params
  const { category } = useParams();

  // Get search query from URL search params
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  // Determine which categories to display: specific or all
  const categoriesToSearch =
    category && BookData[category] ? [category] : Object.keys(BookData);

  // Filter books based on search query within selected categories
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
        // Render a BookCard for each filtered book
        filteredBooks.map((book) => (
          <BookCard key={book.id} data={book} />
        ))
      ) : (
        // Display message if no books match
        <p className="text-gray-600 text-lg">No books found.</p>
      )}
    </div>
  );
}

export default BookContainer;
