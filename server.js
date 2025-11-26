import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/api/songs", async (req, res) => {
  const artist = (req.query.s || req.query.artist || "").trim();
  if (!artist) return res.json({ songs: [] });
  try {
    const encoded = encodeURIComponent(artist);
    const artistRes = await axios.get(
      `https://theaudiodb.com/api/v1/json/123/search.php?s=${encoded}`
    );

    const artistData = artistRes.data.artists?.[0];
    if (!artistData) return res.json({ songs: [] });

    const artistId = artistData.idArtist;

    const albumsRes = await axios.get(
      `https://theaudiodb.com/api/v1/json/123/album.php?i=${artistId}`
    );

    const albums = albumsRes.data.album || [];

    const songs = [];

    for (const album of albums) {
      const tracksRes = await axios.get(
        `https://theaudiodb.com/api/v1/json/123/track.php?m=${album.idAlbum}`
      );
      const tracks = tracksRes.data.track || [];

      tracks.forEach((track) => {
        songs.push({
          id: track.idTrack,
          title: track.strTrack,
          album: album.strAlbum,
          duration: track.intDuration,
          thumb: album.strAlbumThumb,
        });
      });
    }

    res.json({ songs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error getting songs" });
  }
});

// Endpoint para detalles de una canción/track
app.get('/api/song/:id', async (req, res) => {
  const trackId = (req.params.id || '').trim();
  if (!trackId) return res.status(400).json({ error: 'Track id required' });
  try {
    // obtener detalles del track
    const trackRes = await axios.get(
      `https://theaudiodb.com/api/v1/json/123/track.php?h=${encodeURIComponent(trackId)}`
    );
    const track = trackRes.data.track?.[0];
    if (!track) return res.status(404).json({ error: 'Track not found' });

    // obtener información del álbum si existe
    let album = null;
    if (track.idAlbum) {
      const albumRes = await axios.get(
        `https://theaudiodb.com/api/v1/json/123/album.php?m=${encodeURIComponent(track.idAlbum)}`
      );
      album = albumRes.data.album?.[0] || null;
    }

    // obtener información del artista
    let artist = null;
    if (track.idArtist) {
      const artistRes = await axios.get(
        `https://theaudiodb.com/api/v1/json/123/artist.php?i=${encodeURIComponent(track.idArtist)}`
      );
      artist = artistRes.data.artists?.[0] || null;
    }

    res.json({ track, album, artist });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error fetching track details' });
  }
});

app.listen(4000, () => console.log("Server running on http://localhost:4000"));
