import { useEffect, useState } from 'react';
import { Link , useLocation} from 'react-router-dom';
import './index.css'
import axios from 'axios';

const SongDetail = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
const {state} = useLocation();
const songId = state?.id;
  useEffect(() => {
    if (!songId) return;
    setLoading(true);
    setError(null);
    axios.get(`/api/song/${encodeURIComponent(songId)}`)
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [songId]);

  if (loading) return <div className="song-detail"><p>Cargando detalles...</p></div>;
  if (error) return (
    <div className="song-detail">
      <p>Error: {error.message || 'Ocurrió un error'}</p>
      <Link to="/">Volver</Link>
    </div>
  );

  const { track, album, artist } = data || {};
  const bgImage = album?.strAlbumThumb || "";
console.log(track, album, artist);
  return (

    <section 
    className="song-detail"x
    >
      
      <div className="song-detail-card"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,1)),
            url(${bgImage})
          `
        }}>
          <Link to="/" className="back-link">← Volver</Link>
      <div className='song-detail-description'>
         <h2>{track?.strTrack || track?.title || 'Título desconocido'}</h2>
        <p><strong>Artista:</strong> {artist?.strArtist || track?.strArtist || 'Desconocido'}</p>
        <p><strong>Álbum:</strong> {album?.strAlbum || track?.strAlbum || 'Desconocido'}</p>
        {album?.intYearReleased && <p><strong>Año:</strong> {album.intYearReleased}</p>}
        {artist?.strBiographyEN && (
          <div>
            <h3>Descripción</h3>
            <p>{artist.strBiographyEN}</p>
          </div>
        )}
      </div>
       
         </div>
      
    </section>
  );
};

export default SongDetail;
