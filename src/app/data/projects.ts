import { Project } from "../types/Project";
import mockupHelvetica from "@/imports/mockup_1.png";
import mockupInclui from "@/imports/mockup_inclui_.png";
import obs1 from "@/imports/observatorio_behance_1.png";
import obs2 from "@/imports/observatorio_behance_2.png";
import obs3 from "@/imports/observatorio_behance_3.png";
import portellaCelular from "@/imports/portella_celular.png";
import postellaPost from "@/imports/post_instagram.png";
import trioProfile from "@/imports/Profile.png";
import taroCards from "@/imports/tar_.png";
import trioPerfil from "@/imports/trio_perfil.png";
import colecaoFantastica from "@/imports/Cole__o_Fant_stica.png";
import manualAstrologo from "@/imports/mock.png";
import calibre22 from "@/imports/mock_dferente.png";
import mfCelular from "@/imports/mf_celular.png";
import mfLogo from "@/imports/mf_logo.png";
import nunoCartaz from "@/imports/nuno.png";
import manualAstrologo2 from "@/imports/mock2.png";
import trioIndecenteVideo from "@/imports/trintasegundoshoje.mp4";
import manual1 from "@/imports/manual1.png";
import receituario from "@/imports/receituario.png"; 
import jaleco from "@/imports/jalecomockup.png";

// ── Data ─────────────────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: 1,
    title: "Coleção Fantástica",
    category: "Design Editorial",
    year: "2025",
    description: "Projeto acadêmico de capas para coleção de literatura fantástica realista.",
    tags: ["Design Editorial", "Ilustração"],
    tools: ["Adobe Illustrator", "Adobe InDesign"],
    images: [colecaoFantastica],
    featured: true,
    cardBg: "#e8ddd0",
  },
  {
    id: 2,
    title: "Observatório da Percepção do Crime",
    category: "UX/UI",
    year: "2025",
    description: "Identidade visual e UX/UI para site de TCC da UNIRIO.",
    tags: ["UX/UI", "Dados"],
    tools: ["Figma"],
    images: [obs1, obs2, obs3],
    featured: true,
    cardBg: "#ffd38c",
  },
  {
    id: 3,
    title: "Baralho de Tarô",
    category: "Identidade Visual",
    year: "2025",
    description: "Projeto acadêmico de ilustração para baralho de tarô.",
    tags: ["Identidade Visual", "Ilustração"],
    tools: ["Adobe Photoshop", "Adobe InDesign"],
    images: [taroCards],
    featured: false,
    cardBg: "#BDBDDB",
  },
  {
    id: 4,
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
    id: 5,
    title: "Trio Indecente",
    category: "Identidade Visual",
    year: "2025",
    description: "Identidade visual e conteúdo para o Trio Indecente.",
    tags: ["Identidade Visual", "Ilustração", "Divulgação"],
    tools: ["Adobe Illustrator", "Figma", "Adobe Premiere"],
    images: [trioPerfil, trioProfile, trioIndecenteVideo],
    featured: false,
    cardBg: "#AE423F",
  },
 {
    id: 6,
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
  {
    id: 7,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
    title: "NUNO",
    category: "Identidade Visual",
    year: "2025",
    description: "Cartaz e story para show da banda de Jazz Fusion NUNO.",
    tags: ["Identidade Visual", "Divulgação"],
    tools: ["Figma"],
    images: [nunoCartaz],
    featured: false,
    cardBg: "#A2414C",
  },
  {
    id: 12,
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
];