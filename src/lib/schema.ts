import * as z from "zod";

export const contactSchema = z.object({
  fullName: z
    .string()
    .min(2, "Họ tên phải có ít nhất 2 ký tự")
    .max(50, "Họ tên quá dài"),
  email: z.email("Email không hợp lệ").nonempty("Vui lòng nhập email"),
  comment: z
    .string()
    .min(10, "Nội dung cần ít nhất 10 ký tự")
    .max(500, "Nội dung không được vượt quá 500 ký tự"),
});

// Export type để dùng cho TypeScript
export type ContactFormData = z.infer<typeof contactSchema>;
