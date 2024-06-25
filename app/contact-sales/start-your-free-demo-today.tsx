import styles from "@/styles/pages/contactsales/start-your-free-demo-today.module.css";

export default function StartYourFreeDemoToday() {
  return (
    <div className="flex flex-col justify-center w-full"
    style={{
      backgroundColor:
        "var(--color-background-quaternary)",
    }}>
      {/* <div className={styles.sbuContainerPath}>
                <p>Home <img src="/arrow-contact-sales.svg" alt="" /> Contact Sales</p>
            </div> */}
      <div className="flex h-[350px] flex-col justify-center text-center ">
        <h1>Start Your Free Demo Today!</h1>
        <p className="font-normal px-md py-xs lg:p-[0] lg:mt-xs text-[12px] lg:text-xs text-[#464646] text-center">
          Unlock the full potential of immersive shopping with Triorama&rsquo;s
          3D Viewer.{" "}
        </p>
        <p className="font-normal text-[12px] px-md py-x lg:pt-[0] lg:text-xs text-[#464646] text-center">
          Our AI-driven platform empowers your brand to engage customers like
          never before.
        </p>
      </div>
    </div>
  );
}
