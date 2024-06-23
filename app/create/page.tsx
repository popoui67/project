import CreatePost from "@/components/create";
import Image from "next/image";
export default function Page(){
    return(
        <main className="flex mt-3  gap-11 min-h-screen flex-col items-center justify-centre p-24">
<div className=" flex gap-2 flex-row flex-wrap items-center bg-slate-300 rounded-lg p-2">
    <Image
    src="/icons/logo.svg"
    alt=""
    width={90}
    height={90}
    />
<h1 className=" text-[30px] ml-4  "> The create Posts Page</h1>

</div>
<CreatePost/>
        </main>
    )
}