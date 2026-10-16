import PageContainer from '../../../components/layout/PageContainer';
import HeroSection from '../components/HeroSection';
import PromoGrid from '../components/PromoGrid';
import OpportunitiesCarousel from '../components/OpportunitiesCarousel';
import PartnersSection from '../components/PartnersSection';
import FAQSection from '../components/FAQSection';
import ConversationSection from '../components/ConversationSection';

export function HomePage() {
  return (
    <PageContainer>
      <HeroSection />
      <PromoGrid />
      <OpportunitiesCarousel />
      <PartnersSection />
      <FAQSection />
      <ConversationSection />
    </PageContainer>
  );
}

export default HomePage;
