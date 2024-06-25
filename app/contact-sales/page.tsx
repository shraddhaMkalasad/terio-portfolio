import React from "react";
import _styles from "@/styles/page.module.css";
import styles from "@/styles/pages/contactsales/contact-sales.module.css";
import StartYourFreeDemoToday from "./start-your-free-demo-today";
import Layout from "../components/layout.component";
import ButtonComponent from "../components/button.component";
import MokobaraTestimonialComponent from "./mokobara";
import DropDownComponent from "../components/DropDownComponent";

function ContactSalesPages() {
  return (
    <main>
      <StartYourFreeDemoToday />
      <div style={{ background: "url(/gradient-bg.svg)" }}>
        <Layout >
          <MokobaraTestimonialComponent />
        </Layout>
      </div>
    </main>
  );
}
export default ContactSalesPages;
