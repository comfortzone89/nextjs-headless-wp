import Link from "next/link";

export const ButtonLink = ({ destination, label }) => {
  return (
    <a href={destination} className="btn">
      {label}
    </a>
  );
};
