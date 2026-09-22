import {
  GraduationCap,
  BookOpen,
  SpellCheck,
  Headphones,
  PenLine,
  Languages,
  Mic,
  Brain,
  Library,
  Dumbbell,
} from "lucide-react";

export const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

export const LEVEL_TEST_URL =
  "https://english-level-test-copy-8f9830c8.base44.app/";

export const YOUTUBE_URL = "";
export const INSTAGRAM_URL = "";
export const CLASSES_URL = "";

export const NAV_ITEMS = [
  { label: "Aprender", href: "#learn" },
  { label: "Ferramentas", href: "#tools" },
  { label: "Vídeos", href: "#videos" },
  { label: "Aulas", href: "#classes" },
  { label: "Explorar", href: "#about" },
];

export const LEARN_MODULES = [
  {
    id: "level-test",
    icon: GraduationCap,
    title: "TESTE SEU INGLÊS",
    desc: "Descubra seu nível de inglês.",
    cta: "Faça o teste →",
    url: LEVEL_TEST_URL,
    status: "active",
  },
  {
    id: "dictionary",
    icon: BookOpen,
    title: "DICIONÁRIO",
    desc: "Pesquise palavras, expressões e significados.",
    cta: "Em breve",
    status: "coming_soon",
  },
  {
    id: "grammar",
    icon: SpellCheck,
    title: "GRAMÁTICA",
    desc: "Entenda a gramática de forma simples.",
    cta: "Em breve",
    status: "coming_soon",
  },
  {
    id: "listening",
    icon: Headphones,
    title: "LISTENING",
    desc: "Pratique sua compreensão auditiva.",
    cta: "Em breve",
    status: "coming_soon",
  },
  {
    id: "practice",
    icon: PenLine,
    title: "PRÁTICA",
    desc: "Exercícios e desafios para praticar.",
    cta: "Em breve",
    status: "coming_soon",
  },
  {
    id: "vocabulary",
    icon: Languages,
    title: "VOCABULÁRIO",
    desc: "Expanda seu vocabulário.",
    cta: "Em breve",
    status: "coming_soon",
  },
];

export const TOOLS = [
  {
    icon: BookOpen,
    title: "DICIONÁRIO",
    status: "coming_soon",
  },
  {
    icon: GraduationCap,
    title: "TESTE SEU INGLÊS",
    url: LEVEL_TEST_URL,
    status: "active",
  },
  {
    icon: Languages,
    title: "TRADUTOR",
    status: "coming_soon",
  },
  {
    icon: SpellCheck,
    title: "GRAMÁTICA",
    status: "coming_soon",
  },
  {
    icon: Mic,
    title: "PRONÚNCIA",
    status: "coming_soon",
  },
  {
    icon: Brain,
    title: "QUIZZES",
    status: "coming_soon",
  },
  {
    icon: Library,
    title: "VOCABULÁRIO",
    status: "coming_soon",
  },
  {
    icon: Dumbbell,
    title: "EXERCÍCIOS",
    status: "coming_soon",
  },
];
