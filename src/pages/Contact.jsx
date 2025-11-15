import { useState } from "react";
import Section from "../components/layout/Section";
import Button from "../components/common/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tooltip from "../components/common/Tooltip";
import { contact } from "../data/dataPortfolio";

export default function Contact() {
  const { phone, email, linkedin, github, facebook, twitter } = contact;

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({
    loading: false,
    ok: null,
    message: "",
  });

  const handleChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setStatus({
        loading: false,
        ok: true,
        message: "Đã sao chép vào clipboard",
      });
      setTimeout(
        () => setStatus({ loading: false, ok: null, message: "" }),
        1500
      );
    } catch {
      setStatus({ loading: false, ok: false, message: "Không thể sao chép" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({
        loading: false,
        ok: false,
        message: "Vui lòng điền đầy đủ thông tin",
      });
      return;
    }
    setStatus({ loading: true, ok: null, message: "" });
    try {
      // TODO: thay endpoint bằng API thật hoặc EmailJS
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Send failed");
      setForm({ name: "", email: "", message: "" });
      setStatus({
        loading: false,
        ok: true,
        message: "Gửi thành công — cảm ơn bạn!",
      });
    } catch (err) {
      setStatus({
        loading: false,
        ok: false,
        message: "Gửi thất bại, thử lại sau.",
      });
    }
  };

  return (
    // dùng Section thay vì MainLayout; innerClass p-0 bg-transparent để không thay đổi layout nội dung
    <Section title="Liên hệ" minH="min-h-[70vh] md:min-h-[75vh]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form card */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-2 bg-white rounded-xl p-6 shadow-md"
            aria-labelledby="contact-form-title"
          >
            <h2 id="contact-form-title" className="text-2xl font-semibold mb-4">
              Liên hệ với tôi
            </h2>

            <label className="block mb-3">
              <span className="text-sm font-medium">Họ và tên</span>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 bg-gray-100 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                placeholder="Nguyễn Văn A"
              />
            </label>

            <label className="block mb-3">
              <span className="text-sm font-medium">Email</span>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 bg-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                placeholder="you@example.com"
              />
            </label>

            <label className="block mb-4">
              <span className="text-sm font-medium">Tin nhắn</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 bg-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                placeholder="Viết tin nhắn..."
              />
            </label>

            <div className="flex items-center space-x-3">
              <Button
                type="submit"
                variant="cta"
                size="md"
                disabled={status.loading}
              >
                {status.loading ? "Đang gửi..." : "Gửi tin nhắn"}
              </Button>

              <Button
                type="button"
                variant="info"
                size="md"
                onClick={() => {
                  setForm({ name: "", email: "", message: "" });
                  setStatus({ loading: false, ok: null, message: "" });
                }}
              >
                Làm lại
              </Button>

              {/* status live region */}
              <div
                aria-live="polite"
                className={`ml-4 text-sm ${
                  status.ok === true
                    ? "text-green-600"
                    : status.ok === false
                    ? "text-red-600"
                    : "text-gray-500"
                }`}
              >
                {status.message}
              </div>
            </div>
          </form>

          {/* Contact info card */}
          <aside className="bg-white rounded-xl p-6 shadow-md flex flex-col items-start">
            <h3 className="text-lg font-semibold mb-3">Thông tin khác</h3>

            <div className="mb-4 w-full">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <FontAwesomeIcon
                    icon={["fas", "phone"]}
                    className="text-emerald-600"
                  />
                  <span className="font-medium">{phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Tooltip label="Sao chép số">
                    <button
                      onClick={() => copyToClipboard(phone)}
                      className="p-2 rounded-md"
                    >
                      <FontAwesomeIcon icon={["fas", "copy"]} />
                    </button>
                  </Tooltip>
                </div>
              </div>

              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center space-x-3">
                  <FontAwesomeIcon
                    icon={["fas", "envelope"]}
                    className="text-emerald-600"
                  />
                  <a
                    href={`mailto:${email}`}
                    className="font-medium hover:underline"
                  >
                    {email}
                  </a>
                </div>
                <Tooltip label="Sao chép email">
                  <button
                    onClick={() => copyToClipboard(email)}
                    className="p-2 rounded-md"
                  >
                    <FontAwesomeIcon icon={["fas", "copy"]} />
                  </button>
                </Tooltip>
              </div>
            </div>

            <div className="mt-2 w-full">
              <p className="text-sm text-gray-500 mb-2">Kết nối với tôi</p>
              <div className="flex space-x-3">
                <Tooltip label="LinkedIn">
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md"
                  >
                    <FontAwesomeIcon
                      icon={["fab", "linkedin"]}
                      className="text-blue-600"
                    />
                  </a>
                </Tooltip>

                <Tooltip label="GitHub">
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md"
                  >
                    <FontAwesomeIcon icon={["fab", "github"]} />
                  </a>
                </Tooltip>

                <Tooltip label="Facebook">
                  <a
                    href={facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md"
                  >
                    <FontAwesomeIcon
                      icon={["fab", "facebook"]}
                      className="text-blue-600"
                    />
                  </a>
                </Tooltip>

                <Tooltip label="Twitter">
                  <a
                    href={twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md"
                  >
                    <FontAwesomeIcon
                      icon={["fab", "twitter"]}
                      className="text-sky-500"
                    />
                  </a>
                </Tooltip>
              </div>
            </div>

            <div className="mt-6 text-xs text-gray-400">
              <p>Thời gian phản hồi dự kiến: 1–3 ngày làm việc</p>
            </div>
          </aside>
        </div>
      </div>
    </Section>
  );
}
