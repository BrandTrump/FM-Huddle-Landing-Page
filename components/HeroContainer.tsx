import React from "react";

function HeroContainer({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-bg-hero-mobile h-auto bg-no-repeat bg-cover md:bg-bg-hero-desktop md:h-auto bg-[#edfbfe]">
      {children}
    </main>
  );
}

export default HeroContainer;
