import Header from "./Header";
import Footer from "./Footer";

function MainLayout({ children }) {
  return (
    <div
      style={{ background: "var(--color-background-gradient)" }}
      className="min-h-screen leading-relaxed antialiased flex flex-col items-center"
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
