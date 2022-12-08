import * as React from "react";
import { twMerge } from "tailwind-merge";

type Cta = {
  buttonText: string;
  url: string;
  style?: string;
};

const Cta = (props: Cta) => {
  const { buttonText, url, style } = props;

  return (
    <a
      href={url}
      className={twMerge(
        "py-3 px-4 text-base font-bold text-white rounded-lg hover:bg-gray-300",
        style
      )}
      target="_blank"
      rel="noopener noreferrer"
    >
      {buttonText}
    </a>
  );
};

export default Cta;
