import { Plus_Jakarta_Sans, Pacifico } from "next/font/google";

/**
 * Primary UI font — Plus Jakarta Sans
 * Modern geometric sans with excellent legibility at all weights (300–800).
 * Perfect for developer-tool UIs with a polished, contemporary feel.
 */
export const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

/**
 * Display / wordmark font — Pacifico
 * Used exclusively for the "Coloured Icons" logo mark.
 */
export const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
