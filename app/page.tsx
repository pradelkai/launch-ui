import CTA from "../components/sections/cta/default";
import FAQ from "../components/sections/faq/default";
import Footer from "../components/sections/footer/default";
import Hero from "../components/sections/hero/default";
import Items from "../components/sections/items/default";
import Logos from "../components/sections/logos/default";
import Navbar from "../components/sections/navbar/default";
import Pricing from "../components/sections/pricing/default";
import Stats from "../components/sections/stats/default";
import Feature from "../components/sections/feature/illustration-top";
import BentoGrid from "@/components/sections/bento-grid/2-rows-bottom";
import RippleIllustration from "@/components/illustrations/ripple";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen w-full overflow-hidden">
      <Navbar />
      <Hero
        title="Turn meetings into insights and busywork into done."
        description="Meet Superdone, your project copilot. Ask anything. Automate everything."
        badge={false}
        buttons={[
          {
            text: "Get early access",
            href: "https://superdone.com/waitlist",
          },
          {
            text: "Learn more",
            href: "https://superdone.com/waitlist",
            variant: "glow",
          },
        ]}
      />
      <BentoGrid
        title="Access deep insights about your projects from data you generate every day."
        description="Superdone analyzes your meeting and project data from multiple sources to provide access to insights you've never had before."
      />
      <Feature
        title="Project insights you have never had access before"
        description="We're building the future of project management. Join the waitlist to get early access to our product."
      />
      {/* <Logos /> */}
      <Items />
      {/* <Stats /> */}
      {/* <Pricing
        title="Pricing"
        description="Superdone is free to use for up to 100 users. For more than 100 users, please contact us."
      /> */}
      {/* <FAQ /> */}
      <CTA
        title="Get early access"
        description="We're building the future of project management. Join the waitlist to get early access to our product."
        buttonText="Get early access"
        buttonLink="https://superdone.com/waitlist"
      />
      <Footer />
    </main>
  );
}
