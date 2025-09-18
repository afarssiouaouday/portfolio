import cerbo from "../Assets/Projects/cerbo.png";
import carRental from "../Assets/Projects/car-rental.png";
import courseManagement from "../Assets/Projects/courseManagement.png";

// ⚡️ import des icônes nécessaires
import { DiReact, DiMysql } from "react-icons/di";
import { 
  SiSpring, 
  SiPhp, 
  SiSymfony, 
  SiAngular, 
  SiPostgresql, 
  SiChartdotjs, 
  SiDocker, 
  SiBootstrap, 
  SiTailwindcss, 
  SiSwagger, 
  SiOpenapiinitiative, 
  SiGoogle, 
  SiRedis
} from "react-icons/si";
import { FaKey } from "react-icons/fa"; 
import { TbMail } from "react-icons/tb"; 
import { BiNetworkChart } from "react-icons/bi"; 

// style générique des icônes
const iconStyle = { fontSize: "1.8rem", margin: "0 5px" };

export const projects = [
  {
    imgPath: cerbo,
    title: "CERBO Management Application",
    description:
      "A comprehensive platform for digitalizing ethical evaluation of biomedical projects. Streamlines the complete evaluation workflow with secure document management, status tracking, and automatic notifications. Features submission portals for investigators, evaluation tools for experts, admin dashboard, and real-time communication, resulting in improved CERBO efficiency and transparency.",
    ghLink: "#",
    demoLink: "#",
    techstack: [
      <DiReact style={{ ...iconStyle, color: "#61DBFB" }} title="React" />,
      <SiSpring style={{ ...iconStyle, color: "#6DB33F" }} title="Spring Boot" />,
      <DiMysql style={{ ...iconStyle, color: "#4479A1" }} title="MySQL" />,
      <SiDocker style={{ ...iconStyle, color: "#2496ED" }} title="Docker" />,
      <SiTailwindcss style={{ ...iconStyle, color: "#38BDF8" }} title="TailwindCSS" />,
      <TbMail style={{ ...iconStyle, color: "#E34F26" }} title="Spring Mail" />,
      <BiNetworkChart style={{ ...iconStyle, color: "#FF9800" }} title="WebSocket" />,
    ],
  },
  {
    imgPath: carRental,
    title: "Car Rental Management System",
    description:
      "A comprehensive web application for managing vehicle rentals with centralized booking system and automatic cost calculation. Features complete vehicle, reservation, and maintenance management with real-time availability tracking. Includes an interactive dashboard providing real-time statistics on vehicle performance and reservations, optimizing fleet management and ensuring efficient operations.",
    ghLink: "https://github.com/afarssiouaouday/Car-Rental-Management-System",
    demoLink: "#",
    techstack: [
      <SiPhp style={{ ...iconStyle, color: "#777BB4" }} title="PHP 8" />,
      <SiSymfony style={{ ...iconStyle, color: "#000000" }} title="Symfony" />,
      <DiMysql style={{ ...iconStyle, color: "#4479A1" }} title="MySQL" />,
      <SiChartdotjs style={{ ...iconStyle, color: "#FF6384" }} title="Chart.js" />,
      <SiDocker style={{ ...iconStyle, color: "#2496ED" }} title="Docker" />,
      <SiBootstrap style={{ ...iconStyle, color: "#7952B3" }} title="Bootstrap" />
    ],
  },
  {
    imgPath: courseManagement,
    title: "Course Management System",
    description:
      "A platform designed for managing educational courses and classrooms for both in-person and remote training. Features comprehensive user, course, and classroom management with validation systems for account creation, course requests, and seat bookings. Includes complaint management system with secure session handling and role-based access control, providing a complete solution for educational institutions.",
    ghLink: "#",
    demoLink: "#",
    techstack: [
      <SiAngular style={{ ...iconStyle, color: "#DD0031" }} title="Angular" />,
      <SiSpring style={{ ...iconStyle, color: "#6DB33F" }} title="Spring Boot" />,
      <SiPostgresql style={{ ...iconStyle, color: "#336791" }} title="PostgreSQL" />,
      <SiSwagger style={{ ...iconStyle, color: "#85EA2D" }} title="Swagger" />,
      <SiTailwindcss style={{ ...iconStyle, color: "#38BDF8" }} title="TailwindCSS" />,
      <SiRedis style={{ ...iconStyle, color: "#DC382D" }} title="Redis" />,
      <FaKey style={{ ...iconStyle, color: "#FBC02D" }} title="JWT Auth" />
    ],
  },
];