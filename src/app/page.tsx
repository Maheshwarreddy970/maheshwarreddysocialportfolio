import Educationsection from "@/components/Educationsection";
import Footersection from "@/components/Footersection";
import Herosection from "@/components/Herosection";
import Projectssection from "@/components/Projectssection";
import Skillssection from "@/components/Skillssection";
import Testimonialssection from "@/components/Testimonialssection";
import Work from "@/components/Worksection";


export default function Home() {
  return (
    <main className="mx-auto w-full max-w-2xl space-y-6">
      <Herosection></Herosection>
      <Work></Work>
      <Educationsection></Educationsection>
      <Projectssection></Projectssection>
      <Skillssection></Skillssection>
      <Testimonialssection></Testimonialssection>
      <Footersection></Footersection>
    </main>
  );
}
