package com.underground.Undergroundify.SpotifyAPI.ResponseObjects.Tracks;

import com.underground.Undergroundify.SpotifyAPI.ResponseObjects.Albums.AlbumItem;
import com.underground.Undergroundify.SpotifyAPI.ResponseObjects.Artists.ArtistItem;
import com.underground.Undergroundify.SpotifyAPI.ResponseObjects.SpotifyImage;

import java.util.List;

public class TrackItem {
    public String id;
    public String name;
    public int popularity;
    public String preview_url;
    public AlbumItem album;
    public List<ArtistItem> artists;
}
