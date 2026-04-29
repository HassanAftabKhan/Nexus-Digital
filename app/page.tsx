import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import LogoBar from "@/components/home/LogoBar";
import ServicesSection from "@/components/home/ServicesSection";
import ProcessSection from "@/components/home/ProcessSection";
import ResultsSection from "@/components/home/ResultsSection";
import CaseStudies from "@/components/home/CaseStudies";
import PricingSection from "@/components/home/PricingSection";
import TeamSection from "@/components/home/TeamSection";
import Testimonials from "@/components/home/Testimonials";
import WhyUsSection from "@/components/home/WhyUsSection";
import FAQSection from "@/components/home/FAQSection";
import BlogTeaser from "@/components/home/BlogTeaser";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = generatePageMetadata(
  "Nexus Digital — Full-Service Digital Marketing Agency",
  "Award-winning digital agency delivering measurable growth through SEO, paid ads, web development, and content. 500+ brands scaled. Google & Meta certified. Book a free audit today.",
  "/"
);

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <LogoBar />
        <ServicesSection />
        <ProcessSection />
        <ResultsSection />
        <CaseStudies />
        <PricingSection />
        <TeamSection />
        <Testimonials />
        <WhyUsSection />
        <FAQSection />
        <BlogTeaser />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
