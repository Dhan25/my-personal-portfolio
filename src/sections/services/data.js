import { MdOutlineDesignServices } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { GiWireframeGlobe } from "react-icons/gi";
import { VscTools } from "react-icons/vsc";

const data = [
  {
    id: 1,
    icon: <MdOutlineDesignServices />,
    title: "UI/UX Design",
    desc: "My designs are up to date and simple. I follow best practices to ensure that my customers will enjoy utilizing the products.",
  },
  {
    id: 2,
    icon: <FaReact />,
    title: "Frontend Development",
    desc: "All devices, including mobile phones, tablets, and desktops, will be able to access your product, which will have a pleasing visual appearance.",
  },
  {
    id: 3,
    icon: <GiWireframeGlobe />,
    title: "Wireframe Creation",
    desc: "Building a page interface that places a strong emphasis on the placement of content, available functionality, and desired behaviors.",
  },
  {
    id: 4,
    icon: <VscTools />,
    title: "Technical Support",
    desc: "Addresses problems with computers, modems, internet, networks, software, and similar devices by identifying, analyzing, and resolving user difficulties with computer hardware and software.",
  },
];

export default data;
