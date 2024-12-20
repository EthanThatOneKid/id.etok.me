import type { Graph, Person } from "schema-dts";

/**
 * etok is a Person representing Ethan Davidson.
 */
export const etok = {
  "@id": "https://id.etok.me/",
  "@type": "Person",
  name: ["Ethan", "EthanThatOneKid", "Etok"],
  identifier: "etok",
  description:
    "Ethan Davidson, a California State University, Fullerton alum with a Bachelor of Science degree in Computer Science and former software engineering intern, is interested in web development, open-source, and Pokémon breeding and glitching.",
  url: "https://ethandavidson.com/",
  sameAs: [
    "https://github.com/EthanThatOneKid",
    "https://linkedin.com/in/etok",
    "https://devpost.com/EthanThatOneKid",
    "https://bsky.app/profile/etok.me",
    "https://blahaj.zone/@etok",
    "https://producthunt.com/@etok",
    "https://twitter.com/__etok__",
  ],
  email: "mailto:ethan.r.davidson@gmail.com",
  height: "177 cm",
  birthDate: "2001-03-24",
  knowsLanguage: "en",
  worksFor: {
    "@type": "Organization",
    "@id": "https://id.fart.tools/",
  },
  alumniOf: {
    "@type": "Organization",
    "@id": "https://acmcsuf.com/",
  },
  colleague: [
    {
      "@type": "Person",
      "@id": "https://0xd14.id/",
    },
    {
      "@type": "Person",
      "@id": "https://id.johncarlomanuel.com/",
    },
  ],
} as const satisfies Person;

/**
 * graph is the JSON-LD graph containing `ethan`.
 */
export const graph = {
  "@context": "https://schema.org",
  "@graph": [etok],
} as const satisfies Graph;
