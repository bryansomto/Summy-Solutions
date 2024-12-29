"use client";
import Image from "next/image";
import Header from "./components/Header";
import Article from "./components/Article/Article";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Article />
      <Footer />
    </div>
  );
}
