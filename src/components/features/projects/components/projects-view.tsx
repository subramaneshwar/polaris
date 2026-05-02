"use client";

import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";
import { FaGithub } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { SparkleIcon } from "lucide-react";
import { Poppins } from "next/font/google";
import ProjectsList from "./projects-list";
import { useCreateProject } from "../hooks/use-projects";
import {
  adjectives,
  animals,
  colors,
  uniqueNamesGenerator,
} from "unique-names-generator";
import { useEffect, useState } from "react";
import { ProjectsCommandDialog } from "./project-command-dialog";

const fonts = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const ProjectsView = () => {
  const createProject = useCreateProject();
  const [commandDialog, setCommandDialog] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey) {
        if (e.key === "k") {
          e.preventDefault();
          setCommandDialog(true);
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);
  return (
    <>
      <ProjectsCommandDialog
        open={commandDialog}
        onOpenChange={setCommandDialog}
      />
      <div className="min-h-screen bg-sidebar flex flex-col items-center justify-center p-6 md:p-16">
        <div className="w-full max-w-sm mx-auto flex flex-col gap-4 items-center">
          <div className="flex justify-between gap-4 w-full items-center">
            <div className="flex items-center  gap-2 w-full group/logo">
              <img
                src="/vercel.svg"
                alt="Polaris Logo"
                className="size-8 md:size-11.5"
              />
              <h1
                className={cn(
                  "text-4xl md:text-6xl font-semibold",
                  fonts.className,
                )}
              >
                Polaris
              </h1>
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <div className="grid grid-cols-2 gap-2 ">
              <Button
                variant="outline"
                onClick={() => {
                  const projectName = uniqueNamesGenerator({
                    dictionaries: [adjectives, animals, colors],
                    separator: "-",
                    length: 3,
                  });

                  createProject({
                    name: projectName,
                  });
                }}
                className="h-full w-full  items-start justify-start p-4 bg-background border flex flex-col gap-6 rounded-none"
              >
                <div className="w-full flex items-center justify-between">
                  <SparkleIcon className="size-4" />
                  <Kbd className="bg-accent border">&#8984;J</Kbd>
                </div>
                <div>
                  <span className="text-sm">New</span>
                </div>
              </Button>
              <Button
                variant="outline"
                className="h-full w-full  items-start justify-start p-4 bg-background border flex flex-col gap-6 rounded-none"
              >
                <div className="w-full flex items-center justify-between">
                  <FaGithub className="size-4" />
                  <Kbd className="bg-accent border">&#8984;I</Kbd>
                </div>
                <div>
                  <span className="text-sm">Import</span>
                </div>
              </Button>
            </div>
            <ProjectsList onViewAll={() => setCommandDialog(true)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsView;
