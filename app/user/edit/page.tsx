import { GetPostsBaseOnPosterName, Post } from "@/lib/user.action"
import { currentUser } from "@clerk/nextjs/server"
import Card from "@/components/cart"
import { Button, ButtonForEdit } from "@/components/ui/button"
export default async  function Page(){
    const user = await currentUser()
    if(user == undefined) return
const posts   = await GetPostsBaseOnPosterName(String(user?.username))
    return(
            <main className=" bg-slate-100 rounded-lg p-4 flex min-h-screen flex-col items-center   ">
        {posts?.length !== 0     ? (
          <div className=" flex  gap-3 items- flex-row justify-start   mt-10" >
        {posts?.map((post :Post | any ,i  ) =>(
             <div  key={i}  className=" flex items-center flex-col">
        <Card  posts ={post}/>  
        <ButtonForEdit id={post._id} value="edit" />          
             </div>
        
        ))}
          </div>
        ) :(
          <div className=" flex gap-2 mt-10 ">
            <h1 className=" text-black text-[30px]"> Now Data for the mement</h1>
          </div>
        )}
            </main>
          );
        }
