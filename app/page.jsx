import Date from "./components/date";

export default function Home() {
 const name = "Brinkley";
 return (
  <main className="min-h-[80vh] bg-blue-900">
   <h1>Hello, {name}!</h1>
   <Date />
  </main>
 );
}
