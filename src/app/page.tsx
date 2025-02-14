import Navbar from "@/components/navbar";
import MainContent from "@/components/mainContent";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
export default function Home() {
  return (
    <div className="main-container">
      <Navbar />
      <MainContent/>
      <Sidebar/>
      <Header />
      <Footer/>
    </div>
  );
}
