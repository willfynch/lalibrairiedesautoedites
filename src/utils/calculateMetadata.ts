import { Metadata } from "next";
import { METADATA_INFOS, METADATA_KEYWORDS } from "./constants";

export function calculateMetadata(
  title: string,
  canonical: string,
  og?: string,
  description?:string
): Metadata {
  return {
    title: title,
    description: description ?? METADATA_INFOS.DESCRIPTION,
    keywords: METADATA_KEYWORDS,
    metadataBase: new URL(METADATA_INFOS.BASE_URL),
    alternates: {
      canonical: METADATA_INFOS.BASE_URL + canonical,
    },
    openGraph: {
      images: og ? [og] : ["/images/opengraph.png"],
    },
    twitter: {
      card: "summary_large_image",
      images: og ? [og] : ["/images/opengraph.png"],
      description: description ?? METADATA_INFOS.DESCRIPTION,
      title: title,
    },
  };
}
