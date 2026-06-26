function getText(richTextArray) {
  return richTextArray?.map((t) => t.plain_text || t.text?.content || '').join('') || ''
}

function parseCerts(results) {
  return results
    .filter((page) => page.properties?.Published?.checkbox === true)
    .map((page) => {
      const p = page.properties

      return {
        id: page.id,
        name: p.Name?.title?.[0]?.plain_text || p.Name?.title?.[0]?.text?.content || 'Untitled',
        body: getText(p.Body?.rich_text),
        issuedBy: getText(p.IssuedBy?.rich_text),
        scope: getText(p.Scope?.rich_text),
        certNumber: getText(p.CertNumber?.rich_text),
        validFrom: p.ValidFrom?.date?.start || '',
        validTo: p.ValidTo?.date?.start || '',
        certificate: p.Certificate?.url || null,
      }
    })
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const notionRes = await fetch(
      `https://api.notion.com/v1/databases/${process.env.NOTION_CERTIFICATIONS_DATABASE_ID}/query`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
          'Notion-Version': '2022-06-28',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({}),
      }
    )

    const data = await notionRes.json()

    if (!notionRes.ok) {
      return res.status(notionRes.status).json({
        error: 'Failed to fetch certifications from Notion',
      })
    }

    return res.status(200).json({
      certifications: parseCerts(data.results || []),
    })
  } catch (error) {
    return res.status(500).json({
      error: 'Server error while fetching certifications',
    })
  }
}
