import { Col, Row } from "antd";
import React from "react";
import ReactTypingEffect from "react-typing-effect";

export const SectionMain = (props) => {
  const size = "10px";
  const color = "black";
  return (
    <div className="section-main" id="id">
      <Row>
        <Col xs={24} sm={24} md={18} lg={10}>
          <h3 className="phones"> КОНТАКТЫ <br /> +998 95 196 6663 <br /> +998 90 902 2262</h3>
          <h1 className="header">ОДИН БРЕНД ВСЕ ГРАНИ ФИТНЕСА</h1>
          <ReactTypingEffect
            speed={40}
            eraseSpeed={10}
            typingDelay={1500}
            text={[
              "Самая низкая стоимость владения оборудованием в индустрии",
              "Лучшие условия приобретения от одного из лидеров рынка",
              "Выбор крупнейших операторов фитнеса по всему миру",
            ]}
            cursor={""}
            displayTextRenderer={(text, i) => {
              return (
                <p className="header-content">
                  {text.split("").map((char, i) => {
                    const key = `${i}`;
                    return (
                      <span key={key} style={{ color: "#cccccc" }}>
                        {char}
                      </span>
                    );
                  })}
                </p>
              );
            }}
          />
        </Col>
      </Row>

      <style jsx>{`
        .section-main {
          width: 100%;
          height: 70vh;
          background-color: black;
          background-image: url("/images/maxresdefault.jpeg");
          background-size: 100%;
          background-position: bottom;
          background-repeat: no-repeat;
          color: white;
          padding: 10px;
        }
        .header {
          font-size: 2.3em;
          color: #eaa83c;
          text-shadow: 0px 0px 2px orange;
        }
        .phones {
          margin-top: 100px;
          font-size: 1.2em;
          color: #eaa83c;
          text-shadow: 0px 0px 2px orange;
          border-left: 4px solid #eaa83c;
          padding-left: 10px;
          margin-left: 25px;
        }
        .header-content {
          font-size: 2em;
          color: #444;
        }
        .header,
        .header-content {
          padding-left: 25px;
        }
        .header-content {
          font-size: 1.3em;
        }
        
        @media only screen and (min-width: 768px) {
          .header {
            font-size: 4em;
          }
          .phones {
            margin-top: 100px;
            font-size: 2em;
          }
          .header-content {
            font-size: 2em;
          }
          .section-main {
            height: 100vh;
          }
        }
        @media only screen and (min-width: 992px) {
        }
        @media only screen and (min-width: 1200px) {
        }
      `}</style>
    </div>
  );
};

export default SectionMain;
