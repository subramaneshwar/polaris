"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Button } from "@/components/ui/button";

export default function Home() {
  const projects = useQuery(api.projects.get);
  const createProject = useMutation(api.projects.createProject);
  return (
    <main className="flex min-h-screen flex-col items-center gap-4  p-24">
      <Button onClick={()=>createProject({
        name:"newProject"
      })}>
        Add New
      </Button>
      <div>
        {projects?.map((project) => (
          <div key={project._id}>
            {project.name} -- {project.ownerId}
          </div>
        ))}
      </div>
    </main>
  );
}
