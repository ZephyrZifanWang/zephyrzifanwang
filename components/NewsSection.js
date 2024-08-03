import React from "react";
import NewsMd from "@/data/home/News.mdx";

export default function NewsSection() {
  return (
    <section className="flex flex-col gap-3">
      <h1 className="text-1.5xl font-semibold">Research Interest</h1>
      <NewsMd />
    </section>
  );
}
