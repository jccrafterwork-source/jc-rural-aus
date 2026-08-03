/**
 * Vercel serverless function — Manus storage proxy
 *
 * Routes incoming requests for /manus-storage/<path> to the Manus Forge
 * storage API, obtains a pre-signed download URL, and issues a temporary
 * redirect so the browser fetches the asset directly.
 *
 * Required Vercel environment variables (set in the Vercel project dashboard):
 *   BUILT_IN_FORGE_API_URL  — base URL of the Manus Forge API
 *   BUILT_IN_FORGE_API_KEY  — API key for the Manus Forge API
 */
export default async function handler(req, res) {
  const path = /** @type {string} */ (req.query.path ?? "");

  const forgeBaseUrl = (process.env.BUILT_IN_FORGE_API_URL ?? "").replace(
    /\/+$/,
    ""
  );
  const forgeKey = process.env.BUILT_IN_FORGE_API_KEY;

  if (!forgeBaseUrl || !forgeKey) {
    res.status(500).send("Storage not configured");
    return;
  }

  try {
    const forgeUrl = new URL("v1/storage/presign/get", forgeBaseUrl + "/");
    forgeUrl.searchParams.set("path", path);

    const forgeResp = await fetch(forgeUrl.toString(), {
      headers: { Authorization: "Bearer " + forgeKey },
    });

    if (!forgeResp.ok) {
      res.status(502).send("Storage backend error");
      return;
    }

    const data = /** @type {{ url?: string }} */ (await forgeResp.json());
    if (!data.url) {
      res.status(502).send("Empty signed URL");
      return;
    }

    // Cache for one hour; the pre-signed URL is short-lived on the CDN side
    res.setHeader("Cache-Control", "public, max-age=3600");
    res.redirect(307, data.url);
  } catch (err) {
    console.error("Storage proxy error:", err);
    res.status(502).send("Storage proxy error");
  }
}
