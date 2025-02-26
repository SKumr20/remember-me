import { useState, useEffect } from "react";

export default function ImageCard({
  imageUrl,
  caption
}) {
  return (
    (<figure
      className="w-[200px] overflow-hidden rounded-base border-2 border-border bg-main font-base shadow-shadow transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none">
      <img className="w-full aspect-[4/5]" src={imageUrl} alt="image" />
      <figcaption className="border-t-2 text-sm border-border p-2">
        {caption}
      </figcaption>
    </figure>)
  );
}
