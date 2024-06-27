import { IFinancialAsset } from "@/lib/types";

export default function FinancialAssets({
  financialAssets,
}: {
  financialAssets: IFinancialAsset[];
}) {
  return (
    <div className="flex w-full flex-col items-center gap-5 rounded-lg bg-gray-700 p-10">
      <span className="py-5 text-4xl font-bold">Financial Assets</span>
      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {financialAssets.map((asset, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 rounded-md border-[1px] border-gray-400 p-5 transition-colors hover:bg-gray-600"
          >
            <span>Ticker: {asset.ticker}</span>
            <span>Shares: {asset.numberOfShares.toLocaleString("en-US")}</span>
            {asset.exerciseOptionPrice ? (
              <span>Exercise Price: ${asset.exerciseOptionPrice}</span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
