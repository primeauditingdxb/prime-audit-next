const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { remark } = require('remark');
const html = require('remark-html');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const postsDirectory = path.join(process.cwd(), 'content/blog');
  
  if (!fs.existsSync(postsDirectory)) {
    console.log('No content directory found.');
    return;
  }

  const fileNames = fs.readdirSync(postsDirectory);
  
  for (const fileName of fileNames) {
    if (!fileName.endsWith('.md')) continue;

    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);
    
    // Process content to HTML if it's markdown
    let finalContent = matterResult.content;
    const processedContent = await remark().use(html).process(matterResult.content);
    finalContent = processedContent.toString();

    // extract fields
    const {
      metaTitle,
      metaDescription,
      canonical,
      coverImage,
      h1Title,
      date,
      tags,
      excerpt
    } = matterResult.data;

    await prisma.blog.upsert({
      where: { slug: slug },
      update: {
        metaTitle: metaTitle || h1Title,
        metaDescription: metaDescription || '',
        canonical: canonical || null,
        coverImage: coverImage || '/images/blogs/default.jpg',
        h1Title: h1Title || metaTitle,
        date: date ? date.toString() : new Date().toISOString().split('T')[0],
        tags: tags || [],
        excerpt: excerpt || '',
        content: finalContent,
      },
      create: {
        slug: slug,
        metaTitle: metaTitle || h1Title,
        metaDescription: metaDescription || '',
        canonical: canonical || null,
        coverImage: coverImage || '/images/blogs/default.jpg',
        h1Title: h1Title || metaTitle,
        date: date ? date.toString() : new Date().toISOString().split('T')[0],
        tags: tags || [],
        excerpt: excerpt || '',
        content: finalContent,
      }
    });
    
    console.log(`Migrated: ${slug}`);
  }

  console.log('Done migrating blogs.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
