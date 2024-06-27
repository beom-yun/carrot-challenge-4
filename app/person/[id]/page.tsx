import { API_URL } from "@/lib/constants";
import { IPersonDetail } from "@/lib/types";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const person = await getPersonDetail(params.id);
  return { title: person.name };
}

async function getPersonDetail(id: string): Promise<IPersonDetail> {
  const response = await fetch(`${API_URL}/person/${id}`);
  return await response.json();
}

export default async function DetailPage({
  params,
}: {
  params: { id: string };
}) {
  try {
    const person = await getPersonDetail(params.id);
  } catch {
    return notFound();
  }

  return <h1>Detail Page {params.id}</h1>;
}
