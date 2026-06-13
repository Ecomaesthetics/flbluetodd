import { useEffect } from "react";

interface SEOMetadata {
  title: string;
  description: string;
}

export function useSEO({ title, description }: SEOMetadata) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Set meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);
  }, [title, description]);
}
