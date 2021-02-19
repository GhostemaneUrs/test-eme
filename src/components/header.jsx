/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/role-supports-aria-props */
import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const bgmenu = useRef();
  const menu = useRef();
  const [toggle, setToggle] = useState(false);

  const onClickToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    if (toggle) {
      bgmenu.current.className = "bgmenu";
      menu.current.className = "menu-show";
      return;
    } else {
      bgmenu.current.className = "";
      menu.current.className = "menu-hidden";
    }
  }, [toggle]);

  return (
    <>
      <div className="menu-hidden" ref={menu}>
        <div className="d-flex flex-column espaciado">
          <div className="d-flex flex-row-reverse">
            <div className="icon black" onClick={onClickToggle}>
              <i className="fas fa-times"></i>
            </div>
          </div>
          <div className="d-flex flex-column">
            <ul className="navbar-nav">
              
            <div className="accordion" id="accordionExample">
              <div className="card br-none">
                <div className="card-header bg-white br-none" id="headingOne">
                  <h2 className="mb-0">
                    <a
                      className="Larsseit blue-menu fz-16 text-left text-uppercase"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Aprende Gratis
                    </a>
                  </h2>
                </div>

                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div className="card-body pt-2">
                    <a className="dropdown-item blue-menu fz-16 text-uppercase" href="#">
                      Estrategias
                    </a>
                    <a className="dropdown-item blue-menu fz-16 text-uppercase" href="#">
                      Recursos
                    </a>
                    <a className="dropdown-item blue-menu fz-16 text-uppercase" href="#">
                      Value Based Marketing
                    </a>
                  </div>
                </div>
              </div>
            </div>
              <li className="nav-item active px-20">
                <a className="nav-link" href="#">
                  <span className="Larsseit blue-menu fz-16 text-uppercase">Marketing</span>
                </a>
              </li>
              <li className="nav-item active px-20">
                <a className="nav-link" href="#">
                  <span className="Larsseit blue-menu fz-16 text-uppercase">e-commerce</span>
                </a>
              </li>
              <li className="nav-item px-20">
                <a className="nav-link" href="#">
                  <span className=" Larsseit blue-menu fz-16 text-uppercase">Apps</span>
                </a>
              </li>
              <li className="nav-item px-20">
                <a className="nav-link" href="#">
                  <span className="Larsseit blue-menu fz-16 text-uppercase">WebApps</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <header className="header">
        <div className=" container w-1400 d-flex justify-content-between align-items-center espaciado px-0">
          <div className="icon white col-4" onClick={onClickToggle} id="hamburguesa">
            {toggle ? (
              <i className="fas fa-times"></i>
            ) : (
              <i className="fas fa-bars"></i>
            )}
          </div>
         
          <div className="position-relative col-4 col-lg-3 d-flex icon-nav">
            <img
              id="eme"
              src="https://e-me.co/wp-content/uploads/elementor/thumbs/Group-4810-os4slg3n2gy9r5i7uyq5u29rcd0ycnf2vrg4ch1ld4.png"
              title="Group 4810"
              alt="Group 4810"
            />
          </div>

          <div className="d-flex col-4 col-custom d-flex justify-content-end">
            <ul className="navbar-nav flex-row" id="lista">
              <li className="nav-item dropdown white-a px-20 ">
                <a
                  className="nav-link dropdown-toggle white-a"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="Larsseit">Aprende Gratis</span>
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item black" href="#">
                    Estrategias
                  </a>
                  <a className="dropdown-item black" href="#">
                    Recursos
                  </a>
                  <a className="dropdown-item black" href="#">
                    Value Based Marketing
                  </a>
                </div>
              </li>
              <div className="barrita"></div>
              <li className="nav-item white-a active px-20">
                <a className="nav-link white-a" href="#">
                  <span className="Larsseit fz-14">Marketing</span>
                </a>
              </li>
              <li className="nav-item active white-a px-20">
                <a className="nav-link white-a" href="#">
                  <span className="Larsseit fz-14">e-commerce</span>
                </a>
              </li>
              <li className="nav-item white-a px-20">
                <a className="nav-link white-a" href="#">
                  <span className=" Larsseit fz-14">Apps</span>
                </a>
              </li>
              <li className="nav-item white-a px-20">
                <a className="nav-link white-a" href="#">
                  <span className="Larsseit fz-14">WebApps</span>
                </a>
              </li>
            </ul>
            <div className="d-flex align-items-center ml-0 ml-sm-5">
              <button className="button br-none py-1 px-2 px-md-4 fz-10 fz-sm-12 fz-md-16" id="botton">Inicia ahora</button>
            </div>
          </div>
        </div>
      </header>

      <div className="" ref={bgmenu}></div>
      <div className="bg-header container-content">
        <div className="justify-content-center align-items-center d-flex h-100 flex-column flex-lg-row  w-100">
          <div className="">
            <span className="fz-30 white monument">Marketing</span>
          </div>
          <i className="icono icono-plus"></i>
          <div className="pd-15">
            <span className="fz-30 white monument">e-commerce</span>
          </div>
          <i className="icono icono-plus"></i>
          <div className="pd-15 pl-0">
            <span className="fz-30 white monument">Desarrollo</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
