import { Outfit, Rubik, Pacifico } from "next/font/google";

export const outfit = Outfit({ subsets: ["latin"], display: "fallback" });

export const rubik = Rubik({
  subsets: ["latin"],
  display: "fallback",
});

export const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  display: "fallback",
});
