import Hero from "@/components/Hero";
import HomeAbout from "@/components/HomeAbout";
import HomeActivities from "@/components/HomeActivities";
import HomeEvents from "@/components/HomeEvents";
import GallerySection from "@/components/GallerySection";
import HomeCTA from "@/components/HomeCTA";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeAbout />
      <HomeActivities />
      <HomeEvents />
      <GallerySection />
      <TestimonialsSection />
      <HomeCTA />
    </>
  );
}
