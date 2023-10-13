import Date from "./components/date";

export default function Home() {
 const name = "Brinkley";
 return (
  <main>
   <h1>Hello, {name}!</h1>
   <Date />
  </main>
 );
}
