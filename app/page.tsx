import Link from "next/link";

export default async function Home() {


  // const res= await fetch('https://api.restful-api.dev/objects')
  // const data = await res.json()

  return (
    <div className=" ">
      {/* {data.map((item: any) => (
        <h1 key={item.id}>{item.name}</h1>
      ))} */}
      <h1 className="py-2 text-red-500  ">Home Page</h1>
      <Link className="hover:bg-blue-100 rounded-lg " href="/devices">Click to see list of devices</Link>
    </div>
  )
}
