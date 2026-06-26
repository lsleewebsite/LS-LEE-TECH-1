function getText(richTextArray) {
  return richTextArray?.map((t) => t.plain_text || t.text?.content || '').join('') || ''
}

function parseProjects(results) {
  return results
    .filter((page) => page.properties?.Published?.checkbox === true)
    .map((page) => {
      const p = page.properties

      const imagesRaw = getText(p.Images?.rich_text)
      const images = imagesRaw
        .split(',')
        .map((url) => url.trim())
        .filter(Boolean)

      return {
        id: page.id,
        title: p.Title?.title?.[0]?.plain_text || p.Title?.title?.[0]?.text?.content || 'Untitled',
        categories: p.Category?.multi_select?.map((c) => c.name) || [],
        year: p.Year?.number || '',
        image: p.Image?.url || null,
        images,
        description: getText(p.Description?.rich_text),
      }
    })
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const notionRes = await fetch(
      `https://api.notion.com/v1/databases/${process.env.NOTION_PROJECTS_DATABASE_ID}/query`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
          'Notion-Version': '2022-06-28',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sorts: [{ property: 'Year', direction: 'descending' }],
        }),
      }
    )

    const data = await notionRes.json()

    if (!notionRes.ok) {
      return res.status(notionRes.status).json({
        error: 'Failed to fetch projects from Notion',
        details: data,
      })
    }

    return res.status(200).json({
      projects: parseProjects(data.results || []),
    })
  } catch (error) {
    return res.status(500).json({
      error: 'Server error while fetching projects',
    })
  }
}
