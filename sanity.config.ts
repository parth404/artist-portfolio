import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./src/app/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: "Nishant_Content_Studio",
  title: "Nishant Content Studio",
  projectId,
  dataset,
  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
});
