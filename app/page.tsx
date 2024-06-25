import Image from "next/image";
import HeroSectionComponent from "./components/hero-section.component";
import TestinomialComponent from "./components/testinomial.component";
import { CompanySectionComponent } from "./components/company-section.component";
import ProductSectionComponent from "./components/product-section.componenr";
import Layout from "./components/layout.component";
import ContactUsSectionComponent from "./components/contactus-section.component";

export default function page() {
  return (
    <main >
      <HeroSectionComponent/>
      <Layout>
      {/* <TestinomialComponent/> */}
      <CompanySectionComponent/>
      </Layout>
      <ProductSectionComponent/>
      <Layout>
      <ContactUsSectionComponent/>
      </Layout>
    </main>
  );
}
