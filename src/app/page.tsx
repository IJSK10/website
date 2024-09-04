import Image from "next/image";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
    </div>
  );
}
