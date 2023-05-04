package com.underground.Undergroundify.SpotifyAPI.ResponseObjects.Artists;

import com.underground.Undergroundify.SpotifyAPI.ResponseObjects.SpotifyImage;

import java.util.List;

public class ArtistItem {
    public String id;
    public String name;
    public int popularity;
    public List<SpotifyImage> images;
}
