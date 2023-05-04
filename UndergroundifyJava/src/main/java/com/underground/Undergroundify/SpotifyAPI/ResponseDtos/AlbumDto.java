package com.underground.Undergroundify.SpotifyAPI.ResponseDtos;

import com.underground.Undergroundify.Likes.Like;
import com.underground.Undergroundify.RecommendedMedia.RecommendedMedia;
import com.underground.Undergroundify.SpotifyAPI.ResponseObjects.Artists.ArtistItem;
import com.underground.Undergroundify.SpotifyAPI.ResponseObjects.SpotifyImage;

import java.util.List;

public class AlbumDto {
    public String albumId;
    public String albumName;
    public String albumReleaseDate;
    public List<SpotifyImage> albumImages;
    public String albumType;
    public List<ArtistDto> artists;
    public RecommendedMedia recommendedMedia;
    public List<Like> likes;
}
