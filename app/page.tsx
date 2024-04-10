import HotelForm from "@/components/HotelForm";

export default function Home() {
  return (
    <main>
      <div className=" text-center py-10  ">
        <h1 className="text-2xl lg:text-4xl uppercase underline py-10">
          Welcome to hotel booking Portal
        </h1>
        <p>Fill this form to add hotel details</p>
      </div>
      <HotelForm />
    </main>
  );
}
