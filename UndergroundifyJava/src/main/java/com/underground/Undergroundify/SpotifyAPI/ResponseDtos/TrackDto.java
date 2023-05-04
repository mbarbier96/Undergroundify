package com.underground.Undergroundify.SpotifyAPI.ResponseDtos;

import com.underground.Undergroundify.Likes.Like;
import com.underground.Undergroundify.RecommendedMedia.RecommendedMedia;

import java.util.Date;
import java.util.List;

public class TrackDto {
    public String trackId;
    public String trackName;
    public int popularity;
    public String previewUrl;
    public String albumId;
    public String albumName;
    public AlbumDto album;
    public List<ArtistDto> artists;
    public RecommendedMedia recommendedMedia;
    public List<Like> likes;
}
