import { Link } from "react-router-dom";

function BookCard(props) {
  return (
    // Card container with all details of a book
    <div className="flex flex-col h-[370px] w-[18%] p-4 rounded-[14px] border border-gray-200 text-gray-700 bg-white mx-4 shadow-md transform transition duration-300 hover:scale-103">
      
      {/* Book cover image */}
      <img
        src={props.data.image}
        alt="card-image"
        className="h-[190px] w-full object-cover rounded-t-[12px]"
      />

      {/* Book details */}
      <div className="flex flex-col flex-grow mt-2.5">
        <h1 className="font-bold text-[16px] mx-1 pb-2">{props.data.title}</h1>
        <p className="text-[14px] mx-1">{props.data.author}</p>

        <div className="flex-grow"></div> {/* Spacer to push button down */}

        {/* View Details button linking to book details page */}
        <div className="text-center mb-1">
          <Link to={`/BookDetails/${props.data.id}`}>
            <button className="cursor-pointer px-4 py-1.5 text-[14px] font-bold border border-gray-200 rounded-lg bg-blue-600 text-white hover:bg-blue-500 transition shadow-md hover:shadow-lg">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
