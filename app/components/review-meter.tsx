export interface ReviewMeterProps {
  category: string
  rate: number
}
 
const ReviewMeter: React.FC<ReviewMeterProps> = ({ category, rate }) => {
  const rating = `${Math.floor((100 * rate) / 5)}%`
  return ( 
    <div className="grid grid-cols-6 justify-between items-center gap-16">
      <p className="text-sm">{category}</p>
      <div className="flex gap-2 col-span-5 items-center">
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-300">
          <div className={`bg-red-700 h-2.5 rounded-full w-[${rating}%]`} style={{ width: rating }}></div>
        </div>
        <span className="text-sm text-gray-600">{rate}</span>
      </div>
    </div>
  );
}
 
export default ReviewMeter;