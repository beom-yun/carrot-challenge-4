import { PhotoIcon } from "@heroicons/react/24/solid";

export default function CardSkeleton() {
  return (
    <div className="flex h-[384px] w-72 animate-pulse flex-col overflow-hidden rounded-xl bg-gray-600 shadow-md">
      <div className="flex min-h-72 items-center justify-center bg-gray-500">
        <PhotoIcon className="size-40 text-gray-600" />
      </div>
      <div className="flex h-full flex-col items-center justify-center gap-4 pb-2">
        <div className="h-5 w-1/2 rounded-md bg-gray-500"></div>
        <div className="h-4 w-2/3 rounded-md bg-gray-500"></div>
      </div>
    </div>
  );
}
