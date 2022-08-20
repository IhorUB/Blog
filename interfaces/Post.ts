import { Author } from "./Author";
import { Category } from "./Category";

export interface Post {
  title: string;
  author: Author;
  categories: Category[];
  excerpt?: string;
  slug: string;
  image: { url: string };
  createdAt: string;
}
