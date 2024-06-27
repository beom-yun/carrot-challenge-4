import CardSkeleton from "@/components/card-skeleton";

export default function HomeLoading() {
  return (
    <div className="grid grid-cols-1 gap-5 py-20 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {[
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      ].map(value => (
        <CardSkeleton key={value} />
      ))}
    </div>
  );
}
