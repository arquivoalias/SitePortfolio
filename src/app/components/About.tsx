import type { Dispatch, SetStateAction, CSSProperties } from "react";

import TypewriterText from "./TypewriterText";
import MagneticButton from "./MagneticButton";

import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import Star from "@/imports/Star/estrela";


type AboutProps = {
  profilePhoto: string;
  setCvOpen: Dispatch<SetStateAction<boolean>>;
};

export default function About({
  profilePhoto,
  setCvOpen,
}: AboutProps) {
  return (
 <section id="sobre" className="bg-card border-y border-border py-24 md:py-32">
        <div className="px-6 md:px-12 max-w-7xl mx-auto">

          {/* Top: text + photo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start mb-20">
            <div>
              <p className="text-accent mb-6" style={{ fontFamily: "'Inconsolata', monospace", fontSize: "0.9rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Sobre
              </p>
              <h2 className="text-foreground leading-tight mb-8" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 600, letterSpacing: "-0.03em" }}>
                <TypewriterText text="Prazer em te conhecer!" />
              </h2>

              <p className="leading-relaxed mb-5" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", color: "#5e7e67" }}>
                Me chamo{" "}
                <strong style={{ fontWeight: 600, color: "var(--accent)" }}>Valentina</strong>
                {", sou carioca da gema, moradora de Botafogo e há 21 anos sou obcecada por "}
                <strong style={{ fontWeight: 600, color: "var(--accent)" }}>arte, cultura e o lugar do design no meio de tudo.</strong>
                {" Estou no 6º período de "}
                <strong style={{ fontWeight: 600, color: "var(--accent)" }}>Comunicação Visual Design</strong>
                {" na Escola de Belas Artes da "}
                <strong style={{ fontWeight: 600, color: "var(--accent)" }}>UFRJ</strong>
                {", e minha formatura está prevista para Julho de 2028."}
              </p>

              <p className="leading-relaxed mb-5" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", color: "#5e7e67" }}>
                {"Meu coração está nas aulas projetuais, especialmente em "}
                <strong style={{ fontWeight: 600, color: "var(--accent)" }}>Branding</strong>
                {" e "}
                <strong style={{ fontWeight: 600, color: "var(--accent)" }}>Design Editorial</strong>
                {", e como freelancer sou apaixonada por criar "}
                <strong style={{ fontWeight: 600, color: "var(--accent)" }}>Identidades Visuais </strong>
                {"e peças de "}
                <strong style={{ fontWeight: 600, color: "var(--accent)" }}>comunicação</strong>
                {" e "}
                <strong style={{ fontWeight: 600, color: "var(--accent)" }}>divulgação</strong>.
              </p>

              <p className="leading-relaxed mb-5" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "var(--accent)", lineHeight: 1.4 }}>
                O que mais me anima é usar o design para encontrar o seu público e falar exatamente a língua dele.
              </p>

              <p className="leading-relaxed mb-8" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", color: "#5e7e67" }}>
                {"Fora do ateliê você me encontra pegando uma "}
                <strong style={{ fontWeight: 600, color: "var(--accent)" }}>praia</strong>
                {", num "}
                <strong style={{ fontWeight: 600, color: "var(--accent)" }}>museu</strong>
                {", curtindo "}
                <strong style={{ fontWeight: 600, color: "var(--accent)" }}>jazz</strong>
                {" ao vivo, vasculhando "}
                <strong style={{ fontWeight: 600, color: "var(--accent)" }}>livrarias</strong>
                {", "}
                <strong style={{ fontWeight: 600, color: "var(--accent)" }}>desenhando</strong>
                {" desconhecidos ou cozinhando um bom jantar "}
                <strong style={{ fontWeight: 600, color: "var(--accent)" }}>vegetariano</strong>.
              </p>

              <MagneticButton>
                <button
                  onClick={() => setCvOpen(true)}
                  className="inline-flex items-center justify-center transition-colors hover:opacity-80"
                  style={{ background: "var(--foreground)", color: "var(--primary-foreground)", fontFamily: "'Inconsolata', monospace", fontSize: "0.875rem", letterSpacing: "-0.03em", padding: "10px 20px" }}
                >
                  Veja meu currículo (PDF)
                </button>
              </MagneticButton>
            </div>
            

{/* Foto */}
<div
  className="relative shrink-0 overflow-visible mx-auto"
  style={{
    width: "min(400px, calc(100vw - 48px))",
    aspectRatio: "480/550",
  }}
>
  {/* Estrela superior grande */}
  <div
    className="absolute pointer-events-none"
    style={{
      top: "clamp(-40px, -6vw, -110px)",
left: "clamp(-35px, -5vw, -120px)",
      width: "clamp(90px, 18vw, 150px)",
height: "clamp(90px, 18vw, 150px)",
      zIndex: 2,
      animation: "floatStarA 5s ease-in-out infinite",
    }}
  >
    <Star 
      width="100%"
      height="100%"
      fillColor="#3A5942"
      strokeColor="#3A5942"
    />
  </div>

  {/* Estrela superior pequena */}
  <div
    className="absolute pointer-events-none"
    style={{
      top: "clamp(65px, 18vw, 120px)",
      left: "clamp(-18px, -12vw, -50px)",
      width: "clamp(32px, 7vw, 60px)",
height: "clamp(32px, 7vw, 60px)",
      zIndex: 2,
      animation: "floatStarB 4.5s ease-in-out infinite",
    }}
  >
    <Star
      width="100%"
      height="100%"
      fillColor="#C4CCB5"
      strokeColor="#3A5942"
    />
  </div>

  {/* Foto */}
  <div
    className="absolute inset-0 overflow-hidden"
    style={{
      border: "5px solid rgba(58,89,66,0.2)",
      background: "var(--secondary)",
      animation: "float 5s ease-in-out infinite",
      zIndex: 1,
    }}
  >
    <ImageWithFallback
  src={profilePhoto}
  alt="Foto de Valentina Real"
  className="w-full h-full object-cover object-top"
  style={{
    transform: "scale(1.13) translatey(12px)",
    transformOrigin: "center bottom",
    objectFit: "cover",
    objectPosition: "center",
  }}
/>
  </div>

  {/* Estrela inferior grande */}
  <div
    className="absolute pointer-events-none"
    style={{
      bottom: "clamp(-20px, -4vw, -35px)",
right: "clamp(-20px, -4vw, -35px)",
      width: "clamp(45px, 11vw, 90px)",
height: "clamp(45px, 11vw, 90px)",
      zIndex: 2,
      animation: "floatStarA 5s ease-in-out infinite",
    }}
  >
    <Star
      width="100%"
      height="100%"
      fillColor="#3A5942"
      strokeColor="#3A5942"
    />
  </div>

  {/* Estrela inferior pequena */}
  <div
    className="absolute pointer-events-none"
    style={{
      bottom: "clamp(-20px, -10vw, -55px)",
      right: "clamp(10px, 12vw, 70px)",
      width: "clamp(22px, 5vw, 42px)",
height: "clamp(22px, 5vw, 42px)",
      zIndex: 2,
      animation: "floatStarB 4.5s ease-in-out infinite",
    }}
  >
    <Star
      width="100%"
      height="100%"
      fillColor="#C4CCB5"
      strokeColor="#3A5942"
    />
  </div>
</div>
</div>

          {/* Skills */}
          <div
  className="grid grid-cols-2 md:flex md:justify-between"
  style={{
    gap: "1.8rem",
  }}
>
            {[
              { area: "Design", items: ["Comunicação Visual", "Branding", "Design Editorial", "UX/UI", "Social Media"] },
              { area: "Ferramentas", items: ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Figma", "Wordpress"] },
              { area: "Processo", items: ["Metodologia ágil", "Scrum", "Azure DevOps", "Meta for Business", "Monday"] },
              { area: "Idiomas", items: ["Inglês — C2 fluente", "Francês — A1 básico"] },
            ].map((group, index) => (
  <div
  key={group.area}
  className="relative"
  style={{
  width: "100%",
  flex: 1,
  textAlign: "left",
}}
>{index < 3 && (
  <div
    className="hidden md:block"
    style={{
      position: "absolute",
      right: 0,
      top: "8px",
      bottom: "8px",
      width: "1px",
      background: "rgba(70,90,70,.12)",
    }}
  />
)}
  
                <p className="text-accent mb-3" style={{ fontFamily: "'Inconsolata', monospace",
                  fontSize: "clamp(.72rem,2vw,.9rem)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                  {group.area}
                </p>
                <ul className="space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-muted-foreground" style={{ fontSize: "0.875rem" }}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}