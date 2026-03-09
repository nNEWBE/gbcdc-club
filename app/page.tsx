import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import EventsSection from "@/components/EventsSection";
import TeamSection from "@/components/TeamSection";
import GallerySection from "@/components/GallerySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ActivitiesSection />
      <EventsSection />
      <TeamSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
