package com.underground.Undergroundify.SpotifyAPI;

import com.google.gson.*;
import com.underground.Undergroundify.APIHelper.APIHelper;
import com.underground.Undergroundify.Mappers.Mapper;
import com.underground.Undergroundify.SpotifyAPI.ResponseDtos.AlbumDto;
import com.underground.Undergroundify.SpotifyAPI.ResponseDtos.ArtistDto;
import com.underground.Undergroundify.SpotifyAPI.ResponseDtos.TrackDto;
import com.underground.Undergroundify.SpotifyAPI.ResponseObjects.Albums.AlbumItem;
import com.underground.Undergroundify.SpotifyAPI.ResponseObjects.Artists.ArtistItem;
import com.underground.Undergroundify.SpotifyAPI.ResponseObjects.Tracks.TrackItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
public class SpotifyService {
    private static String URI = "https://api.spotify.com/v1/";

    @Autowired
    private Gson gson;
    @Autowired
    private APIHelper apiHelper;
    @Autowired
    private URLHelper urlHelper;
    @Autowired
    private Mapper mapper;

    public List<TrackDto> searchSong(String auth, String song, String artist) throws Exception {
        //API Call
        var res = apiHelper.getApiCall(urlHelper.getSearchSongUrl(URI,song,artist),auth);

        //JSON from response conversion to local response class
        JsonObject responseJson = gson.fromJson(res.body(),JsonObject.class);
        JsonArray trackListJson = responseJson.getAsJsonObject("tracks").getAsJsonArray("items");
        List<TrackItem> trackItemList = Arrays.asList(gson.fromJson(trackListJson, TrackItem[].class));

        //return mapped response to DTO class
        return mapper.mapToDtoTracks(trackItemList);
    }

    public List<TrackDto> getSongList(String auth, List<String> songIds) throws Exception{
        //API call
        var res = apiHelper.getApiCall(urlHelper.getSongs(URI,songIds),auth);

        //JSON from response conversion to local response class
        JsonObject responseJson = gson.fromJson(res.body(),JsonObject.class);
        JsonArray trackListJson = responseJson.getAsJsonArray("tracks");
        List<TrackItem> trackItemList = Arrays.asList(gson.fromJson(trackListJson, TrackItem[].class));

        //return mapped response to DTO class
        return mapper.mapToDtoTracks(trackItemList);
    }

    public List<ArtistDto> searchArtist(String auth, String artist) throws Exception{
        //API Call
        var res = apiHelper.getApiCall(urlHelper.getSearchArtistUrl(URI,artist),auth);

        JsonObject responseJson = gson.fromJson(res.body(),JsonObject.class);
        JsonArray artistListJson = responseJson.getAsJsonObject("artists").getAsJsonArray("items");
        List<ArtistItem> artistItemList = Arrays.asList(gson.fromJson(artistListJson, ArtistItem[].class));

        //return mapped response to DTO class
        return mapper.mapToDtoArtists(artistItemList);
    }

    public List<AlbumDto> searchAlbum(String auth, String album, String artist) throws Exception {
        //API Call
        var res = apiHelper.getApiCall(urlHelper.getSearchAlbumUrl(URI,album,artist),auth);

        //JSON from response conversion to local response class
        JsonObject responseJson = gson.fromJson(res.body(),JsonObject.class);
        JsonArray albumListJson = responseJson.getAsJsonObject("albums").getAsJsonArray("items");
        List<AlbumItem> albumItemList = Arrays.asList(gson.fromJson(albumListJson, AlbumItem[].class));

        //return mapped response to DTO class
        return mapper.mapToDtoAlbums(albumItemList);
    }

    public List<AlbumDto> getAlbumList(String auth, List<String> albumIds) throws Exception{
        //API call
        var res = apiHelper.getApiCall(urlHelper.getAlbums(URI,albumIds),auth);

        //JSON from response conversion to local response class
        JsonObject responseJson = gson.fromJson(res.body(),JsonObject.class);
        JsonArray albumListJson = responseJson.getAsJsonArray("albums");
        List<AlbumItem> albumItemList = Arrays.asList(gson.fromJson(albumListJson, AlbumItem[].class));

        //return mapped response to DTO class
        return mapper.mapToDtoAlbums(albumItemList);
    }

    public List<ArtistDto> getArtistList(String auth, List<String> artistIds) throws Exception{
        //API call
        var res = apiHelper.getApiCall(urlHelper.getArtists(URI,artistIds),auth);

        //JSON from response conversion to local response class
        JsonObject responseJson = gson.fromJson(res.body(),JsonObject.class);
        JsonArray artistListJson = responseJson.getAsJsonArray("artists");
        List<ArtistItem> artistItemList = Arrays.asList(gson.fromJson(artistListJson, ArtistItem[].class));

        //return mapped response to DTO class
        return mapper.mapToDtoArtists(artistItemList);
    }


}
