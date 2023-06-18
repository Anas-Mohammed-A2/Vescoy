import React, { useState } from "react";
// import Style
import "../Css/Home.css";
// imgs
import imgAbout from "../imgs/home/about-1.jpg";
import imgAboutt from "../imgs/home/about-2.jpg";
import imgWhe from "../imgs/home/image-2.png";
// import Liprary
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { Container, Row, Col, ProgressBar } from "react-bootstrap";
import "remixicon/fonts/remixicon.css";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
const Home = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div className="Bodyy">
      {/*Start SecHome*/}
      <section className="SecHome">
        <Container>
          <Row>
            <Col
              xxl={6}
              xl={6}
              lg={6}
              md={12}
              sm={12}
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <div className="LeftHome">
                <p>أفضل خدمة لوجستية في العالم</p>
                <h1>
                  تجربة
                  <br />
                  أفضل الخدمات اللوجستية &
                  <br />
                  ينقل
                </h1>
                <button className="BtnHome1">
                  {" "}
                  <span>تعرف علينا أكثر</span>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/*End SecHome*/}

      {/* Start SecServices */}
      <section className="SecServices">
        <Container>
          <div className="TitleSec">
            <h1 className="H1TitleSec hvr-shutter-in-horizontal">
              شحن سريع وموثوق
            </h1>
          </div>
          <Row>
            <Col
              xxl={4}
              xl={4}
              lg={4}
              md={12}
              sm={12}
              data-aos-duration="1500"
              data-aos-easing="linear"
              data-aos="fade-left"
            >
              <div className="Card1">
                <span className="SpanCardy"></span>
                <span className="SpanCardy"></span>
                <span className="SpanCardy"></span>
                <span className="SpanCardy"></span>

                <div className="content">
                  <h2>شحن جوي</h2>{" "}
                  <p>
                    حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء سيلهي القارئ
                    عن التركيز.
                  </p>
                  <button class="btnn">يتعلم أكثر</button>
                </div>
              </div>
            </Col>
            <Col
              xxl={4}
              xl={4}
              lg={4}
              md={12}
              sm={12}
              data-aos-duration="1500"
              data-aos-easing="linear"
              data-aos="fade-up"
            >
              <div className="Card2">
                <span className="SpanCardy"></span>
                <span className="SpanCardy"></span>
                <span className="SpanCardy"></span>
                <span className="SpanCardy"></span>

                <div className="content">
                  <h2>شحن بحري </h2>
                  <p>
                    حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء سيلهي القارئ
                    عن التركيز.
                  </p>
                  <button class="btnn">يتعلم أكثر</button>
                </div>
              </div>
            </Col>
            <Col
              xxl={4}
              xl={4}
              lg={4}
              md={12}
              sm={12}
              data-aos-duration="1500"
              data-aos-easing="linear"
              data-aos="fade-right"
            >
              <div className="Card3">
                <span className="SpanCardy"></span>
                <span className="SpanCardy"></span>
                <span className="SpanCardy"></span>
                <span className="SpanCardy"></span>

                <div className="content">
                  <h2>شحن بري</h2>
                  <p>
                    حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء سيلهي القارئ
                    عن التركيز.
                  </p>
                  <button class="btnn">يتعلم أكثر</button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* End SecServices */}

      {/* Start SecAbout */}

      <section className="SecAbout">
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <Container>
            <Row>
              <Col
                xxl={3}
                xl={3}
                lg={3}
                md={12}
                sm={12}
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                <div className="CardCont">
                  <h1 className="ConterNum">
                    +{" "}
                    {counterOn && (
                      <CountUp start={0} end={25} duration={2} delay={1} />
                    )}
                  </h1>
                  <h3 className="NameConter">سنوات من الخبرة</h3>
                </div>
              </Col>
              <Col
                xxl={3}
                xl={3}
                lg={3}
                md={12}
                sm={12}
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                <div className="CardCont2">
                  <h1 className="ConterNum">
                    +{" "}
                    {counterOn && (
                      <CountUp start={0} end={90} duration={2} delay={1} />
                    )}
                  </h1>
                  <h3 className="NameConter">مكتب البلدان</h3>
                </div>
              </Col>
              <Col
                xxl={3}
                xl={3}
                lg={3}
                md={12}
                sm={12}
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                <div className="CardCont2">
                  <h1 className="ConterNum">
                    +k
                    {counterOn && (
                      <CountUp start={0} end={17} duration={2} delay={1} />
                    )}{" "}
                  </h1>
                  <h3 className="NameConter">مجموع العاملين</h3>
                </div>
              </Col>
              <Col
                xxl={3}
                xl={3}
                lg={3}
                md={12}
                sm={12}
                data-aos="zoom-in"
                data-aos-easing="linear"
                data-aos-duration="500"
              >
                <div className="CardCont2">
                  <h1 className="ConterNum">
                    +
                    {counterOn && (
                      <CountUp start={0} end={50} duration={2} delay={1} />
                    )}{" "}
                  </h1>
                  <h3 className="NameConter">الجوائز العالمية</h3>
                </div>
              </Col>
            </Row>
          </Container>
        </ScrollTrigger>
      </section>

      <section className="SecAbout2">
        <Container>
          <Row>
            <Col xxl={5} xl={5} lg={5} md={12} sm={12}>
              <div className="ParentDivImgs">
                <img src={imgAbout} alt="userImg" className="ImgAboutt" />
                <img src={imgAboutt} alt="userImg" className="ImgAboutTow" />
              </div>
            </Col>
            <Col xxl={7} xl={7} lg={7} md={12} sm={12}>
              <div className="divTextAboutSec">
                <h1 className="TitleAboutSec">
                  نمنحك سيطرة كاملة على الشحنات.
                </h1>
                <div className="DivTextAbputSec">
                  <div className="TexTPrgraf">
                    <span className="Spany">
                      عملياتنا حول العالم وعبر مختلف القطاعات الصناعية.
                    </span>
                    <p className="TextInAbout">
                      نحن ندعم بقوة مشاركة أفضل الممارسات عبر عملياتنا حول
                      العالم وعبر مختلف القطاعات الصناعية.
                    </p>
                  </div>

                  <div className="divNumAboutSec2">
                    <h1 className="NumDivAboutSec">+25</h1>

                    <span className="DivAboutSecText">سنوات من الخبرة</span>
                  </div>
                </div>
                <div className="UserDivAText">
                  <div className="UserDiv">
                    <div className="ImgUsers">
                      <img
                        src="https://kodesolution.com/html/2023/transpress-html/images/resource/avatar.jpg"
                        alt="UserImg"
                        className="UserImg"
                      />
                    </div>
                    <div className="Textt">
                      <h4>ميتا ووكر</h4>
                      <p>الرئيس التنفيذي لشركة كنولوجي</p>
                      <img
                        src="https://kodesolution.com/html/2023/transpress-html/images/resource/sign.png"
                        alt="userImg"
                      />
                    </div>
                  </div>
                  <div className="Staps">
                    <div className="Stap">
                      <i class="fa fa-arrow-alt-circle-left"></i>
                      <p className="textStep">حل المشكلات المعقدة</p>
                    </div>
                    <div className="Stap">
                      <i class="fa fa-arrow-alt-circle-left"></i>
                      <p className="textStep">نحن نضمن خدمة موثوقة.</p>
                    </div>
                    <div className="Stap">
                      <i class="fa fa-arrow-alt-circle-left"></i>
                      <p className="textStep">خبراء في مجالات التكنولوجيا</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* End SecAbout */}
      {/*Start  SecwhyChoose */}
      <section className="SecwhyChoose">
        <Container>
          <Row>
            <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
              <h1 className="TitleSecwhyChoose">نحن خدمة لوجستية مهنية</h1>
              <p className="TextSecwhyChoose">
                نحن ندعم بقوة مشاركة أفضل الممارسات عبر عملياتنا في جميع <br />
                أنحاء العالم وعبر مختلف القطاعات الصناعية
              </p>
              <div className="DivSkell">
                <span className="TextDivSkell">80%</span>
                <span className="NameDivSkell">شحن</span>
                <span className="DivSkelle"></span>
              </div>
              <div className="DivSkell">
                <span className="TextDivSkell">90%</span>
                <span className="NameDivSkell">الإدارة</span>
                <span className="DivSkelleTow"></span>
              </div>
            </Col>
            <Col xxl={6} xl={6} lg={6} md={12} sm={12}>
              <img src={imgWhe} alt="0000" className="ImgWhy" />
            </Col>
          </Row>
        </Container>
      </section>
      {/* End SecwhyChoose */}
      {/*Start  SecSteps  */}
      <section className="SecSteps">
        <Container>
          <div className="TitleSec">
            <h1 className="H1TitleSec hvr-shutter-in-vertical">
              خطوات سهلة لتوصيل المنتجات
            </h1>
          </div>
          <Row>
            <Col xxl={4} xl={4} lg={4} md={12} sm={12}>
              <div className="CardStep">
                <div className="CardStepShadow"></div>
                <h1 className="NumCardStep">01</h1>
                <div className="DivTextStep">
                  <i className="fa-regular fa-clock IconOne"></i>
                  <span className="SpanyStep">التسليم في الوقت المحدد</span>
                </div>
              </div>
            </Col>
            <Col xxl={4} xl={4} lg={4} md={12} sm={12}>
              <div className="CardStep">
                <div className="CardStepShadow"></div>
                <h1 className="NumCardStep">02</h1>
                <div className="DivTextStep">
                  <i class="ri-shield-line IconOne"></i>
                  <span className="SpanyStep">أمان مضمون</span>
                </div>
              </div>
            </Col>
            <Col xxl={4} xl={4} lg={4} md={12} sm={12}>
              <div className="CardStep">
                <div className="CardStepShadow"></div>
                <h1 className="NumCardStep">03</h1>
                <div className="DivTextStep">
                  <i class="ri-money-dollar-box-fill"></i>
                  <span className="SpanyStep">التسعير الثابت</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* End SecSteps */}
    </div>
  );
};

export default Home;
