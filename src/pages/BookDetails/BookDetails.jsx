import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoredDB } from "../../utility/addToDB";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { ToastContainer, toast } from 'react-toastify';

const MySwal = withReactContent(Swal)
const BookDetails = () =>{
    const {id} = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId);
    const {bookName,image,author,category,review,tags,rating,yearOfPublishing,publisher,totalPages}= singleBook || {};

    const handleMarkAsRead = id => {
//         MySwal.fire({
//   title: "Drag me!",
//   icon: "success",
//   draggable: true
// });
        toast("Wow so easy!")

        addToStoredDB(id)
    }
    return(
   <div className="flex mt-20 mb-30">
    <div className="w-1/2 p-5 flex items-center justify-center bg-gray-100 rounded-2xl">
       <div>
         <img className="w-[350px] h-[500px] shadow-2xl" src={image}></img>
       </div>
    </div>
    <div className="w-1/2 ml-8">
    <h2 className="card-title text-3xl">{bookName}</h2>
    <p className="font-bold mt-2">By: {author} </p>
    
    <div className="divider"></div>
    <div className="font-semibold">
        {category}
    </div>
    <div className="divider"></div>
    <div>
        <p className="font-bold">Review: <span className="font-normal">{review}</span></p>
    </div>
    <div className="mt-8">
        <p className="font-bold">Tag <span className="text-green-400">#{tags}</span></p>
    </div>
    <div className="divider"></div>
    <div className="flex items-center ">
        <div>
            <p className="mb-5">Number of Pages</p>
            <p className="mb-5">Publisher</p>
            <p className="mb-5">Year of Publishing</p>
            <p className="mb-5">Rating</p>
        </div>
        <div className="ml-10">
            <p className="mb-5 font-bold">{totalPages}</p>
            <p className="mb-5 font-bold">{publisher}</p>
            <p className="mb-5 font-bold">{yearOfPublishing}</p>
            <p className="mb-5 font-bold">{rating}</p>
        </div>
    </div>
      <ToastContainer />
    <div className="flex items-center">
    <button onClick={()=>handleMarkAsRead(id)} className="btn btn-accent font-bold">Read</button>
    <button className="btn btn-info ml-2 font-bold">WishList</button>
    </div>

  </div>
   </div>   
  

       
    );
};
export default BookDetails;