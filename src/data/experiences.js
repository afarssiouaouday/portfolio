// src/data/experiences.js

import sqliLogo from "../Assets/companies/sqli-logo.png";
import cerboLogo from "../Assets/companies/cerbo-logo.png";
import lambdasoftLogo from "../Assets/companies/lambdasoft-logo.svg";
import { DiJava, DiReact, DiMysql, DiGit } from "react-icons/di";
import {
  SiSpring,
  SiPostgresql,
  SiAngular,
  SiTypescript,
  SiDocker,
  SiTailwindcss,
  SiFlyway,
  SiJira,
  SiConfluence,
  SiApachemaven,
  SiHibernate,
  SiJunit5,
  SiJsonwebtokens,
} from "react-icons/si";

const iconStyle = { fontSize: "1.5rem", margin: "0 6px" };

export const experiences = [
  {
    date: "Mar 2026 - Jul 2026",
    title: "Java Software Engineer Intern",
    company: "SQLI Maroc",
    logo: sqliLogo,
    location: "Oujda, Morocco",
    techstack: [
      <DiJava style={{ ...iconStyle, color: "#f89820" }} title="Java" />,
      <SiSpring style={{ ...iconStyle, color: "#6DB33F" }} title="Spring Boot" />,
      <SiHibernate style={{ ...iconStyle, color: "#59666C" }} title="Spring Data JPA / Hibernate" />,
      <SiPostgresql style={{ ...iconStyle, color: "#336791" }} title="PostgreSQL" />,
      <SiFlyway style={{ ...iconStyle, color: "#CC0200" }} title="Flyway" />,
      <SiApachemaven style={{ ...iconStyle, color: "#C71A36" }} title="Maven" />,
      <DiGit style={{ ...iconStyle, color: "#f05032" }} title="Git" />,
      <SiJira style={{ ...iconStyle, color: "#0052CC" }} title="Jira" />,
      <SiConfluence style={{ ...iconStyle, color: "#2684FF" }} title="Confluence" />,
    ],
    description:
      "Développement et évolution de l'application COSY, une plateforme de gestion des contrats d'assurance et d'investissement du groupe APICIL. Participation à la migration des fonctionnalités d'Alpheys vers COSY, au développement de nouvelles fonctionnalités, à l'implémentation de règles métier et à la maintenance de l'application dans un environnement Agile Scrum.",
  },
  {
    date: "Jul 2025 - Sep 2025",
    title: "Full Stack Developer Intern",
    company: "LambdaSoft",
    logo: lambdasoftLogo,
    logoFull: true,
    location: "À distance",
    techstack: [
      <DiJava style={{ ...iconStyle, color: "#f89820" }} title="Java" />,
      <SiSpring style={{ ...iconStyle, color: "#6DB33F" }} title="Spring Boot" />,
      <SiAngular style={{ ...iconStyle, color: "#DD0031" }} title="Angular" />,
      <SiTypescript style={{ ...iconStyle, color: "#007ACC" }} title="TypeScript" />,
      <SiPostgresql style={{ ...iconStyle, color: "#336791" }} title="PostgreSQL" />,
      <SiFlyway style={{ ...iconStyle, color: "#CC0200" }} title="Flyway" />,
      <SiDocker style={{ ...iconStyle, color: "#2496ED" }} title="Docker" />,
      <SiTailwindcss style={{ ...iconStyle, color: "#38BDF8" }} title="Tailwind CSS" />,
      <SiJunit5 style={{ ...iconStyle, color: "#25A162" }} title="JUnit" />,
      <DiGit style={{ ...iconStyle, color: "#f05032" }} title="Git" />,
    ],
    description:
      "Développement d'une plateforme web de gestion des formations permettant l'administration des utilisateurs, des cours, des salles, des inscriptions et des réclamations. Participation au développement des fonctionnalités, à la sécurisation de l'application et à l'optimisation des performances.",
  },
  {
    date: "Mar 2025 - Jun 2025",
    title: "Full Stack Developer",
    company: "CERBO",
    logo: cerboLogo,
    techstack: [
      <DiReact style={{ ...iconStyle, color: "#61DBFB" }} title="React.js" />,
      <SiSpring style={{ ...iconStyle, color: "#6DB33F" }} title="Spring Boot" />,
      <DiMysql style={{ ...iconStyle, color: "#4479A1" }} title="MySQL" />,
      <SiJsonwebtokens style={{ ...iconStyle, color: "#000000" }} title="JWT" />,
      <SiDocker style={{ ...iconStyle, color: "#2496ED" }} title="Docker" />,
      <DiGit style={{ ...iconStyle, color: "#f05032" }} title="Git" />,
    ],
    description:
      "Développement d'une plateforme web dédiée à la gestion et à l'évaluation éthique des projets de recherche biomédicale. Mise en place d'un système de gestion documentaire, de suivi des évaluations, de gestion des utilisateurs et des rôles afin de digitaliser le processus de validation des projets.",
  },
];
