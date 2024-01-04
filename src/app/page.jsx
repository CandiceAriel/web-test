import CafeList from "./cafeList";
import Navbar from "@/components/navbar";

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
