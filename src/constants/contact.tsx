import { Mail, Phone } from "lucide-react";
import Github from "@/assets/icons/github.svg?react";
import Facebook from "@/assets/icons/facebook.svg?react";

type ContactMethod = {
  id: string;
  name: string;
  url: string;
  icon: React.ReactNode;
};

const contactMethods: ContactMethod[] = [
  {
    id: "facebook",
    name: "Tran Dang",
    url: "https://www.facebook.com/tran.dang.913442/",
    icon: <Facebook className="w-5 h-5 " />,
  },
  {
    id: "github",
    name: "dak-1306",
    url: "https://github.com/dak-1306",
    icon: <Github className="w-5 h-5 " />,
  },
  {
    id: "email",
    name: "thd13062005@gmail.com",
    url: "mailto:thd13062005@gmail.com",
    icon: <Mail className="w-5 h-5 " />,
  },
  {
    id: "phone",
    name: "0839479440",
    url: "tel:0839479440",
    icon: <Phone className="w-5 h-5 " />,
  },
];

export default contactMethods;
