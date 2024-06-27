import { API_URL } from "@/lib/constants";
import { IPersonDetail } from "@/lib/types";
import { PhotoIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const person = await getPersonDetail(params.id);
  return { title: person.name };
}

async function getPersonDetail(id: string): Promise<IPersonDetail> {
  try {
    const response = await fetch(`${API_URL}/person/${id}`);
    return await response.json();
  } catch {
    return notFound();
  }
}

export default async function DetailPage({
  params,
}: {
  params: { id: string };
}) {
  const person = await getPersonDetail(params.id);

  return (
    <div className="flex w-full flex-col items-center gap-5 px-5 py-20 text-white xl:max-w-screen-xl">
      <div className="flex size-72 items-center justify-center overflow-hidden rounded-lg bg-gray-600 shadow-md">
        {person.squareImage.includes("undefined") ? (
          <PhotoIcon className="size-40 text-gray-500" />
        ) : (
          <Image
            src={person.squareImage}
            alt={person.name}
            width={288}
            height={288}
            className="object-cover"
          />
        )}
      </div>
      <span className="py-5 text-5xl font-bold">{person.name}</span>
      <span className="text-xl">
        Networth: {Math.round(person.netWorth / 1000)} Billion
      </span>
      <span className="text-xl">Country: {person.country}</span>
      <span className="text-xl">Industry: {person.industries[0]}</span>
      <ul className="py-5">
        {person.bio.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      {/* person.financialAssets */}
    </div>
  );
}
