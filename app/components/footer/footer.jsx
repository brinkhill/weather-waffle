import Link from "next/link";

export default function Footer() {
 return (
  <footer className="min-h-[10svh] flex justify-between px-3 sm:px-7 border-t">
   <div className="flex flex-col justify-center text-xs sm:text-base font-bold italic hover:text-orange-400 transition">
    <Link href={"https://www.youtube.com/watch?v=eDU0CTDMk2g&pp=ygULd2FmZmxlIHNvbmc%3D"} target="_blank">
     waffle waffle waffle
    </Link>
   </div>

   <div className="flex justify-center items-center text-xs sm:text-base ">
    <span>
     Made by{" "}
     <Link href={"https://www.linkedin.com/in/michael-mason-3782171b9/"} className="hover:underline">
      Michael
     </Link>{" "}
     and{" "}
     <Link href={"https://github.com/brinkhill"} className="hover:underline">
      Brinkley
     </Link>
    </span>
   </div>
  </footer>
 );
}
