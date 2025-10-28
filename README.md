# Portfolio (React + Vite)

Đây là repository mã nguồn cho portfolio cá nhân xây dựng trên React + Vite. Nội dung README này trình bày mô tả dự án, cách thiết lập môi trường phát triển, cấu trúc thư mục chính, các thành phần quan trọng (Button, Tooltip, Timeline, Card), và một số lưu ý khi deploy.

## Tổng quan

Ứng dụng là một portfolio tĩnh động (SPA) dùng React + Vite, có:

- UI viết bằng Tailwind CSS
- Các component tái sử dụng: `Button`, `Tooltip`, `Card`, `Timeline`
- Dữ liệu tách trong `src/data/dataPortfolio.js` để dễ chỉnh nội dung (projects, skills, contact...)

Mục tiêu: nhanh, dễ tuỳ chỉnh, tối ưu trải nghiệm (hover/tooltip/a11y), và dễ deploy (Vercel/Netlify/GitHub Pages).

## Công nghệ chính

- React 19
- Vite
- Tailwind CSS
- PostCSS
- Font Awesome (icon)

## Bắt đầu (cài đặt & chạy)

1. Clone repo:

```bash
git clone <repo-url>
cd portfolio
```

2. Cài dependencies:

```bash
npm install
```

3. Chạy dev server:

```bash
npm run dev
```

4. Build production:

```bash
npm run build
```

5. Xem bản build preview:

```bash
npm run preview
```

> Ghi chú: môi trường dev mặc định chạy Vite tại `http://localhost:5173`.

## Cấu trúc thư mục chính

```
src/
	├─ components/          # các component tái sử dụng (Button, Tooltip, Card, Timeline...)
	│   ├─ common/
	│   │   ├ Button.jsx
	│   │   ├ Tooltip.jsx
	│   │   └ Card.jsx
	│   └─ projects/
	│       └ TimeLine.jsx
	├─ pages/               # các trang (Home, About, Projects, Skills, Contact)
	├─ styles/              # CSS (tailwind directives + custom small CSS)
	│   └─ index.css
	├─ data/                # dữ liệu portfolio (projects, skills, contact)
	│   └─ dataPortfolio.js
	├─ config/              # cấu hình icons, ...
	├─ App.jsx
	└─ main.jsx
```

## Các điểm lưu ý & hướng dẫn sử dụng component chính

1. `src/data/dataPortfolio.js`

- Mọi nội dung hiển thị (tên, mô tả project, technologies, skillsData, contact ...) đều nên chỉnh ở đây. Giữ dữ liệu có cấu trúc (id, name, icon, level, time, linkDemo...).

2. `Button` (src/components/common/Button.jsx)

- Component Button được thiết kế để tái sử dụng: hỗ trợ `variant`, `size`, `icon`, `href` (render `<a>`), `disabled`.
- Màu sắc, gradient, hover cụ thể được định nghĩa trong CSS (`App.css` hoặc file CSS riêng). Ở JSX chỉ dùng các lớp Tailwind cho layout/transition; phần visual đặt trong class `.btn-*`.

Gợi ý: khi thêm variant mới, cập nhật CSS tương ứng (ví dụ `.btn-cta`, `.btn-info`, `.btn-success`).

3. `Tooltip` (src/components/common/Tooltip.jsx)

- Tooltip đã được viết để: hiển thị khi hover/focus, hoặc controlled bằng prop `visible` (dùng cho Timeline khi dot được chọn).
- Lưu ý stacking context: nếu tooltip bị che bởi phần tử lân cận, cân nhắc render tooltip bằng portal (mount vào body) hoặc tăng z-index/điều chỉnh stacking context của phần tử cha.

4. `TimeLine` (src/components/projects/TimeLine.jsx)

- Component tách riêng, nhận `projects` và trạng thái `hoveredIndex`/`selectedIndex` từ cha (Projects page). Dùng Tooltip để hiển thị thời gian project.
- Pattern này giúp đồng bộ hover giữa dot và thẻ project.

5. `Card`

- Card hỗ trợ prop `as` để render thành nhiều thẻ khác nhau (`div`, `li`...), thuận tiện khi muốn dùng Card làm phần tử danh sách.

## Tailwind & PostCSS

- Tailwind đã được cài (xem `tailwind.config.js`). File CSS chính: `src/styles/index.css` có các directive Tailwind. Một số style phức tạp (pseudo, sheen overlay) được viết bằng CSS nhỏ trong file styles.
- Nếu bạn thay đổi fonts hoặc thêm content paths, cập nhật `tailwind.config.js` phần `content`.

## Icons (Font Awesome)

- Icons được cấu hình trong `src/config/icons.js`. Để thêm icon mới, import icon từ `@fortawesome/free-solid-svg-icons` hoặc `@fortawesome/free-brands-svg-icons` và thêm vào `library`.

Ví dụ:

```js
import { faGithub } from "@fortawesome/free-brands-svg-icons";
library.add(faGithub);
```

## Xử lý form Contact

- Có 2 cách hợp lý để xử lý form gửi liên hệ:
  1.  Dùng third-party (EmailJS / Formspree) — triển khai nhanh, không cần server.
  2.  Dùng serverless (Vercel/Netlify) hoặc một endpoint nhỏ (API) để gọi SendGrid / Mailgun — bảo mật và kiểm soát tốt hơn.
- Ở project mẫu, client side sẽ gửi `POST /api/contact` (bạn có thể thay bằng EmailJS nếu chưa muốn viết server).

## Deploy

- Thích hợp deploy tĩnh: Vercel, Netlify, GitHub Pages (dùng build output). Thông thường:
  1.  `npm run build`
  2.  Upload nội dung `dist/` lên hosting hoặc dùng plugin Vercel/Netlify để deploy tự động.

## Kiểm tra chất lượng (Check list)

- [ ] Chạy `npm run dev` và kiểm tra toàn bộ trang trên desktop & mobile
- [ ] Hover tooltip, hover các card, kiểm tra focus bằng keyboard
- [ ] Kiểm tra form Contact: validation / phản hồi success / error
- [ ] Kiểm tra performance (Lighthouse) & contrast màu cho accessibility

## Gợi ý nâng cao (tùy theo nhu cầu)

- Dùng Portal + Popper.js cho tooltip nếu cần vị trí phức tạp và tránh bị che do stacking context.
- Tách design tokens (màu, font) vào `tailwind.config.js` để dễ thay đổi theme toàn site.
- Thêm test nhỏ (unit) cho các component quan trọng nếu muốn duy trì lâu dài.

## Liên hệ / Tác giả

- Repo: (chèn link GitHub của bạn)
- Email: (chèn email liên hệ)

---

Nếu bạn muốn, tôi có thể:

- cập nhật README với link repo và email của bạn,
- hoặc tạo thêm phần hướng dẫn deploy chi tiết cho Vercel/Netlify.

Chọn thao tác bạn muốn tôi làm tiếp theo.
