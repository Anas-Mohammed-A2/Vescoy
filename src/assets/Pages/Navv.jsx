import React, { useState } from "react";
// style
import "../Css/Navv.css";
import "../Css/hover-min.css"
// import laiparay
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

const Navv = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="Bodyy">
      <nav className="NavBarr">
        <div className="imgLogoNAVD">
          <img src="../imgs/logos/viabox (2).png" className="LogoNav" />
        </div>

        <div className="Linkes">
          <Link to="#3" className="linko hvr-underline-from-center">
            الصفحة الرئيسية
          </Link>
          <Link to="#3" className="linko hvr-underline-from-center">
            معلومات عنا
          </Link>
          <Link to="#3" className="linko hvr-underline-from-center">
            المشاريع
          </Link>
          <Link to="#3" className="linko hvr-underline-from-center">
            التسعير
          </Link>
          <Link to="#3" className="linko hvr-underline-from-center">
            خدماتنا
          </Link>
          <Link to="#3" className="linko hvr-underline-from-center">
            اتصل بنا
          </Link>
        </div>
        <div className="menuBarrr">
          <Button variant="primary" onClick={handleShow} className="menuBarrr">
            Launch
          </Button>

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>
                <img
                  src="../imgs/logos/viabox (2).png"
                  alt="Logomenu"
                  className="logoMenu"
                />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="LinkesMenu">
                <Link to="#3">الصفحة الرئيسية</Link>
                <Link to="#3">معلومات عنا</Link>
                <Link to="#3">المشاريع</Link>
                <Link to="#3">التسعير</Link>
                <Link to="#3">خدماتنا</Link>
                <Link to="#3" className="linko">
                  اتصل بنا
                </Link>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </nav>
    </div>
  );
};

export default Navv;
