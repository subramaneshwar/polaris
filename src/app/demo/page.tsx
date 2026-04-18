"use client";
import * as Sentry from "@sentry/nextjs";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { useAuth } from "@clerk/nextjs";

const DemoPage = () => {
  const { userId } = useAuth();
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);

  const handleBlocking = async () => {
    setLoading(true);
    await fetch("api/demo/blocking", { method: "POST" });
    setLoading(false);
  };
  const handleBackground = async () => {
    setLoading1(true);
    await fetch("api/demo/background", { method: "POST" });
    setLoading1(false);
  };

  const handleClientError = async () => {
    Sentry.logger.info("Triggering client error...", { userId });
    throw new Error("Client error: Something went wrong in the browser!");
  };

  const handleApiError = async () => {
    await fetch("api/demo/error", { method: "POST" });
  };

  const handleInngestError = async () => {
    console.log("Triggering Inngest error...");
    await fetch("api/inngest-error", { method: "POST" });
  };

  return (
    <div className="p-8 space-x-8">
      <Button onClick={handleBlocking}>
        {loading ? "Loading... " : "Blocking"}
      </Button>
      <Button onClick={handleBackground}>
        {loading1 ? "Loading... " : "background"}
      </Button>
      <Button onClick={handleClientError} variant="destructive">
        Client Error
      </Button>
      <Button onClick={handleApiError} variant="destructive">
        API Route Error
      </Button>
      <Button onClick={handleInngestError} variant="destructive">
        Inngest Function Error
      </Button>
    </div>
  );
};

export default DemoPage;
