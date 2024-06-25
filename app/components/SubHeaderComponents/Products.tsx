import React from "react";
import "./Products.css";
import ButtonComponent from "../button.component";
function Products() {
  return (
    <div className="flex justify-start items-start gap-8 p-5 h-full rounded-[20px]">
      <div className="h-full w-[735px]">
        <h1 className="text-sm font-[500] text-textPrimary">Explore</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex justify-center items-center gap-4 w-[354px] h-[132px] p-1">
            <div className="bg-[#c5cae8] p-5 px-6 rounded-[20px]">
              <img
                src="/3d-viewer-white.svg"
                alt="3d-viewer"
                className="w-[36px] h-[36px]"
              />
            </div>
            <div>
              <h1 className="font-normal text-sm text-textPrimary">
                3D Viewer
              </h1>
              <p className="font-normal text-xxs text-left text-textSecondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 w-[354px] h-[132px] p-1">
            <div className="bg-[#c5cae8] p-5 px-6 rounded-[20px]">
              <img
                src="/3d-editor-white.svg"
                alt="3d-viewer"
                className="w-[36px] h-[36px]"
              />
            </div>
            <div>
              <h1 className="font-normal text-sm text-textPrimary">
                3D Editor
              </h1>
              <p className="font-normal text-xxs text-left text-textSecondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 w-[354px] h-[132px] p-1">
            <div className="bg-[#c5cae8] p-5 px-6 rounded-[20px]">
              <img
                src="/custom-assets-white.svg"
                alt="3d-viewer"
                className="w-[36px] h-[36px]"
              />
            </div>
            <div>
              <h1 className="font-normal text-sm text-textPrimary">
                Custom Assets
              </h1>
              <p className="font-normal text-xxs text-left text-textSecondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-4 w-[354px] h-[132px] p-1">
            <div className="bg-[#c5cae8] p-5 px-6 rounded-[20px]">
              <img
                src="/asset-library-white.svg"
                alt="3d-viewer"
                className="w-[36px] h-[36px]"
              />
            </div>
            <div>
              <h1 className="font-normal text-sm text-textPrimary">
                Asset Library
              </h1>
              <p className="font-normal text-xxs text-left text-textSecondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <ButtonComponent type="link" icon="/view-plans.svg">
            View plans
          </ButtonComponent>
          {/* <p className="font-normal text-xxs text-left text-textSecondary">View Plans</p>
          <div className="bg-[#c5cae8] p-5 px-6 rounded-[20px]">
            <img
              src="/view-plans.svg"
              alt="view-plans"
              className="w-[36px] h-[36px]"
            />
          </div> */}
        </div>
      </div>
      {/* <div className="products-sub-menu-right">
        <h1 className="font-normal text-sm text-textPrimary">Featured Projects</h1>
        <div className="project-container">
          <div className="project">
            <div className="rectangle" />
            <div className="project-details">
              <h1 className="font-normal text-sm text-textPrimary">Product Configurator</h1>
              <p className="font-normal text-xxs text-left text-textSecondary">Personalize Products in Real Time</p>
            </div>
          </div>
          <div className="project">
            <div className="rectangle" />
            <div className="project-details">
              <h1 className="font-normal text-sm text-textPrimary">Product Configurator</h1>
              <p className="font-normal text-xxs text-left text-textSecondary">Personalize Products in Real Time</p>
            </div>
          </div>
        </div>
        <div className="products-sub-menu-button">
          <p className="font-normal text-xxs text-left text-textSecondary">View More</p>
          <img src="/view-plans.svg" alt="view-plans" />
        </div>
      </div> */}
    </div>
  );
}

export default Products;
