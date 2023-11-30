import Portfolio from "@/components/portfolio/portfolio";
import { groq } from "next-sanity";
import { client } from "@/utils/configSanity";

export default async function Home() {
  const query = groq`*[_type == "gallery"]{
    image,
    _id,
    alt,
  } | order(_updatedAt asc)`;

  const data = await client.fetch(query);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <Portfolio data={data} />
      </main>
    </>
  );
}
