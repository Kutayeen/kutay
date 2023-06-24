import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { particlesOptions } from "constants/options";
import { about } from "constants/language";
import { Card } from 'antd';
import {
  CodeOutlined
} from '@ant-design/icons';

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
      
        <Card title= <><CodeOutlined /><text> {about} </text></> bordered={false} className="Card"> I am a software developer with a passion for developing innovative solutions to complex problems. I have a
        experience in software engineering, machine learning, and artificial intelligence, and am interested in natural
        language processing. I am an excellent communicator and team player and am always looking for ways to
        improve the efficiency and effectiveness of my work. I am an active member of the computer science community
        and am always eager to share my knowledge and experience with others.</Card>        
        
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
