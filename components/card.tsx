import { IPerson } from "@/lib/types";
import { PhotoIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function Card({
  id,
  name,
  squareImage,
  netWorth,
  industries,
}: IPerson) {
  return (
    <Link
      href={`person/${id}`}
      className="flex h-[384px] w-72 flex-col overflow-hidden rounded-xl bg-gray-600 shadow-md transition-transform hover:scale-105"
    >
      {squareImage.includes("undefined") ? (
        <div className="flex min-h-72 items-center justify-center bg-[#DCDCDC]">
          <PhotoIcon className="size-40 text-white" />
        </div>
      ) : (
        <Image
          src={squareImage}
          alt={name}
          width={288}
          height={288}
          className="object-cover"
        />
      )}
      <div className="flex h-full flex-col items-center justify-center gap-2 pb-2">
        <span className="text-lg font-bold text-white">{name}</span>
        <span className="text-sm text-white">
          {Math.round(netWorth / 1000)} Billion / {industries[0]}
        </span>
      </div>
    </Link>
  );
}
