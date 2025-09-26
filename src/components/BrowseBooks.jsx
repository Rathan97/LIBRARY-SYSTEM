
function BrowseBooks() {
  return (
    <div className="h-[100vh] my-10 ">
      <h1 className="font-bold text-3xl text-gray-900 text-center underline">
        Browse Books
      </h1>
      <div className=" flex flex-row justify-center  gap-5  border  w-[500px] p-2 rounded-lg bg-white border-gray-300 m-auto mt-8 shadow-md">
        <input
          type="text"
          name=""
          id=""
          placeholder="Search by title or author.."
          className="border-none outline-none w-[420px]"
        />
        <button>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

     


 <div className="flex items-center justify-center my-4 mx-[425px]">
  <div className="flex-grow border-t border-gray-400"></div>
  <span className="mx-4  font-bold text-gray-700 text-[14px]">or</span>
  <div className="flex-grow border-t border-gray-400"></div>
</div>

      <div className="flex flex-row justify-center items-center gap-5 font-bold  tracking-wider text-gray-700 my-5">
         <h2 className="font-bold text-[18px] text-gray-900   ">
  
        Categories :
      </h2>
        <button className="cursor-pointer text-[14px] px-2.5 py-2 border border-gray-200 rounded-lg bg-white hover:bg-gray-200   transition shadow-sm hover:shadow-md ">
          Fictional
        </button>
        <button className="cursor-pointer text-[14px] px-2.5 py-2 border border-gray-200 rounded-lg bg-white hover:bg-gray-200 transition shadow-sm hover:shadow-md">
          Sci-Fi
        </button>
        <button className="cursor-pointer text-[14px] px-2.5 py-2 border border-gray-200 rounded-lg bg-white hover:bg-gray-200 transition shadow-sm hover:shadow-md">
          Non - Fictional
        </button>
         </div>


        <div className="items-container  h-[70%] ">

       

        </div>
      </div>

  );
}

export default BrowseBooks;
