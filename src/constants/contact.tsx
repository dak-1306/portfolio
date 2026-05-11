import { Mail, Phone } from "lucide-react";
import Github from "@/assets/icons/github.svg?react";
import Facebook from "@/assets/icons/facebook.svg?react";
import React from "react";

export interface ContactMethod {
  id: string;
  name: string;
  url: string;
  // Thay vì ReactNode, hãy dùng ComponentType với các props của Lucide/SVG
  icon: React.ComponentType<{ className?: string }>;
}

const contactMethods: ContactMethod[] = [
  {
    id: "facebook",
    name: "Tran Dang",
    url: "https://www.facebook.com/tran.dang.913442/",
    icon: Facebook, // Không dùng <Facebook /> ở đây
  },
  {
    id: "github",
    name: "dak-1306",
    url: "https://github.com/dak-1306",
    icon: Github,
  },
  {
    id: "email",
    name: "thd13062005@gmail.com",
    url: "mailto:thd13062005@gmail.com",
    icon: Mail,
  },
  {
    id: "phone",
    name: "0839479440",
    url: "tel:0839479440",
    icon: Phone,
  },
];

export default contactMethods;
