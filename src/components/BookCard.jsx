

function BookCard(props){
    return(
        <div className="flex flex-col h-[80%] w-[18%] p-4 rounded-[14px] border border-gray-200 text-gray-700 bg-white mx-8 shadow-md transform transition duration-300 hover:scale-103">
            
                <img src="../src/assets/sample.jpg" alt="card-image" className="object-cover h-[50%] rounded-t-[12px]"/>
        
            <div className="mt-2.5 " >
                <h1 className="font-bold text-[24px] mx-1 pb-6">Title</h1>
                <p className=" text-[16px] mx-2 pb-5">author</p>
                <div className="text-center mt-2">
                <button className="cursor-pointer  px-4 py-1.5  font-bold border  border-gray-200 rounded-lg bg-blue-700 text-white hover:bg-blue-500 transition shadow-md hover:shadow-lg ">View Details</button>
            </div>
            </div>
        </div>
    )
}


export default BookCard;