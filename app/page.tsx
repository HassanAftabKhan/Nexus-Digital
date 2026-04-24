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
import Testimonials from "@/components/home/Testimonials";
import WhyUsSection from "@/components/home/WhyUsSection";
import BlogTeaser from "@/components/home/BlogTeaser";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = generatePageMetadata(
  "Nexus Digital — Digital Marketing Agency",
  "Full-service digital marketing agency offering website development, SEO, social media management, Google Ads, and graphic design. Get a free audit today.",
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
        <Testimonials />
        <WhyUsSection />
        <BlogTeaser />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
