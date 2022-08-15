const API = 'https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=10'
const content = null || document.querySelector('#content')

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'e0a50cf221mshbdff1ca9d971678p1a5a7ejsn0ac790b4bf9e',
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
}

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options)
    const data = await response.json()
    return data
}

(async () => {
    try {
        const videos = await fetchData(API)

        console.log(videos)
        let view = `
        ${videos.items.map(video => `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.snippet.title}
                        </h3>
                </div>
            </div>
        `).slice(0, 4).join('')}`
        content.innerHTML = view
    } catch (error) {
        console.log(error)
    }
})()
