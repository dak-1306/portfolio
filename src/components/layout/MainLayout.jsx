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
        <h1 className="text-4xl font-bold mb-6 text-white">{title}</h1>
        <div
          style={{ background: "var(--color-card-background)" }}
          className="group backdrop-blur-md border border-gray-200 
                dark:bg-gray-900 dark:border-gray-700
                rounded-2xl p-6 shadow-lg hover:shadow-xl 
                transition-all duration-300 
                hover:-translate-y-1 cursor-pointer"
        >
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
