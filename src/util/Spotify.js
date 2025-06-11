import SpotifyWebApi from 'spotify-web-api-node';

const spotifyApi = new SpotifyWebApi({
  clientId: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
  clientSecret: import.meta.env.VITE_SPOTIFY_CLIENT_SECRET,
  redirectUri: import.meta.env.VITE_SPOTIFY_REDIRECT_URI
});

export const getAuthUrl = () => {
  const scopes = [
    'user-read-private',
    'user-read-email',
    'playlist-modify-public',
    'playlist-modify-private'
  ];

  return spotifyApi.createAuthorizeURL(scopes);
};

export const getAccessToken = async (code) => {
  try {
    const data = await spotifyApi.authorizationCodeGrant(code);
    spotifyApi.setAccessToken(data.body.access_token);
    spotifyApi.setRefreshToken(data.body.refresh_token);
    return data.body.access_token;
  } catch (error) {
    console.error('Error getting access token:', error);
    throw error;
  }
};

export const searchTracks = async (term) => {
  try {
    const response = await spotifyApi.searchTracks(term);
    return response.body.tracks.items;
  } catch (error) {
    console.error('Error searching tracks:', error);
    throw error;
  }
};

export const createPlaylist = async (userId, name) => {
  try {
    const playlist = await spotifyApi.createPlaylist(name, {
      description: 'Created with Jamming App',
      public: false
    });
    return playlist.body;
  } catch (error) {
    console.error('Error creating playlist:', error);
    throw error;
  }
};

export const addTracksToPlaylist = async (playlistId, trackUris) => {
  try {
    await spotifyApi.addTracksToPlaylist(playlistId, trackUris);
  } catch (error) {
    console.error('Error adding tracks to playlist:', error);
    throw error;
  }
};

export default spotifyApi;
