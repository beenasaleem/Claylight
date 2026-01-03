import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainSection from "./components/MainSection/Main";

export default function App() {
  return (
   <div className="flex flex-col min-h-screen">
  <Header />
  <main className="flex-grow">
    <MainSection />
  </main>
  <Footer />
</div>

  );
}
