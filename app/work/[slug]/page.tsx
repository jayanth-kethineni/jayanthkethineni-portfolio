import { notFound } from "next/navigation";
import { promises as fs } from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const files = await fs.readdir(path.join(process.cwd(), "case-studies"));
  return files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));
}

async function getPost(slug: string) {
  try {
    const raw = await fs.readFile(
      path.join(process.cwd(), "case-studies", `${slug}.mdx`),
      "utf-8"
    );
    return { raw };
  } catch {
    return null;
  }
}

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return <MDXRemote source={post.raw} />;
}
