"useClient";

import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";

import Image from "next/image";

interface HomeProps  {
  params: {
    manufacturer: string
    year: number
    fuel: string
    model: string
    limit: number
  }
}
export default async function Home({ params }: HomeProps) {
  const allCars = await fetchCars({ 
    manufacturer: params.manufacturer || '',
    year: params.year || 2022, 
    fuel: params.fuel || '',
    model: params.model || '',
    limit: params.limit || 10,
   });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length <1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p className="text-lg mt-4">
            Discover the best cars in Kenya!</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels}/>
            <CustomFilter title="year" options={yearsOfProduction}/>
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ): (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results found</h2>
            <p>{allCars?.message}</p>
          </div>
        )}

      </div>
    </main>
  )
}
