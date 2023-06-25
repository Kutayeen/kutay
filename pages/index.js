import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { particlesOptions } from "constants/options";
import { about, aboutText } from "constants/language";
import { Card } from "antd";
import {
  CodeOutlined,
  LinkedinOutlined,
  GithubOutlined,
  ShopOutlined
} from "@ant-design/icons";

export default function Home() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Erdal Kutay Sesen</title>
        <link rel="icon" href="/images/croped_moi.png" />
      </Head>

      <main>
        <Card
          title=<>
            <CodeOutlined />
            <text> {about} </text>
          </>
          bordered={false}
          className="Card"
        >
          {aboutText()}
        </Card>

        <Card>
          <LinkedinOutlined
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/erdalkutaysesen/",
                "_blank"
              )
            }
            style={{ fontSize: "32px", marginRight: "50px" }}
          />
          <GithubOutlined
            onClick={() => window.open("https://github.com/Kutayeen", "_blank")}
            style={{ fontSize: "32px", marginRight: "50px" }}
          />
          <ShopOutlined
            onClick={() => window.open("https://kutayeen.itch.io/", "_blank")}
            style={{ fontSize: "32px" }}
          />
        </Card>
      </main>

      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particlesOptions}
      />
      <Footer />
    </div>
  );
}
