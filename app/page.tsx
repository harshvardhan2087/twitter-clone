import Image from "next/image";
import Sidebar from "./components/sidebar/Sidebar";
import FeedCard from "./components/feedCard/FeedCard";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen mx-5">
        <div className="grid col-span-2 ">
          <Sidebar />
        </div>
        <div className="grid col-span-6 border-2 overflow-scroll">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          
          
        </div>
        <div className="grid col-span-4">Left Side</div>
      </div>
    </div>
  );
}
