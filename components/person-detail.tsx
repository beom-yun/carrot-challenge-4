import { IPersonDetail } from "@/lib/types";
import { PhotoIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function PersonDetail({
  squareImage,
  name,
  netWorth,
  country,
  industries,
  bio,
}: IPersonDetail) {
  return (
    <div className="flex w-full flex-col items-center gap-5 rounded-lg bg-gray-700 p-10">
      <div className="flex size-72 items-center justify-center overflow-hidden rounded-lg bg-gray-600 shadow-md">
        {squareImage.includes("undefined") ? (
          <PhotoIcon className="size-40 text-gray-500" />
        ) : (
          <Image
            src={squareImage}
            alt={name}
            width={288}
            height={288}
            className="object-cover"
          />
        )}
      </div>
      <span className="py-5 text-5xl font-bold">{name}</span>
      <span className="text-xl">
        Networth: {Math.round(netWorth / 1000)} Billion
      </span>
      <span className="text-xl">Country: {country}</span>
      <span className="text-xl">Industry: {industries[0]}</span>
      <ul className="pt-5">
        {bio.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
}
