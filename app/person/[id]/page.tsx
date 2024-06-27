import FinancialAssets from "@/components/financial-assets";
import PersonDetail from "@/components/person-detail";
import { API_URL } from "@/lib/constants";
import { IPersonDetail } from "@/lib/types";
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
    <div className="flex w-full flex-col items-center gap-10 px-5 py-20 text-white xl:max-w-screen-xl">
      <PersonDetail {...person} />
      <FinancialAssets financialAssets={person.financialAssets} />
    </div>
  );
}
