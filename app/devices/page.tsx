"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import HomeButton from "@/components/HomeButton";

const DevicesPage = () => {
  const [devices, setDevices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const router = useRouter();
  const goToDynamicDevice = () => {
    router.push("/devices/1234")
  };

  const goToAbout = () => {
    router.push("/about-section")
  };

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const res = await fetch("https://api.restful-api.dev/objects")
        if (!res.ok) {
          throw new Error("response not good")
        }
        const data = await res.json()
        setDevices(data)
        setLoading(false)
      } catch (error) {
        setError(error.message)
        setLoading(false)
      }
    };
    fetchDevices()
  }, []);

  if (loading)
    return <div className="py-2">Fetching data from API, Loading.......</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      <h1 className="py-2 text-red-500  ">Devices</h1>
      {devices.map((item: any) => (
        <h1 key={item.id}>
          {item.id}. {item.name}
        </h1>
      ))}
      <HomeButton />
      <button
        className="bg-green-400 hover:bg-green-600 text-white px-2 mx-2 rounded"
        onClick={goToAbout}
      >
        About Page
      </button>
      <button
        className="bg-yellow-300 hover:bg-yellow-600 text-white px-2 rounded"
        onClick={goToDynamicDevice}
      >
        Pass parameter as 1234
      </button>
    </div>
  );
};

export default DevicesPage;
