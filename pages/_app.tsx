import type { AppProps } from "next/app";
import Head from 'next/head'
import { FixedSideHeader, Content } from "../components";
import { Row, Col } from "antd";
import { Provider } from "react-redux";
import { store } from "../app/store";
import "../css/antd-dark.less";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>Matrixfitness</title>
      </Head>
      <Row className="app">
        <Col xs={24} sm={24} md={1} lg={1} xl={1}>
          <FixedSideHeader />
        </Col>
        <Col xs={24} sm={24} md={23} lg={23} xl={23}>
          <Content>
            <Component {...pageProps} />
          </Content>
        </Col>
      </Row>

      <style global jsx>{`
        @font-face {
          font-family: BaseBold;
          src: url("/styles/fonts/Roboto_Condensed/RobotoCondensed-Bold.ttf");
        }
        @font-face {
          font-family: BaseBoldItalic;
          src: url("/styles/fonts/Roboto_Condensed/RobotoCondensed-BoldItalic.ttf");
        }
        @font-face {
          font-family: BaseItalic;
          src: url("/styles/fonts/Roboto_Condensed/RobotoCondensed-Italic.ttf");
        }
        @font-face {
          font-family: BaseLight;
          src: url("/styles/fonts/Roboto_Condensed/RobotoCondensed-Light.ttf");
        }
        @font-face {
          font-family: BaseLightItalic;
          src: url("/styles/fonts/Roboto_Condensed/RobotoCondensed-LightItalic.ttf");
        }
        @font-face {
          font-family: BaseRegular;
          src: url("/styles/fonts/Roboto_Condensed/RobotoCondensed-Regular.ttf");
        }
        body {
          min-height: 100vh;
          min-height: -webkit-fill-available;
          font-family: BaseRegular;
        }
        * {
          color: white;
        }
        p {
          font-size: 1.2em;
        }
        .app {
          overflow: hidden;
        }
        .slick-dots.slick-thumb ul li > div {
          border: 1px solid white;
        }
        .slick-dots.slick-thumb ul li.slick-active > div {
          border: 1px solid #eaa83c;
        }
        ul {
          list-style: none;
        }
        .descriptions ul li::before {
          content: ${`"\u2022"`};
          color: red;
          font-weight: bold;
          display: inline-block;
          width: 0.7em;
          margin-left: -1em;
        }
      `}</style>
    </Provider>
  );
}
export default MyApp;
