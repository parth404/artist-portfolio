import { groq } from "next-sanity";
import { client } from "@/utils/configSanity";

export default async function About() {
  const aboutQuery = groq`*[_type == "about"]{
    ...,
    title,
    education,
    connect,
  } | order(_updatedAt asc)`;

  const expQuery = groq`*[_type == "experience"] | order(_updatedAt asc)`;

  const about = await client.fetch(aboutQuery);
  const experience = await client.fetch(expQuery);

  return (
    <main className="pt-48 px-10 md:pt-40 md:px-20 bg-black font-halyard text-sm md:text-[16px] flex min-h-screen flex-col  justify-center">
      <div className="flex flex-col md:flex-row justify-center gap-8 md:max-w-screen-xl">
        <div className="w-1/2 md:text-right font-halyard uppercase tracking-wider text-sm md:text-[15px] font-bold">
          <h1>{about[0].title}</h1>
        </div>
        <div className="md:w-1/2 text-left">
          <h1>{about[0].description[0].children[0].text}</h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-8 md:max-w-screen-xl pt-20">
        <div className="w-1/2 md:text-right font-halyard uppercase tracking-wider text-sm md:text-[15px] font-bold">
          <h1>education</h1>
        </div>
        <div className="md:w-1/2 text-left">
          <h1>{about[0].education}</h1>
        </div>
      </div>
      {experience.map((exp: any) => (
        <div className="flex flex-col md:flex-row justify-center gap-8 md:max-w-screen-xl pt-20">
          <div className="md:w-1/2 md:text-right font-halyard uppercase tracking-wider text-sm md:text-[15px] font-bold">
            <h1>{exp.company}</h1>
          </div>
          <div className="md:w-1/2 md:text-left">
            <h1>{exp.description[0].children[0].text}</h1>
          </div>
        </div>
      ))}
      <div className="flex flex-col md:flex-row justify-center gap-8 md:max-w-screen-xl py-20">
        <div className="md:w-1/2 md:text-right font-halyard uppercase tracking-wider text-sm md:text-[15px] font-bold">
          <h1>connect</h1>
        </div>
        <div className="md:w-1/2 md:text-left hover:underline">
          <a href={`mailto:${about[0].connect}`}>{about[0].connect}</a>
        </div>
      </div>
    </main>
  );
}
