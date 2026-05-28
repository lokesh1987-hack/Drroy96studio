// app/api/instagram/route.js
// Future: Connect to Instagram Basic Display API to fetch real posts
// For now returns static placeholder data from config

import { NextResponse } from "next/server";
// import { siteConfig } from "@/config/site";

export async function GET() {
  // To connect real Instagram feed:
  // 1. Register app at developers.facebook.com
  // 2. Get INSTAGRAM_ACCESS_TOKEN
  // 3. Fetch from https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&access_token=TOKEN

  /*
  if (process.env.INSTAGRAM_ACCESS_TOKEN) {
    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,like_count&limit=12&access_token=${process.env.INSTAGRAM_ACCESS_TOKEN}`
    )
    const data = await res.json()
    return NextResponse.json(data)
  }
  */

  // Fallback: return config data
  try {
    if (process.env.MONGODB_URI) {
      const { MongoClient } = await import("mongodb");
      const client = new MongoClient(process.env.MONGODB_URI);
      await client.connect();
      const gallery = await client
        .db("drroy")
        .collection("gallery")
        .find()
        .toArray();
      console.log(gallery);
      await client.close();
    }

    return NextResponse.json({ success: true, ref });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
