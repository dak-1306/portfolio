import Header from "./Header";
import Footer from "./Footer";

/*
  MainLayout (gọn)
  - Header / Footer không cuộn (flex-none)
  - main là vùng cuộn (overflow-y-auto) — thanh cuộn chỉ xuất hiện ở đây
*/
export default function MainLayout({ children }) {
  return (
    // dùng h-screen để toàn bộ layout khớp viewport
    <div className="h-screen w-screen flex flex-col items-center">
      {/* Header cố định trong flow, không bị cuộn */}
      <div className="w-full flex-none z-20">
        <Header />
      </div>

      {/* Main: chiếm phần còn lại, vùng cuộn duy nhất */}
      <main
        style={{ background: "var(--forest-day-bg)" }}
        className="flex flex-col items-center w-full overflow-y-auto overscroll-contain flex-grow"
      >
        <h1 className="text-4xl font-bold mb-4 mt-4 text-[var(--color-h1)]">
          Welcome to My Portfolio
        </h1>
        <div className="flex flex-col items-center w-full space-y-12">
          {children}
        </div>
      </main>

      {/* Footer cố định trong flow, không bị cuộn */}
      <div className="w-full flex-none z-20">
        <Footer />
      </div>
    </div>
  );
}
