import { useEffect, useState } from 'react';
import { Link , useParams} from 'react-router-dom';
import axios from 'axios';
import { BackLink, SongDetailContainer ,SongDetailDescription, SongDetailCard} from './styles';
import { Loader } from '../Loader';


const SongDetail = () => {
  const {id} = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  
  useEffect(() => {
  const fetchSongsDetails = async () => {
    if (!id) {
      setError("Id no encontrado");
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(
        `http://localhost:4000/api/song/${encodeURIComponent(id)}`
      );

      if (response.data.error) {
        throw new Error(response.data.error);
      }

      setData(response.data);

    } catch (err) {
      const msg = err?.message || "Error desconocido en petición";
      setError(msg);

    } finally {
      setLoading(false);
    }
  };

  fetchSongsDetails();
}, [id]);


  if (loading) return <SongDetailContainer><Loader/></SongDetailContainer>;
  if (error) return (
    <SongDetailContainer>
      <p>Error: {error.message || 'Ocurrió un error'}</p>
      <Link to="/">Volver</Link>
    </SongDetailContainer>
  );

  const { track, album, artist } = data || {};
  const bgImage = album?.strAlbumThumb || "";
  return (

    <SongDetailContainer>
      
      <SongDetailCard
      style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,1)),
      url(${bgImage})`}}>
        <BackLink to="/">← Volver</BackLink>
          <SongDetailDescription >
            <h2>{track?.strTrack || track?.title || 'Título desconocido'}</h2>
            <p><strong>Artista:</strong> {artist?.strArtist || track?.strArtist || 'Desconocido'}</p>
            <p><strong>Álbum:</strong> {album?.strAlbum || track?.strAlbum || 'Desconocido'}</p>
            {album?.intYearReleased && <p><strong>Año:</strong> {album.intYearReleased}</p>}
            {artist?.strBiographyEN && (
              <div>
                <h3>Descripción</h3>
                <p>{artist.strBiographyEN}</p>
              </div>)}
          </SongDetailDescription>
      </SongDetailCard>
    </SongDetailContainer>
  );
};

export default SongDetail;
