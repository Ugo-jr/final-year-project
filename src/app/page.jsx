'use client'


import SectionOne from "@/Components/Homepage/SectionOne";
import SectionTwo from "@/Components/Homepage/SectionTwo";
import SectionThree from "@/Components/Homepage/SectionThree";
import SectionFour from "@/Components/Homepage/SectionFour";


export default function Home() {
  return (
    <div className="mx-[5%]">
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </div>
  )
}
