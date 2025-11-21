import Header from "./Header";
import Footer from "./Footer";
import Fireflies from "../common/Fireflies";

export default function MainLayout({ children }) {
  return (
    <div className="h-screen w-screen flex flex-col items-center">
      {/* Header cố định trong flow, không bị cuộn */}
      <div className="w-full flex-none z-[60] relative">
        <Header />
      </div>

      {/* Main: chiếm phần còn lại, vùng cuộn duy nhất */}
      <main
        style={{ background: "var(--forest-day-bg)" }}
        className="relative flex flex-col items-center w-full overflow-y-auto overscroll-contain pt-6 pb-6 flex-1"
      >
        {/* Fireflies: overlay nền (z-0) */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Fireflies count={12} />
        </div>

        {/* Nội dung chính ở z-10 */}
        <div className="relative z-10 flex flex-col items-center w-full space-y-14 ">
          {children}
        </div>
      </main>

      {/* Footer cố định trong flow, không bị cuộn */}
      <div className="w-full flex-none z-[60] relative">
        <Footer />
      </div>
    </div>
  );
}
