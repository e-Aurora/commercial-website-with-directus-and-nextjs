import directus from "./directus";
import { readItems, createItem, updateItems } from "@directus/sdk";
import { ProductTypes } from "@/types";

export const getAllProducts = async () => {
  try {
    const results = await directus.request(
      readItems("products")
    );
    return results;
  }
  catch (error) {
    console.error("Error fetching products:", error);
    console.log(error);
  }
};

export const searchProducts = async (query: string) => {
    try {
      const results = await directus.request(
        readItems("products", {
          search: query
        })
      );
      return results;
    } catch (error) {
      console.error("Error searching for products:", error);
      console.log(error);
    }
  };