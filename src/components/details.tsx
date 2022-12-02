import * as React from "react";
import Cta from "./cta";
import { Address } from "@yext/pages/components";

const Details = (props: any) => {
  const { address, phone } = props;

  return (
    <>
      <div className="grid">
        <div className="text-3xl font-bold">Dentist Information</div>
        <div className="grid grid-cols-1 py-2">
          <div>
            <Address address={address} />
            <div className="pt-4">
              <a href="#">{phone}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
