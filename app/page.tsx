import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-24">
      <span className="text-5xl">Hola Mundo!!!</span>
      <Link href={"/about"}>Return to About Page</Link>
    </div>
  );
}
