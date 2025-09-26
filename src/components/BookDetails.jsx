function BookDetails(){
    return(
       <div className="h-[90vh]  pt-8">
        <h1 className="font-bold text-[30px] text-center">Book Details</h1>
        <button className="cursor-pointer ml-10 hover:bg-gray-100 font-bold text-gray-600 p-1.5 rounded-lg px-3"><i className="fa-solid fa-arrow-left-long "></i> Back</button>
       
        <div className="flex flex-col gap-4 h-[78%] w-[50%] border border-gray-200 m-auto p-9 shadow-md  bg-white rounded-lg ">
       
        <div className=" flex gap-10">
        <div className="w-[18%] rounded-lg">
            <img src="../src/assets/sample.jpg" alt="card-image" className=" rounded-lg shadow-md" />
        </div>

        <div className="w-[80%]  ">
            <h1 className="font-bold text-2xl my-5">Title</h1>
            <h2 className="text-[16px] my-5">Author : </h2>
            <p className="font-bold my-5">Rating : </p>
        </div>
        </div>

         <div className="text-center">
            <p className="mb-5 mt-2 text-gray-500 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, eos culpa voluptas fugiat nemo, dignissimos quisquam quam exercitationem voluptatem at assumenda? Saepe atque ipsum illum obcaecati est voluptatibus exercitationem fugiat.</p>
                  <button className=" cursor-pointer mt-4 pl-4 pr-5 py-1.5 tracking-wide font-bold border  border-gray-200 rounded-lg bg-blue-700 text-white hover:bg-blue-500 transition shadow-md hover:shadow-lg"><i className="fa-solid fa-arrow-left-long "></i> Back</button>
        </div>
     

       
        </div>
          
       </div>

    )
}
export default BookDetails;