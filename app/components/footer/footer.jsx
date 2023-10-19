import Link from "next/link";

export default function Footer() {
  return (
    <footer className="min-h-[10vh] flex justify-between px-7">
      {/* insert clever waffle pun here
      WHY ARE WEATHER WAFFLE PUNS SO HARD*/}
      <div className="flex flex-col justify-center text-s font-bold italic">
        waffle waffle waffle waffle waffle
      </div>

      <div className="flex items-center">
        <Link
          href={
            "https://www.youtube.com/watch?v=eDU0CTDMk2g&pp=ygULd2FmZmxlIHNvbmc%3D"
          }
          target="_blank"
        >
          {/*WHY DO THE SVGS NOT WORK FOR ME WHAT AM I DOING WRONG BROOOOOOO
          I know it goes here haha*/}
        </Link>
      </div>

      {/* wanted to add links to each of our names but could NOT get it to work LOL
    i.e. "Brinkley" would be a link to your LinkedIn or github or your portfolio or something
    and same for my name */}
      <div className="flex flex-col justify-center text-xs font-bold">
        Made by Brinkley and Michael
      </div>
    </footer>
  );
}
