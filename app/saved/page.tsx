import Card from "@/components/cart";
import {  GetSavedPost } from "@/lib/user.action";


export default async function Home() {
 
 const posts = await GetSavedPost()
 console.log(posts)
return (
    <main className="flex min-h-screen flex-col items-center   ">
{posts?.length !== 0     ? (
  <div className=" flex  gap-3 items-center flex-row justify-start   mt-10" >
{posts?.map((post ,i  ) =>(
     <div  key={i} >
<Card  posts ={post} isonSaved={true}/>            
     </div>

))}
  </div>
) :(
  <div className=" flex gap-2 mt-10 ">
    <h1 className=" text-black text-[30px]"> Now Data for the mement</h1>
  </div>
)}
    </main>

  )
}



