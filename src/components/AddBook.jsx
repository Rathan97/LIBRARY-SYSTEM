function AddBook(){
    return(

        <div className="h-[95vh] mt-5 ">

            <form action="" className="flex flex-col items-center justify-center gap-5 border border-gray-200 w-100 p-5 rounded-lg m-auto mb-0 shadow-md bg-cyan-100">
                            <h1 className="font-bold text-[26px] text-center "> Add Books</h1>
                            <select name="" id="" className="input-box appearance-none tracking-wider inline-block">
                                <option value="none" >--- Select Category ---</option>
                                <option value="fiction">Fiction</option>
                                <option value="sci-fi">Sci-Fi</option>
                                <option value="non-fiction">Non - Fiction</option>
                            </select>
                
                <input type="text" name="" id=""  placeholder="Enter book title... " required className="input-box"/>
                <input type="text" name="" id="" placeholder="Enter author name.." required className="input-box"/>
                <input type="number" name="" id=""  placeholder="Enter rating of the book.." required className="input-box"/>
                <input type="url" name="" id=""  placeholder="Paste the cover page url of book.." required className="input-box"/>
                <input type="textarea" name="" id="" placeholder="Enter the Description of the book.." required className="input-box"/>
                <button className="cursor-pointer  px-6 py-2  font-bold border  border-gray-200 rounded-lg bg-blue-700 text-white hover:bg-blue-500 transition shadow-md hover:shadow-lg ">Add Book</button>
            </form>
        </div>
    )
}

export default AddBook;