import AboutUsSection from "./AboutUsSection";
import BusinessSection from "./BusinessSection";
import ClientsSection from "./ClientsSection";
import CommentSection from "./CommentSection";
import CompanySection from "./CompanySection";
import ExploreSection from "./ExploreSection";
import ExtraInfoSection from "./ExtraInfoSection";
import FAQSection from "./FAQSection";
import Footer from "./Footer";
import HeaderNav from "./HeaderNav";
import InfoSection from "./InfoSection";
import MailSection from "./MailSection";
import ManageSection from "./ManageSection";
import RegisterKaroSection from "./RegisterKaroSection";
import ServicesSection from "./ServicesSection";
import VideoIntroSection from "./VideoIntroSection";
import WhySection from "./WhySection";

export default function Main() {
  return (
    <>
      <HeaderNav />
      <InfoSection />
      <BusinessSection />
      <ServicesSection />
      <AboutUsSection />
      <RegisterKaroSection />
      <VideoIntroSection />
      <ClientsSection />
      <ExtraInfoSection />
      <ExploreSection />
      <CommentSection />
      <FAQSection />
      <ManageSection />
      <WhySection />
      <MailSection />
      <CompanySection />
      <Footer />
    </>
  );
}
