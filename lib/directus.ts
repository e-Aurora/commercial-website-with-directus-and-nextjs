import { createDirectus, rest } from "@directus/sdk";
import { ProductTypes, VariantTypes } from "@/types"

type Schema = {
  products: ProductTypes[];
  variants: VariantTypes[];
};

const directus = createDirectus<Schema>(
  process.env.DIRECTUS_URL as string
).with(rest());

export default directus;