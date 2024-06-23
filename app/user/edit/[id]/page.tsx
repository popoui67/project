import EditPost from "@/components/edit"
import { GetPostbyId } from "@/lib/user.action"
import Image from "next/image"
export default async function Page({params }:{params :{id :string}}){
   const post = await GetPostbyId(params.id)
   
   if(post == undefined) return
    return(
        <main className="flex min-h-screen flex-col items-center  justify-center p-24">
<div className=" flex gap-2 flex-row flex-wrap items-center bg-slate-300 rounded-lg p-2">
    <Image
    src="/icons/three-dots.svg"
    alt=""
    width={90}
    height={90}
    />
<h1 className=" text-[30px] ml-4  "> The Edit Posts Page</h1>
</div>
{post.map((pos   ,i) =>(
    <div key={i}>
    <EditPost post={pos} id={pos._id}/>
    </div>
))}
        </main>
    )
}