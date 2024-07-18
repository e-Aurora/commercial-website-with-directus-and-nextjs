"use client";
import { ProductTypes } from "@/types";
import Image from "next/image";

export default function ProductItem({
  id,
  title,
  total_stock,
  photo_url,
  prices,
}: ProductTypes) {
  const directusUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL;
  const imageUrl = photo_url;
  const price = JSON.parse(prices)[0].price;
  return (
    <div>
      
      <h5>{title}</h5>
      <p>
        stock: {total_stock}
      </p>
      <p>
        price: {price}
      </p>
    </div>
  );
}

/*<Image
        src={imageUrl}
        width={200}
        height={250}
        alt={title}
      />*/