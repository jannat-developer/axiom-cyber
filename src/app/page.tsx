
import CyberSecuritySolution from "@/components/CyberSecuritySolution";
import Banner from "../components/Banner";
import NavBarBanner from "../components/NavBarBanner"
import CybersecuritySlider from "@/components/CybersecuritySlider";
import CyberThreatProtection from "@/components/CyberThreatProtection";


export default function Home() {
  return (
    <div className="bg-black ">
      {/* <Navbar></Navbar> */}
      <NavBarBanner />
      <Banner />
      <CyberSecuritySolution />
      <CybersecuritySlider />
      <CyberThreatProtection />
    </div>
  );
}
