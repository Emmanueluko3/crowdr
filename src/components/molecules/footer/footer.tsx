import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full bg-customBlack flex justify-between items-center p-8 px-16">
      <div className="flex items-center justify-between w-full">
        <Link href="/" className="text-white text-3xl font-bold mr-8">
          Crowdr
        </Link>
        <p className="text-gray-500">
          Copyright @ {currentYear} Crowdr. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
