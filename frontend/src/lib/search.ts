import { ALL_POSTS } from "./post";
import { FAQ_CATEGORIES } from "./faq";

export type SearchCategory = "page" | "blog" | "faq" | "docs";

export interface SearchResult {
  title: string;
  excerpt: string;
  link: string;
  category: SearchCategory;
}

const STATIC_PAGES: SearchResult[] = [
  {
    title: "Home",
    excerpt: "Everything you need to build on Soroban. A complete toolkit for VS Code.",
    link: "/",
    category: "page",
  },
  {
    title: "Products",
    excerpt: "Kit Studio for VS Code and Kit Canvas for the browser — everything you need to build on Soroban.",
    link: "/#products",
    category: "page",
  },
  {
    title: "Get Started",
    excerpt: "Install Stellar Kit from the VS Code Marketplace and start building.",
    link: "/#get-started",
    category: "page",
  },
];

export function getSearchIndex(): SearchResult[] {
  const index: SearchResult[] = [...STATIC_PAGES];

  ALL_POSTS.forEach((post) => {
    index.push({
      title: post.title,
      excerpt: post.excerpt,
      link: `/blog/${post.slug}`,
      category: "blog",
    });
  });

  FAQ_CATEGORIES.forEach((cat) => {
    cat.items.forEach((item) => {
      index.push({
        title: item.question,
        excerpt: item.answer,
        link: `/faq#${item.id}`,
        category: "faq",
      });
    });
  });

  return index;
}

export function search(query: string): SearchResult[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  return getSearchIndex().filter(
    (item) =>
      item.title.toLowerCase().includes(q) ||
      item.excerpt.toLowerCase().includes(q)
  );
}
