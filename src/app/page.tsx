
import CyberSecuritySolution from "@/components/CyberSecuritySolution";
import Banner from "../components/Banner";
import NavBarBanner from "../components/NavBarBanner"
import CybersecuritySlider from "@/components/CybersecuritySlider";
import CyberThreatProtection from "@/components/CyberThreatProtection";
import PricingPlan from "@/components/PricingPlan";
import ClientSay from "@/components/ClientSay";
import CustomPlan from "@/components/CustomPlan";
import Footer from "@/components/shared/Footer";
import BottomFooter from "@/components/shared/BottomFooter";


export default function Home() {
  return (
    <div className="bg-black ">
      {/* <Navbar></Navbar> */}
      <NavBarBanner />
      <Banner />
      <CyberSecuritySolution />
      <CybersecuritySlider />
      <CyberThreatProtection />
      <PricingPlan></PricingPlan>
      <ClientSay></ClientSay>
      <CustomPlan></CustomPlan>
      <Footer></Footer>
      <BottomFooter />
    </div>
  );
}
