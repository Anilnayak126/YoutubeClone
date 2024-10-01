import React from "react";
import Sidebar from "./Sidebar.jsx";
import Video from "./Video.jsx";
import Listitem from "./Listitem.jsx";
import { useAuth } from "../context/AuthProvider.jsx";

export default function Home() {
  const { data,loading } = useAuth();
  console.log(data);

  return (
    <div className="flex mt-20 ">
      <Sidebar />
      <div className=" h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden ">
        <Listitem/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-col-4 gap-4 p-5">
        {data.map((item) => {
          if (item.type !== "video") return false;

           return  <Video key={item.id} video={item?.video}/>;         
        })}
      </div>
      </div>
    </div>
  );
}
