"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col justify-center items-center gap-5 pt-40">
      <span className="text-white text-4xl font-bold">
        Something went wrong!
      </span>
      <span className="text-white textl-2xl">Please Try again.</span>
    </div>
  );
}
