package com.underground.Undergroundify.SpotifyAPI;

import com.underground.Undergroundify.SpotifyAPI.ResponseDtos.AlbumDto;
import com.underground.Undergroundify.SpotifyAPI.ResponseDtos.ArtistDto;
import com.underground.Undergroundify.SpotifyAPI.ResponseDtos.TrackDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/spotify/")
public class SpotifyController {
    @Autowired
    private SpotifyService spotifyService;

    @GetMapping(path = "searchSong")
    public List<TrackDto> searchSong(
            @RequestHeader(HttpHeaders.AUTHORIZATION) String auth,
            @RequestParam String song,
            @RequestParam(required = false) String artist) throws Exception{

        return spotifyService.searchSong(auth,song,artist);
    }

    @GetMapping(path = "searchArtist")
    public List<ArtistDto> searchArtist(
            @RequestHeader(HttpHeaders.AUTHORIZATION) String auth,
            @RequestParam String artist) throws Exception{

        return spotifyService.searchArtist(auth,artist);
    }

    @GetMapping(path = "searchAlbum")
    public List<AlbumDto> searchAlbum(
            @RequestHeader(HttpHeaders.AUTHORIZATION) String auth,
            @RequestParam String album,
            @RequestParam(required = false) String artist) throws Exception{

        return spotifyService.searchAlbum(auth,album,artist);
    }
}
