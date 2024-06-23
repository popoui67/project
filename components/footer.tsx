 import Image from "next/image"
 import Link from "next/link"
export default function Footer (){
    return (
        <footer className=" flex justify-between w-screen h-[100px]  bg-gray-600">
            <div className=" flex  gap-2 items-center ">
                <Image
                src="/images/player1.png"
                width={90}
                height={80}
                alt=""
        className=" rounded-lg"
                />
                <h1> Power</h1>

            </div >
  
            <div className=" flex gap-6  mr-8 mt-4">
            <Link href="">
<Image
                src="/1.jfif"
                width={60}
                height={70}
                alt=""
        className=" rounded-lg"
                />

</Link>
<Link href="">
<Image
                src="/images.png"
                width={60}
                height={70}
                alt=""
        className=" rounded-lg"
                />

</Link>

                
            </div>


        </footer>
    )
}
// in my case i have use the Power as a name