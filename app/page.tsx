import HeroSection from "@/components/home/HeroSection";
import FeaturedProperties from "@/components/FeaturedProperties";
import AboutSection from "@/components/home/AboutSection";
import CtaBanner from "@/components/CtaBanner";

export default function page(){
  return(
    <>
    <HeroSection />
    <FeaturedProperties />
    <AboutSection />
    <CtaBanner />
    </>
  )
}