var playlist = {
  artistName: 'songTitle'
}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = 'song1'
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.Slowdive
}
