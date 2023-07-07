import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import ButtonPrimary from "./components/ui/Buttons/ButtonPrimary";

export default function Home() {
  const itemVarient2 = {
    open: {
      scale: 1,
      opacity: 1,
    },
    closed: {
      scale: 0,
      opacity: 0,
    },
  };

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen">
        {/* HERO */}
        <div className="flex items-center gap-[min(20vh,20vw)] border-b px-[min(6vh,6vw)] py-[min(5vh,5vw)] max-[980px]:flex-col">
          <div className="mx-auto flex w-[min(45rem,100%)] flex-col gap-[min(2vh,2vw)] text-center max-[980px]:w-[min(40rem,100%)]">
            <Image
              src={"/logo/Logo_Without_Symbol.png"}
              // className="h-10 w-20"
              alt="Mahi Logo"
              width={800}
              height={400}
              className="mb-[min(2vh,2vw)] h-auto w-full"
            />
            <h2 className="mb-[min(3vh,3vw)] text-4xl font-medium max-[1200px]:text-3xl max-[720px]:text-2xl">
              Crafting Exquisite Interiors, Building Solid Foundations
            </h2>
            <p className="text-base max-[1200px]:text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              tempora accusantium sequi, deleniti, perferendis obcaecati placeat
              suscipit dolorum vel, quos corrupti cumque deserunt voluptatum
              eius quo iure doloribus blanditiis tempore velit! Sit hic eos
              deserunt exercitationem. Optio culpa, saepe labore sunt facere
              veritatis nobis debitis distinctio esse.
            </p>
            <div className="mt-[min(4vh,4vw)] flex justify-center gap-4">
              <ButtonPrimary text="Explore Portfolio" />
              <ButtonPrimary text="Ongoing Projects" />
            </div>
          </div>
          <div className="flex w-fit  items-center justify-center max-[980px]:w-[min(100%,100%)]">
            <motion.div
              variants={itemVarient2}
              transition={{ duration: 0.5 }}
              className="bg-red relative my-[min(30vh,18vw)] h-[min(26vh,14vw)] w-[min(48vh,32vw)] max-[980px]:h-[min(30vh,30vw)] max-[980px]:w-[min(50vh,60vw)]"
            >
              <Image
                src={"/hero-section/interior-1.png"}
                width={200}
                height={400}
                alt="project screenshot"
                className="absolute -left-[40%] -top-[100%] h-full w-full shadow-xl transition-all hover:z-20 hover:scale-110 max-[980px]:left-[30%]"
              />
              <Image
                src={"/hero-section/interior-2.jpeg"}
                width={200}
                height={400}
                alt="project screenshot"
                className="absolute -top-[20%] left-[30%] z-10 h-full w-full translate-x-[-50%] shadow-xl transition-all hover:z-10 hover:scale-110 max-[980px]:left-[50%]"
              />
              <Image
                src={"/hero-section/interior-3.jpeg"}
                width={200}
                height={400}
                alt="project screenshot"
                className="absolute -left-[40%] top-[60%] z-20 h-full w-full shadow-xl transition-all hover:z-20 hover:scale-110 max-[980px]:-left-[30%]"
              />
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}

function AuthShowcase() {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined }
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
