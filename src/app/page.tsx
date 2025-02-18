import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import { ImageGrid } from "@/components/ImageGrid";
import { ThemeProvider } from "next-themes";

import { benefitOne } from "@/components/data";
export default function Home() {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      themes={["dark"]}
    >
      <Container>
        <Hero />
        <SectionTitle
          preTitle="CosmoSnap"
          title=" Why should you use this App?"
        >
          Embark on a celestial journey with CosmoSnap, your daily window to the
          universe's most breathtaking wonders. From spectacular nebulae to
          distant galaxies, experience NASA's handpicked astronomical marvels
          with detailed explanations from expert astronomers. Let the cosmos
          inspire your daily life!
        </SectionTitle>

        <Benefits data={benefitOne} />
        {/* <Benefits imgPos="right" data={benefitTwo} />    */}

        <ImageGrid />
        {/* 
      <SectionTitle
        preTitle="Watch a video"
        title="Learn how to fullfil your needs"
      >
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>

      <Video videoId="fZ0D0cnR88E" /> */}

        {/* <SectionTitle
        preTitle="Testimonials"
        title="Here's what our customers said"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>

      <Testimonials /> */}

        {/* <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>

      <Faq /> */}
        <Cta />
      </Container>
    </ThemeProvider>
  );
}
