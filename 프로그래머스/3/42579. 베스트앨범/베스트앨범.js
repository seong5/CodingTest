function solution(genres, plays) {
  const byGenre = genres.reduce((acc, g, i) => {
    if (!acc[g]) {
      acc[g] = { total: 0, songs: [] };
    }
    acc[g].total += plays[i];
    acc[g].songs.push({ id: i, plays: plays[i] });
    return acc;
  }, {}); 

  const orderedGenres = Object.entries(byGenre).sort(
    (a, b) => b[1].total - a[1].total
  );

  const result = [];
  for (const [, { songs }] of orderedGenres) {
    songs
      .sort((a, b) => (b.plays !== a.plays ? b.plays - a.plays : a.id - b.id))
      .slice(0, 2)
      .forEach(song => result.push(song.id));
  }

  return result;
}