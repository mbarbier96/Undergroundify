package com.underground.Undergroundify.RecommendedMedia;

import com.underground.Undergroundify.SpotifyAPI.ResponseDtos.AlbumDto;
import com.underground.Undergroundify.SpotifyAPI.ResponseDtos.ArtistDto;
import com.underground.Undergroundify.SpotifyAPI.ResponseDtos.TrackDto;
import com.underground.Undergroundify.Users.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/recommendedMedia/")
public class RecommendedMediaController {
    @Autowired
    private RecommendedMediaService recommendedMediaService;

    @PostMapping(path = "recommendMedia/")
    public RecommendedMedia recommendMedia(@RequestBody RecommendedMedia recommendedMedia){
        return recommendedMediaService.postRecommendMedia(recommendedMedia);
    }

    @GetMapping(path = "recommendedSongs")
    public List<TrackDto> getRecommendedSongs(@RequestHeader(HttpHeaders.AUTHORIZATION) String auth) throws Exception {
        return recommendedMediaService.getRecommendedSongs(auth);
    }

    @GetMapping(path = "userRecommendedSongs")
    public List<TrackDto> getUserRecommendedSongs(@RequestHeader(HttpHeaders.AUTHORIZATION) String auth,@RequestParam long userId) throws Exception {
        return recommendedMediaService.getRecommendedTracksByUser(auth, userId);
    }

    @GetMapping(path = "recommendedAlbums")
    public List<AlbumDto> getRecommendedAlbums(@RequestHeader(HttpHeaders.AUTHORIZATION) String auth) throws Exception {
        return recommendedMediaService.getRecommendedAlbums(auth);
    }

    @GetMapping(path = "userRecommendedAlbums")
    public List<AlbumDto> userRecommendedAlbums(@RequestHeader(HttpHeaders.AUTHORIZATION) String auth, @RequestParam long userId) throws Exception {
        return recommendedMediaService.getRecommendedAlbumsByUser(auth, userId);
    }

    @GetMapping(path = "recommendedArtists")
    public List<ArtistDto> getRecommendedArtists(@RequestHeader(HttpHeaders.AUTHORIZATION) String auth) throws Exception {
        return recommendedMediaService.getRecommendedArtists(auth);
    }

    @GetMapping(path = "userRecommendedArtists")
    public List<ArtistDto> userRecommendedArtists(@RequestHeader(HttpHeaders.AUTHORIZATION) String auth, @RequestParam long userId) throws Exception {
        return recommendedMediaService.getRecommendedArtistsByUser(auth, userId);
    }

    @GetMapping(path = "userLikedTracks")
    public List<TrackDto> userLikedTracks(@RequestHeader(HttpHeaders.AUTHORIZATION) String auth,
                                          @RequestParam long userId) throws Exception {
        return recommendedMediaService.getUserLikedTracks(auth, userId);
    }

    @GetMapping(path = "userLikedAlbums")
    public List<AlbumDto> userLikedAlbums(@RequestHeader(HttpHeaders.AUTHORIZATION) String auth,
                                         @RequestParam long userId) throws Exception {
        return recommendedMediaService.getUserLikedAlbums(auth, userId);
    }

    @GetMapping(path = "userLikedArtists")
    public List<ArtistDto> userLikedArtists(@RequestHeader(HttpHeaders.AUTHORIZATION) String auth,
                                          @RequestParam long userId) throws Exception {
        return recommendedMediaService.getUserLikedArtists(auth, userId);
    }

    @GetMapping(path = "deleteRecommended")
    public void deleteRecommendedMedia(@RequestParam long id){
        recommendedMediaService.deleteRecommendedMedia(id);
    }

}
