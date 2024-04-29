import localFont from "next/font/local";

const azerete = localFont({
  src: [{ path: "../../assets/fonts/azerete.ttf" }],
  variable: "--font-azerete",
});
const epilogue = localFont({
  src: [{ path: "../../assets/fonts/epilogue.ttf" }],
  variable: "--font-epilogue",
});

export { azerete, epilogue };
