// Different environments use different variables
const projectId = 'm93p5d26'
const dataset = 'production'

// Feel free to remove this check if you don't need it
if (!projectId || !dataset) {
  throw new Error(
    `Missing environment variable(s). Check if named correctly in .env file.\n\nShould be:\nPUBLIC_SANITY_STUDIO_PROJECT_ID=${projectId}\nPUBLIC_SANITY_STUDIO_DATASET=${dataset}\n\nAvailable environment variables:\n${JSON.stringify(
      import.meta.env,
      null,
      2
    )}`
  );
}

import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schema";

export default defineConfig({
  name: "project-name",
  title: "Project Name",
  projectId,
  dataset,
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
