import { type ClassValue, clsx } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function constructMetadata({
  title = "SvoTech Studios - Full Service Agency",
  description = "Dedicated Web App development agency based in Austria, we harness the full potential of modern technologies like react to build responsive and functional SAAS products that set trends in the digital landscape.",
  verification = {
    google: "",
    "data-rh": true,
  },
  image = "/common/thumbnail.webp",
  icons = "/favicon.ico",
  noIndex = true,
}: {
  title?: string;
  description?: string;
  verification?: { google: string; "data-rh": boolean };
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    verification,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@svotech",
    },
    icons,
    metadataBase:
      new URL("https://svotech.io") || new URL("https://www.svotech.io"),
    themeColor: "#000",
    ...(noIndex && {
      robots: {
        index: true,
        follow: true,
      },
    }),
  };
}

export function constructScheduleMetadata({
  title = "SvoTech Studios - Schedule Call",
  description = "Schedule a discovery call with us",
  image = "/common/thumbnail.webp",
  icons = "/favicon.ico",
  noIndex = true,
}: {
  title?: string;
  description?: string;
  verification?: { google: string; "data-rh": boolean };
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@svotech",
    },
    icons,
    metadataBase:
      new URL("https://svotech.io") || new URL("https://www.svotech.io"),
    themeColor: "#000",
    ...(noIndex && {
      robots: {
        index: true,
        follow: true,
      },
    }),
  };
}
