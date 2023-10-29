// This component for Image Scroll Of Section Camp

import { PEOPLE_URL } from "@/constant"
import Image from "next/image"

type CampProps = {
    title: string,
    subtitle: string,
    backgroundImage: string,
    people: string
}

export const CampSite = ({title, subtitle, backgroundImage, people}:CampProps) => {
  return (
    <section className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}>
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="p-4 rounded-full bg-green-50">
            <Image src="/folded-map.svg" alt="map" width={24} height={24}/>
          </div>
          <div className="flex flex-col gap-1">
          <h4 className="bold-18 text-white">{title}</h4>
          <p className="regular-14 text-white">{subtitle}</p>
        </div>
        </div>
        <div className="flexCenter gap-6">
        <span className="flex -space-x-4 overflow-hidden">
          {PEOPLE_URL.map((url) => (
            <Image 
              className="inline-block h-10 w-10 rounded-full"
              src={url}
              key={url}
              alt="person"
              width={52}
              height={52}
            />
          ))}
        </span>
        <p className="bold-16 md:bold-20 text-white">{people}</p>
      </div>
      </div>
    </section>
  )
}
