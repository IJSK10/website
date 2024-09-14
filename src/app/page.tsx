import Image from "next/image";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import About from "@/components/about";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Education from "@/components/education";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex flex-1 flex-col p-6 dark:bg-gray-800 dark:text-white">
          <About />
          <Experience />
          <Projects/>
          <Education/>
          <Contact/>
        </div>
      </div>
    </div>
  );
}
