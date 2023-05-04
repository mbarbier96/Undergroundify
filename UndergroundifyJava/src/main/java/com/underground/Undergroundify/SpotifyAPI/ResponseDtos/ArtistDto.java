package com.underground.Undergroundify.SpotifyAPI.ResponseDtos;

import com.underground.Undergroundify.Likes.Like;
import com.underground.Undergroundify.RecommendedMedia.RecommendedMedia;
import com.underground.Undergroundify.SpotifyAPI.ResponseObjects.SpotifyImage;

import java.util.List;

public class ArtistDto {
    public String artistId;
    public String artistName;
    public int popularity;
    public List<SpotifyImage> images;
    public RecommendedMedia recommendedMedia;
    public List<Like> likes;
}
