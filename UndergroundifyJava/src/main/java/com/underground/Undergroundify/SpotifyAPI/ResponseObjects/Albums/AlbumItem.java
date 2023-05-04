package com.underground.Undergroundify.SpotifyAPI.ResponseObjects.Albums;

import com.underground.Undergroundify.SpotifyAPI.ResponseObjects.Artists.ArtistItem;
import com.underground.Undergroundify.SpotifyAPI.ResponseObjects.SpotifyImage;

import java.util.List;

public class AlbumItem {
    public String id;
    public String name;
    public String release_date;
    public List<SpotifyImage> images;
    public String album_type;
    public List<ArtistItem> artists;
}


