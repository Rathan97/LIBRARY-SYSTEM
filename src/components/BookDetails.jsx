import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetails(){

    
  const BookData = useSelector(store => store.Library.data )
    const {id} = useParams();
    const navigate = useNavigate();
    const allBooks = Object.values(BookData).flat();

    // Find book by id (convert both to string in case one is number)
    const book = allBooks.find((b) => String(b.id) === id);

   
    return(
        <div className="h[100vh] mt-10 pt-15 bg-gradient-to-br ">
            {/* Header */}
            <div className="max-w-6xl mx-auto px-4 pt-2 ">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
                    Book Details
                </h1>
                <button 
                    onClick={() => navigate("/BrowseBooks")}
                    className="cursor-pointer flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-white/60 rounded-lg transition-all duration-200 font-medium backdrop-blur-sm"
                >
                    <i className="fa-solid fa-arrow-left-long"></i>
                    Back
                </button>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-4">
                <div className="rounded-2xl shadow-xl overflow-hidden backdrop-blur-sm bg-white/90">
                    
                    {/* Book Info Section */}
                    <div className="flex flex-col lg:flex-row gap-4 p-8 s">
                        
                        {/* Book Cover */}
                        <div className="lg:w-1/3 flex justify-center lg:justify-start">
                            <div className="relative group">
                                <img 
                                    src={book.image} 
                                    alt={book.title} 
                                    className="w-58 h-[350px] object-cover rounded-xl shadow-lg group-hover:shadow-2xl transition-shadow duration-300" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </div>

                        {/* Book Details */}
                        <div className="lg:w-2/3 space-y-6">
                            <div className="space-y-4">
                                <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                                    {book.title}
                                </h1>
                                
                                <div className="flex flex-wrap gap-4 text-lg">
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <i className="fa-solid fa-user text-blue-500"></i>
                                        <span className="font-medium">Author:</span>
                                        <span className="text-gray-800 font-semibold">{book.author}</span>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <i className="fa-solid fa-star text-yellow-400"></i>
                                    <span className="font-medium text-gray-600">Rating:</span>
                                    <div className="flex items-center gap-2">
                                        <span className="text-xl font-bold text-yellow-600">{book.rating}</span>
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <i 
                                                    key={i}
                                                    className={`fa-solid fa-star text-sm ${
                                                        i < Math.floor(book.rating) 
                                                            ? 'text-yellow-400' 
                                                            : 'text-gray-300'
                                                    }`}
                                                ></i>
                                            ))}
                                        </div>
                                    </div>
                                    
                                </div>
                                {/* Description Section */}
                    <div className="">
                        <div className="   border-t border-gray-200 pt-4 ">
                            <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                                <i className="fa-solid fa-book-open text-blue-500"></i>
                                Description
                            </h3>
                            <div className=" rounded-xl h-[50px]">
                                <p className="text-gray-700 leading-relaxed text-justify ">
                                    {book.description}
                                </p>
                            </div>
                        </div>

                        {/* Action Button */}
                        
                        <div className=" flex  justify-center  ">
                            <button 
                                onClick={() => navigate("/BrowseBooks")} 
                                className="group cursor-pointer flex items-center gap-3 px-6 py-2 mt-10 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:-translate-y-1"
                            >
                                <i className="fa-solid fa-arrow-left-long group-hover:-translate-x-1 transition-transform duration-200"></i>
                                Back to Browse
                            </button>
                        </div>
                    </div>

                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>
        </div>
    )
}

export default BookDetails;