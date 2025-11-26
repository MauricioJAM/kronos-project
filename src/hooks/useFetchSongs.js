import { useState, useEffect } from "react";
import axios from 'axios';

export function useFetchSongs(query) {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const trimmed = (query || '').trim();
    if (!trimmed || trimmed.length < 2) {
      setSongs([]);
      return;
    }

    setLoading(true);
    setError(null);

    const url = `http://localhost:4000/api/songs?s=${trimmed}`;

    axios.get(url)
      .then((res) => {
        const data = res.data;
        if (data && data.songs) return setSongs(data.songs);
        const arr = data ? Object.values(data).find((v) => Array.isArray(v)) : null;
        setSongs(arr || []);
      })
      .catch((err) => {
        if (axios.isCancel && axios.isCancel(err)) return;
        if (err.name === 'CanceledError' || err.name === 'AbortError') return;
        setError(err);
      })
      .finally(() => setLoading(false));

  }, [query]);



  return { songs, loading, error};
}
