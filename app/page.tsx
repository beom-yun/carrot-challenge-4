import Card from "@/components/card";
import { API_URL } from "@/lib/constants";
import { IPerson } from "@/lib/types";

async function getPersons(): Promise<IPerson[]> {
  // await new Promise(resolve => setTimeout(resolve, 5000));
  const response = await fetch(API_URL);
  return await response.json();
}

export default async function Home() {
  const persons = await getPersons();

  return (
    <div className="grid grid-cols-1 gap-5 py-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {persons.map(person => (
        <Card key={person.id} {...person} />
      ))}
    </div>
  );
}
