'use client';
import React, { useState, useEffect } from 'react';
import { fetchArtworks } from '../utils/testApi';


const ArtworkList: React.FC = () => {
  const [artworks, setArtworks] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadArtworks = async () => {
      try {
        const data = await fetchArtworks('painting');
        setArtworks(data);
      } catch (err) {
        setError('Failed to load artworks.');
      } finally {
        setLoading(false);
      }
    };

    loadArtworks();
  }, []);

  if (loading) return <p>Loading artworks...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Artwork List</h1>
      <ul>
          <img src={artworks.meta.images._primary_thumbnail} alt="" />
      </ul>
    </div>
  );
};

export default ArtworkList;