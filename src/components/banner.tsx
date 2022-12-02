import * as React from "react";
import Cta from "./cta";

export type Address = {
  line1: string;
  city: string;
  region: string;
  postalCode: string;
  countryCode: string;
};

type Banner = {
  name?: string;
  address?: Address;
  c_headshot?: any;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

const renderPrettyAddress = (address?: Address) => {
  return (
    <>
      {address && (
        <span>
          {address.line1} in {address.city}, {address.region}
        </span>
      )}
    </>
  );
};

const Banner = (props: Banner) => {
  const { name, address, c_headshot } = props;

  return (
    <>
      <div
        className={`relative z-10 w-full bg-cover bg-center h-auto bg-[url(https://wallpaperaccess.com/full/1366120.jpg)]`}
      >
        <div className="relative left-0 right-0 flex flex-col items-center ">
          <div className="w-96 my-8 rounded-xl bg-sky-700 border-4 shadow-xl border-sky-100 px-4 py-2 text-center">
            <div>
              <h1 className="text-white text-3xl font-bold">{name}</h1>
              <p className="text-lg pt-2 text-white font-semibold">
                {address}
              </p>
              <div>
                <img src={c_headshot.url} className="shadow rounded-full max-w-full h-auto align-middle border-none"/>
              </div>
            </div>         
            <div className="flex pt-4 justify-between">
              <Cta
                buttonText="Visit Website"
                url="#"
                style="text-sky-900 bg-sky-50 shadow-xl"
              ></Cta>
              <Cta
                buttonText="Request Appointment"
                url="#"
                style="text-sky-900 bg-sky-50 shadow-xl"
              ></Cta>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
