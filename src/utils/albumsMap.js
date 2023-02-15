const albumsMap = ({ id, name, year }, songs) => ({
  id,
  name,
  year,
  songs: [...songs],
});

module.exports = albumsMap;
