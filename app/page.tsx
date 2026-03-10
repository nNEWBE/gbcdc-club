import Hero from "@/components/Hero";
import HomeAbout from "@/components/HomeAbout";
import HomeActivities from "@/components/HomeActivities";
import HomeEvents from "@/components/HomeEvents";
import HomeRecentEvents from "@/components/HomeRecentEvents";
import HomeNews from "@/components/HomeNews";
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
      <HomeRecentEvents />
      <HomeNews />
      <GallerySection />
      <TestimonialsSection />
      <HomeCTA />
    </>
  );
}
