import { useState } from "react"
import Header from "./components/Header"
import HeroSection from "./components/sections/HeroSection"
import QuickSummarySection from "./components/sections/QuickSummarySection"
import WhyCarInsuranceMandatorySection from "./components/sections/WhyCarInsuranceMandatorySection"
import CoverageSection from "./components/sections/CoverageSection"
import ChooseRightPolicySection from "./components/sections/ChooseRightPolicySection"
import PremiumFactorsSection from "./components/sections/PremiumFactorsSection"
import CalculatePremiumSection from "./components/sections/CalculatePremiumSection"
import GetQuoteOnlineSection from "./components/sections/GetQuoteOnlineSection"
import ReduceCarPremiumSection from "./components/sections/ReduceCarPremiumSection"
import PayAsYouUseSection from "./components/sections/PayAsYouUseSection"
import BuyOnlineSection from "./components/sections/BuyOnlineSection"
import DownloadPolicySection from "./components/sections/DownloadPolicySection"
import RenewEarlySection from "./components/sections/RenewEarlySection"
import OptionalAddOnsSection from "./components/sections/OptionalAddOnsSection"
import NoClaimBonusSection from "./components/sections/NoClaimBonusSection"
import RenewalBenefitsSection from "./components/sections/RenewalBenefitsSection"
import RenewOnlineSection from "./components/sections/RenewOnlineSection"
import FileClaimOnlineSection from "./components/sections/FileClaimOnlineSection"
import CashlessClaimSection from "./components/sections/CashlessClaimSection"
import ClaimDocumentsSection from "./components/sections/ClaimDocumentsSection"
import ClaimRejectionReasonsSection from "./components/sections/ClaimRejectionReasonsSection"
import LocateUsSection from "./components/sections/LocateUsSection"
import InsuranceTerminologiesSection from "./components/sections/InsuranceTerminologiesSection"
import MoreArticlesSection from "./components/sections/MoreArticlesSection"
import FaqSection from "./components/sections/FaqSection"
import ReviewRatingSection from "./components/sections/ReviewRatingSection"
import PopularSearchesSection from "./components/sections/PopularSearchesSection"
import ProductDisclosureSection from "./components/sections/ProductDisclosureSection"
import DisclaimerSection from "./components/sections/DisclaimerSection"
import Footer from "./components/Footer"
import LoginModal from "./components/LoginModal"

export default function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)
  return (
    <div
      className="bg-white content-stretch flex flex-col items-start relative size-full"
      data-name="1440- w light"
    >
      <Header onLoginClick={() => setIsLoginOpen(true)} />
      <HeroSection />
      <QuickSummarySection />
      <WhyCarInsuranceMandatorySection />
      <CoverageSection />
      <ChooseRightPolicySection />
      <PremiumFactorsSection />
      <CalculatePremiumSection />
      <GetQuoteOnlineSection />
      <ReduceCarPremiumSection />
      <PayAsYouUseSection />
      <BuyOnlineSection />
      <DownloadPolicySection />
      <RenewEarlySection />
      <OptionalAddOnsSection />
      <NoClaimBonusSection />
      <RenewalBenefitsSection />
      <RenewOnlineSection />
      <FileClaimOnlineSection />
      <CashlessClaimSection />
      <ClaimDocumentsSection />
      <ClaimRejectionReasonsSection />
      <LocateUsSection />
      <InsuranceTerminologiesSection />
      <MoreArticlesSection />
      <FaqSection />
      <ReviewRatingSection />
      <PopularSearchesSection />
      <ProductDisclosureSection />
      <DisclaimerSection />
      <Footer />
      <LoginModal open={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  )
}
