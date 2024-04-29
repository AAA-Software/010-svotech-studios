import localFont from "next/font/local";

const azerete = localFont({
  src: [{ path: "../../assets/fonts/azerete.ttf" }],
  variable: "--font-azerete",
});
const epilogue = localFont({
  src: [{ path: "../../assets/fonts/epilogue.ttf" }],
  variable: "--font-epilogue",
});
const inter = localFont({
  src: [{ path: "../../assets/fonts/inter.ttf" }],
  variable: "--font-inter",
});

export { azerete, epilogue, inter };
