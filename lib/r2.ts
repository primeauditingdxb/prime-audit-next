import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: process.env.CLOUDFLARE_R2_REGION || "auto",
  endpoint: process.env.CLOUDFLARE_R2_ENDPOINT_URL?.trim(),
  credentials: {
    accessKeyId: process.env.CLOUDFLARE_R2_ACCESS_KEY?.trim() || "",
    secretAccessKey: process.env.CLOUDFLARE_R2_SECRET_KEY?.trim() || "",
  },
});

/**
 * Uploads a blog image to Cloudflare R2
 * 
 * @param fileBuffer The image data as a Buffer
 * @param fileName The original filename
 * @param contentType The MIME type of the file
 * @returns The full public URL of the uploaded image
 */
export async function uploadBlogImageToR2(
  fileBuffer: Buffer,
  fileName: string,
  contentType: string
): Promise<string> {
  // Sanitize fileName: replace spaces and special characters with underscores
  const sanitizedFileName = fileName
    .replace(/\s+/g, "_")
    .replace(/[^a-zA-Z0-9._-]/g, "_");

  // Prefix with timestamp for uniqueness
  const uniqueFileName = `${Date.now()}_${sanitizedFileName}`;

  // Store in blog_images/ folder
  const key = `blog_images/${uniqueFileName}`;

  const bucketName = process.env.NEXT_PUBLIC_CLOUDFLARE_R2_BUCKET;

  await s3Client.send(
    new PutObjectCommand({
      Bucket: bucketName,
      Key: key,
      Body: fileBuffer,
      ContentType: contentType,
    })
  );

  // Use the public domain to construct the final URL
  const publicDomain = process.env.NEXT_PUBLIC_CLOUDFLARE_R2_PUBLIC_DOMAIN?.trim().replace(/\/$/, "");

  // The correct URL pattern includes the bucket name: publicDomain/bucketName/key
  return `${publicDomain}/${key}`;
}
