import ProjectSection from "@/components/ProjectSection";

export const metadata = {
  title: "Working Papers",
};

export default async function Page() {
  return (
    <main className="md:w-[40rem] w-full m-auto px-8 mt-32 flex flex-col gap-10 mb-20">
      <h1 className="text-3xl font-semibold">Working Papers</h1>
      <ProjectSection />
    </main>
  );
}
