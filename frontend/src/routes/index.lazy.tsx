import { createLazyFileRoute } from "@tanstack/react-router";
import HeroSection from "@/components/HomePage/HeroSection.tsx";
// import TestimonialSection from "@/components/HomePage/TestimonialSection.tsx";
// import CaseStudiesSection from "@/components/HomePage/CaseStudiesSection.tsx";
// import InsightsSection from "@/components/HomePage/InsightsSection.tsx";
// import CallToActionSection from "@/components/HomePage/CallToActionSection.tsx";
import FooterSection from "@/components/HomePage/FooterSection.tsx";
import AboutSection from "@/components/HomePage/AboutSection.tsx";
import ServiceSection from "@/components/HomePage/ServiceSection.tsx";
import WhyChooseSection from "@/components/HomePage/WhyChooseSection";
import ProvidedServices from "@/components/HomePage/ProvidedServices";
import BannerSection from "@/components/HomePage/BannerSection";
import CertificationSection from "@/components/HomePage/CertificationSection";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative">
      <HeroSection />
      <div className=" w-full flex-col flex justify-center items-center h-full">
        <div className=" lg:max-w-[1490px] hmd:max-w-[890px] md:max-w-[790px] max-w-[590px] md:px-10 px-5 w-full h-fu">
          <AboutSection />
          <ServiceSection />
          <WhyChooseSection />
          <ProvidedServices />
          <BannerSection />
          <CertificationSection />
          {/* <BannerSection_2 /> */}
        </div>
        {/* <FooterSection /> */}
      </div>

      {/*<IntroductionSection />*/}
      {/*<FeatureSection />*/}
      {/*<MissionStatementSection />*/}
      {/*<StrategySection />*/}
      {/*<TestimonialSection/>*/}
      {/*<CaseStudiesSection/>*/}
      {/*<InsightsSection/>*/}
      {/*<CallToActionSection/>*/}
    </div>
  );
}
