import CafeList from "./CafeList.jsx";
import Navbar from "@/components/navbar.jsx";

export default async function Home() {

  return (
    <main className='base__container'>
      <Navbar />
      <div className="container__main">
        <section className='base__section section__popular'>
          <CafeList />
        </section>
      </div>
      
    </main>
  )
}
