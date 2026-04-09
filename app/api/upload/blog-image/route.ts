import { NextRequest, NextResponse } from "next/server";
import { uploadBlogImageToR2 } from "@/lib/r2";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("image") as File | null;

    if (!file) {
      return NextResponse.json(
        { error: "No image file provided" },
        { status: 400 }
      );
    }

    // Convert File to Buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // Call the utility function
    const imageUrl = await uploadBlogImageToR2(
      buffer,
      file.name,
      file.type
    );

    return NextResponse.json({ 
      success: true,
      url: imageUrl 
    });
  } catch (error) {
    console.error("Error uploading image:", error);
    return NextResponse.json(
      { error: "Failed to upload image. " + (error instanceof Error ? error.message : String(error)) },
      { status: 500 }
    );
  }
}
