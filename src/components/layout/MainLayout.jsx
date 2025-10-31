import Header from "./Header";
import Footer from "./Footer";

function MainLayout({ children, title }) {
  return (
    <div
      style={{ background: "var(--color-background-gradient)" }}
      className="min-h-screen leading-relaxed antialiased flex flex-col items-center"
    >
      <Header />
      <main className="flex flex-col justify-center items-center flex-grow w-full">
        <h1 className="text-4xl font-bold mb-6 text-color-h1">{title}</h1>
        <div
          style={{ background: "var(--color-card-background)" }}
          className=" backdrop-blur-md border border-green-200 
                rounded-2xl p-8 shadow-lg hover:shadow-xl 
                transition-all duration-300 
                hover:-translate-y-1"
        >
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
