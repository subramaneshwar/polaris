"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";

const DemoPage = () => {
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
  return (
    <div className="p-8 space-x-8">
      <Button onClick={handleBlocking}>
        {loading ? "Loading... " : "Blocking"}
      </Button>
      <Button onClick={handleBackground}>
        {loading1 ? "Loading... " : "background"}
      </Button>
    </div>
  );
};

export default DemoPage;
