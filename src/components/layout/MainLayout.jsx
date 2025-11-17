import Header from "./Header";
import Footer from "./Footer";
import Fireflies from "../common/Fireflies";

/*
  MainLayout (gọn)
  - Header / Footer không cuộn (flex-none)
  - main là vùng cuộn (overflow-y-auto) — thanh cuộn chỉ xuất hiện ở đây
  - Fireflies mount bên trong main, absolute inset, pointer-events-none để không che nội dung
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
      {/* đặt relative để có thể mount layer absolute cho fireflies */}
      <main
        style={{ background: "var(--forest-day-bg)" }}
        className="relative flex flex-col items-center w-full overflow-y-auto overscroll-contain pt-6 pb-6 flex-1"
      >
        {/* Fireflies: overlay trên nền nhưng dưới nội dung (z-0), không chặn sự kiện */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Fireflies count={12} />
        </div>

        {/* Nội dung chính ở z-10 để luôn nằm trên layer đom đóm */}
        <div className="relative z-10 flex flex-col items-center w-full space-y-14 ">
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
