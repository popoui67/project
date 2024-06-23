"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GetPostbasonSearch, Post } from "@/lib/user.action";
import { useRouter } from "next/navigation";
import Card from "@/components/cart";
import { useState , useEffect } from "react";

export default  function Page(){
const [search , setSearch] =useState("")
const [Post , setPost ]=useState([])
const [isSearching , setIsSearching] =useState(false)
const router = useRouter()
    useEffect(()=>{
      async function SearchByCat() {
        if(search != ""){
         const posts =   await GetPostbasonSearch(search)
         console.log(posts)
         if(posts !=  undefined ){
        setPost(posts as Post | any)
        setSearch("")
        setIsSearching(false)
       }
       
      }
        }
      if(isSearching == true) {
        SearchByCat() 
}
},[ isSearching] )

    return(
<div className=" flex flex-col  bg-gray-200  w-screen h-screen">
   { Post.length == 0 && (
    <>
  <div className="  -inset-0.5 bg-white rounded-md    opacity-0  "/>
    <div className="  bg-slate-300 rounded-lg  ml-80  mt-40 absolute w-[1300px] h-[150px]  opacity-100">
<Input  className=" mt-9 text-black border-spacing-1  opacity-95"placeholder="Search"value={search} name="search" onChange={(e) => setSearch(e.target.value)}/>
<Button className=" mt-2" onClick={()=> setIsSearching(true)}>Search</Button>
    </div>
    </>
  
)}
{
    Post.length > 0 ? (
  <div className=" bg-slate-100 rounded-lg p-4 flex gap-3 items-center flex-row justify-start   mt-10" >
{Post?.map((post ,i  ) =>(
     <div  key={i} >
<Card  posts ={post}/>            
     </div>

))}
  </div>
    ):(
      <>
      {
      isSearching == false && Post.length == 0 &&  (
          <div className=" flex gap-2 mt-10  justify-center">
          <h1 className=" text-black text-[30px]"> No Data for the mement</h1>
        </div>
        )
      }
      </> 
   
      
       
    )
}
</div>
  
     
    )
}