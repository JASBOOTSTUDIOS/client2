"use client";
import Navbar from "@/components/navbar";
import MainContent from "@/components/mainContent";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import "@/app/page.css";
export default function Home() {
  return (
    <div className="main-container">
      <div className="main-container-navbar">
        <Navbar />
      </div>
      <div className="main-container-main">
        <MainContent />
      </div>
      <div className="main-container-sidebar">
        <Sidebar />
      </div>
      <div className="main-container-header">
        <Header />
      </div>
      <div className="main-container-footer">
        <Footer />
      </div>
    </div>
  );
}
