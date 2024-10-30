export async function fetchNotionData(notionDatabaseId, notionToken) {
    const response = await fetch(`https://api.notion.com/v1/databases/${notionDatabaseId}/query`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${notionToken}`,
            'Content-Type': 'application/json',
            'Notion-Version': '2022-06-28',
        },
    });

    if (!response.ok) {
        throw new Error('Failed to fetch Notion data');
    }

    const data = await response.json();
    return data.results.map(page => ({
        peso: page.properties.Peso.number,
        altura: page.properties.Altura.number,
        idade: page.properties.Idade.number,
    }));
}