export const genres = [
    { _id: "5b21ca3eeb7f6fbccd471900", name: "灾难" },
    { _id: "5b21ca3eeb7f6fbccd471901", name: "科幻" },
    { _id: "5b21ca3eeb7f6fbccd471902", name: "动作" },
    { _id: "5b21ca3eeb7f6fbccd471903", name: "喜剧" }
]

export function getGenres() {
    return genres.filter(g => g);
}