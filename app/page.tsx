import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";
import { recentSessions } from "@/constants";
import React from "react";

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className="home-section">
        <CompanionCard
          id="123"
          name=" kfvh"
          topic="cdjnvj"
          subject="cdmjmj"
          duration="45"
          color="#ffda6e"
        />
        <CompanionCard
          id="234"
          name=" kfvh"
          topic="cdjnvj"
          subject="cdmjmj"
          duration="45"
          color="#ffda6e"
        />
        <CompanionCard
          id="345"
          name=" kfvh"
          topic="cdjnvj"
          subject="cdmjmj"
          duration="45"
          color="#ffda6e"
        />
      </section>

      <section className="home-section">
        <CompanionsList 
          title='Recently Completed Sessions'
          companions={recentSessions}
          classNames="w-2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
