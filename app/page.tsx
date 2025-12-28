import About from "@/components/about";
import Navbar from "@/components/navbar";
import ProfileImage from "@/components/image";
import Intro from "@/components/intro";
export default function Home() {
  return (
    <main className="min-h-screen grid grid-cols-[400px_1fr_200px] bg-gradient-to-br from-gray-50 to-gray-100">
      <ProfileImage />
      <Intro />
      <Navbar />
    </main>
  )
}