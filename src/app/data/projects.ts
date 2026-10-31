import { Project } from "../types/Project";
import mockupHelvetica from "@/imports/mockup_1_web.webp";
import mockupInclui from "@/assets-web/mockup_inclui_.webp";
import obs1 from "@/assets-web/observatorio_behance_1.webp";
import obs2 from "@/assets-web/observatorio_behance_2.webp";
import obs3 from "@/assets-web/observatorio_behance_3.webp";
import portellaCelular from "@/assets-web/portella_celular.webp";
import postellaPost from "@/assets-web/post_instagram.webp";
import trioProfile from "@/assets-web/Profile.webp";
import taroCards from "@/assets-web/tar_.webp";
import taro2 from "@/assets-web/taro2.webp";
import trioPerfil from "@/assets-web/trio_perfil.webp";
import colecaoFantastica from "@/assets-web/Cole__o_Fant_stica.webp";
import manualAstrologo from "@/assets-web/mock.webp";
import calibre22 from "@/assets-web/mock_dferente.webp";
import mfCelular from "@/assets-web/mf_celular.webp";
import mfLogo from "@/assets-web/mf_logo.webp";
import nunoCartaz from "@/assets-web/nunoportfolio.webp";
import manualAstrologo2 from "@/assets-web/mock2.webp";
import trioIndecenteVideo from "@/imports/trintasegundoshoje.mp4";
import manual1 from "@/assets-web/manual1.webp";
import receituario from "@/assets-web/receituario.webp";
import jaleco from "@/assets-web/jalecomockup.webp";
import isa1 from "@/assets-web/isamockup1.webp";
import isa2 from "@/assets-web/isamockup2.webp";
import isa3 from "@/assets-web/isamockup3.webp";
import miguel from "@/assets-web/flyer_3110.webp";
import tear1 from "@/assets-web/tear1.webp";
import tear2 from "@/assets-web/tear2.webp";
import tear3 from "@/assets-web/tear3.webp";
import tear4 from "@/assets-web/tear4.webp";
import tear5 from "@/assets-web/tear5.webp";
import tear6 from "@/assets-web/tear6.webp";
import tear7 from "@/assets-web/tear7.webp";
import tear8 from "@/assets-web/tear8.webp";
import tear9 from "@/assets-web/tear9.webp";
import tear10 from "@/assets-web/tear10.webp";

// ── Data ─────────────────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: 1,
    title: "Manual de Identificação de Foraminíferos",
    category: "Design Editorial",
    year: "2026",
    description: "Identidade visual e diagramação de manual acadêmico de biologia.",
    tags: ["Design Editorial", "Identidade Visual"],
    tools: ["Adobe InDesign", "Adobe Photoshop"],
    images: [isa1, isa2, isa3],
    featured: true,
    cardBg: "#e8ddd0",
  },
  {
    id: 2,
    title: "Coletivo Tear",
    category: "Identidade Visual",
    year: "2026",
    description: "Identidade visual de coletivo de artesãs para projeto acadêmico.",
    tags: ["Identidade Visual"],
    tools: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
    images: [tear1, tear2, tear3, tear4, tear5, tear6, tear7, tear8, tear9, tear10],
    featured: true,
    cardBg: "#ffd38c",
  },
  {
    id: 3,
    title: "Observatório da Percepção do Crime",
    category: "UX/UI",
    year: "2025",
    description: "Identidade visual e UX/UI para site de TCC da UNIRIO.",
    tags: ["UX/UI"],
    tools: ["Figma"],
    images: [obs1, obs2, obs3],
    featured: false,
    cardBg: "#ffd38c",
  },
  {
    id: 4,
    title: "Trio Indecente",
    category: "Identidade Visual",
    year: "2025",
    description: "Identidade visual e conteúdo para o Trio Indecente.",
    tags: ["Identidade Visual", "Ilustração", "Divulgação"],
    tools: ["Adobe Illustrator", "Figma", "Adobe Premiere"],
    images: [trioIndecenteVideo, trioPerfil, trioProfile],
    featured: false,
    cardBg: "#E8D094",
  },
  {
    id: 5,
    title: "Coleção Fantástica",
    category: "Design Editorial",
    year: "2025",
    description: "Projeto acadêmico de coleção de fantasia realista.",
    tags: ["Design Editorial"],
    tools: ["Adobe Illustrator", "Adobe InDesign"],
    images: [colecaoFantastica],
    featured: false,
    cardBg: "#e8ddd0",
  },
  {
    id: 6,
    title: "Baralho de Tarô",
    category: "Identidade Visual",
    year: "2025",
    description: "Projeto acadêmico de ilustração para baralho de tarô.",
    tags: ["Identidade Visual", "Ilustração"],
    tools: ["Adobe Photoshop", "Adobe InDesign"],
    images: [taroCards, taro2],
    featured: false,
    cardBg: "#BDBDDB",
  },
 {
    id: 7,
    title: "Flyer Miguel Werneck",
    category: "Identidade Visual",
    year: "2026",
    description: "Post de divulgação de show.",
    tags: ["Social Media", "Divulgação"],
    tools: ["Figma", "Adobe Photoshop", "Adobe Illustrator"],
    images: [miguel],
    featured: false,
    cardBg: "#162c8d",
  },
    {
    id: 8,
    title: "Helvetica — A Fonte da Discórdia",
    category: "Design Editorial",
    year: "2024",
    description: "Projeto acadêmico de diagramação de spreads de artigo.",
    tags: ["Design Editorial"],
    tools: ["Adobe InDesign"],
    images: [mockupHelvetica],
    featured: false,
    cardBg: "#1e1a16",
  },
   {
    id: 9,
    title: "Meio Fio",
    category: "Identidade Visual",
    year: "2025",
    description: "Identidade visual e divulgação para banda de jazz.",
    tags: ["Identidade Visual", "Social Media", "Divulgação"],
    tools: ["Adobe Photoshop", "Figma", "Adobe InDesign"],
    images: [mfCelular, mfLogo],
    featured: false,
    cardBg: "#3a3a3a",
  },
   {
    id: 10,
    title: "Calibre 22 — Rubem Fonseca",
    category: "Design Editorial",
    year: "2024",
    description: "Projeto acadêmico de capa para romance policial.",
    tags: ["Design Editorial"],
    tools: ["Adobe Illustrator"],
    images: [calibre22],
    featured: false,
    cardBg: "#f0e4e0",
  },
  {
    id: 11,
    title: "Inclui+",
    category: "UX/UI",
    year: "2024",
    description: "Projeto acadêmico de identidade visual e UX/UI para site.",
    tags: ["UX/UI"],
    tools: ["Figma"],
    images: [mockupInclui],
    featured: false,
    cardBg: "#f5c800",
  },
  {
    id: 12,
    title: "NUNO",
    category: "Identidade Visual",
    year: "2025",
    description: "Cartaz e story para show da banda de Jazz Fusion NUNO.",
    tags: ["Identidade Visual", "Social Media", "Divulgação"],
    tools: ["Figma"],
    images: [nunoCartaz],
    featured: false,
    cardBg: "#A2414C",
  },
  {
    id: 13,
    title: "Rafa Portella Quarteto",
    category: "Identidade Visual",
    year: "2025",
    description: "Cartaz e story para show do Rafa Portella Quarteto.",
    tags: ["Identidade Visual", "Divulgação"],
    tools: ["Figma"],
    images: [postellaPost, portellaCelular],
    featured: false,
    cardBg: "#A8BB5B",
  },
  {
    id: 14,
    title: "Manual do Astrólogo",
    category: "Design Editorial",
    year: "2024",
    description: "Projeto acadêmico de livro de astrologia.",
    tags: ["Design Editorial"],
    tools: ["Adobe Illustrator", "Adobe InDesign"],
    images: [manualAstrologo, manualAstrologo2],
    featured: false,
    cardBg: "#ccd4e8",
  },
   {
    id: 15,
    title: "Dra Tássia Maria",
    category: "Identidade Visual",
    year: "2026",
    description: "Identidade visual, jaleco e papelaria para a Dra Tássia Maria.",
    tags: ["Identidade Visual", "Ilustração"],
    tools: ["Figma", "Adobe Illustrator", "Adobe InDesign"],
    images: [manual1, receituario, jaleco],
    featured: false,
    cardBg: "#f5d7f5",
  },
];