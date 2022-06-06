import type { NextPage } from "next";
import Head from "next/head";
import { GitHubButton } from "../components/GitHubButton";
import { TwitterButton } from "../components/TwitterButton";
import { motion } from "framer-motion";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Zaib</title>             
            </Head>
            
            <motion.div initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ ease: "easeOut", duration: 0.6 }}>
                <div className="w-full h-[100vh] flex flex-col items-center justify-center text-center">
                    <h1 className="text-white font-semibold text-5xl selection:bg-white selection:text-black">Hey,👋 I am Zaib.</h1>
                    <p className="text-white opacity-90 mt-5 selection:bg-white selection:text-black">I am a <b>Professional Motion Designer</b> and an <b>Avid Programmer</b>.</p>
                    <div className="flex flex-row space-x-4">
                        <GitHubButton />
                        <TwitterButton />
                    </div>
                </div>    
            </motion.div>
        </>
    );
};

export default Home;
