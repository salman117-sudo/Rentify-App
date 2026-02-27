import RentalCard from "./RentalCard";
import {rentals} from "../../../data/index"


export default function ExploreGrid() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {rentals.map((item) => (
        <RentalCard key={item.id} rental={item} />
      ))}
    </div>
  );
}
