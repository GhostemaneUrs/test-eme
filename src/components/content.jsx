import React from "react";
import Destacados from "./imagenes";

const Content = () => {
  return (
    <>
      <div className="container w-xl-1400">
        <div className="py-2 pl-2 pr-5 bg-blue d-inline-block mt-70">
          <span className="blue fz-25 space-regular">Some of our clients</span>
        </div>
        <div className="justify-content-center align-items-center d-flex">
          <img
            className="w-100"
            src="https://e-me.co/wp-content/uploads/2020/08/clientes-E-ME-una-tinta_24b60336eb19da66937f3ae0672030e2.png"
            alt=""
          />
        </div>
        <div>
          <div>
            <p className="blue-dark fz-50 mb-0 space-regular">Proyects you'll </p>
            <p className="blue-dark fz-50 mb-0 space-regular">
              instanly
              <span className="blue fz-50 space-regular"> crave</span>
            </p>
          </div>
        </div>
        <Destacados />
      </div>
    </>
  );
};
export default Content;
