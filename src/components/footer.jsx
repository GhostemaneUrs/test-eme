import React from "react";

const Footer = () => {
  return (
    <>
      <div className="img-back container-fluid mt-70 px-0">
        <div className="container w-1068 ">
          <p className="blue space fz-40 mb-0">Recursos Gratis </p>
          <div className="mt-3 py-2 pl-2 pr-5 bg-blue d-inline-block">
            <span className="blue space fz-40">talking about us</span>
            <span className="blue space fz-30 yellow"> ...</span>
          </div>
          <div>
            <div className="row mt-30">
              <div className="col-md-6">
                <div className="px-3">
                  <div className="d-flex">
                    <div className="mr-6">
                      <img
                        className="tm-36"
                        src="https://e-me.co/wp-content/uploads/2018/09/Imagen-14.png"
                        alt="Sempertex"
                      />
                    </div>
                    <cite className="d-flex flex-column justify-content-center">
                      <span className="space fz-14">Sempertex</span>
                      <span className="space-regular fz-12m">Susana Diaz</span>
                    </cite>
                  </div>
                  <hr className="mt-2 mb-2" />
                  <div>
                    <p className="space-regular m-0 fz-14">
                      "Las estadísticas hablan por si solas, nuestra página web
                      no solo pasó a ser más linda sino más práctica y muchísimo
                      más funcional para nuestros usuarios. Son más de 150.000
                      los seguidores en Instagram que gracias a sus estrategias
                      logramos ganar y este solo es el comienzo.”
                    </p>
                    <img
                      src="https://e-me.co/wp-content/uploads/2018/09/Enmascarar-grupo-2.png"
                      alt="Sempertex"
                    />
                  </div>
                </div>

                <div className="mt-40">
                  <div className="px-3">
                    <div className="d-flex">
                      <div className="mr-6">
                        <img
                          className="tm-36"
                          src="https://e-me.co/wp-content/uploads/2018/09/Imagen-1.png"
                          alt="Carnes Santacruz"
                        />
                      </div>
                      <cite className="d-flex flex-column justify-content-center">
                        <span className="space fz-14">Carnes Santacruz</span>
                        <span className="space-regular fz-12m">
                          Cristian Serrano
                        </span>
                      </cite>
                    </div>
                    <hr className="mt-2 mb-2" />
                    <div>
                      <p className="space-regular m-0 fz-14">
                        "Instagram pasó de ser un canal de cero ventas a nuestra
                        más importante fuente de ingreso, reto con el que
                        ninguna agencia se atrevió a comprometerse. No solo
                        crecieron nuestras ventas sino que fortalecieron
                        exponencialmente la relación con nuestros seguidores.”
                      </p>
                      <img
                        src="https://e-me.co/wp-content/uploads/2018/09/Logo-carnes-santacruz-final-01.png"
                        alt="Carnes Santacruz"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="align-items-center justify-content-center w-100 mt-5 mt-md-0">
                  <img
                    className="w-70"
                    src="https://e-me.co/wp-content/uploads/2020/07/Group-4814.png"
                    alt="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-content-center align-items-center d-flex mt-5">
        <p className="space-regular fz-20" id="referencia">
          e-me © 2020 | Todos los derechos reservados.
        </p>
      </div>
    </>
  );
};

export default Footer;
