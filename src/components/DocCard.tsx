// src/components/JobCard.tsx

import * as React from "react";
import { CardComponent, CardProps } from "@yext/search-ui-react";
import LOCATION from "../types/locations";

const DocCard: CardComponent<LOCATION> = ({
  result,
}: CardProps<LOCATION>): JSX.Element => {
  const location = result.rawData;

  // function that takes a date in the format YYYY-MM-DD and returns date in the format Month Day, Year
  const formatDate = (date: string): string => {
    if (!date) return "";

    const dateObj = new Date(date);
    const month = dateObj.toLocaleString("default", { month: "long" });
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    return `${month} ${day}, ${year}`;
  };

  return (
    <div className="mb-4 justify-between rounded-lg border-2 border-sky-700 bg-sky-100/50 p-4 text-stone-900 shadow-lg">
      <div className="flex grid-cols-2">
        <div>
            <img className="max-h-28 rounded-xl" src={location.c_headshot?.url} />
        </div>
        <div className="pl-6 pt-3">
            <a className="text-xl font-semibold text-sky-700" href={location.landingPageUrl}>{location.name}</a>
            <div>
            {location.services}
            </div>
            <div className="py-2 ">{location.brands}</div>
            </div>
        <div className="flex gap-1">
        </div>
        
      </div>
    </div>
  );
};

export default DocCard;