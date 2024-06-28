"use client";

import HomeButton from "@/components/HomeButton";

const page = ({ params }) => {
  return (
    <div>
      <h1 className="py-2 text-red-500  ">
        Checking dynamic routes, the parameter passed is: {params.id}
      </h1>

      <HomeButton />
    </div>
  );
};

export default page;
