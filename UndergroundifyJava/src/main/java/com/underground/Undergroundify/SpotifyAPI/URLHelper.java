package com.underground.Undergroundify.SpotifyAPI;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class URLHelper {
    public String getSearchSongUrl(String uri, String song, String artist){
        String newURI = uri+"search?type=track&q=track:"+replaceBlanks(song);
        if(!artist.isEmpty()) newURI = newURI+"&artist:"+replaceBlanks(artist);
        return newURI;
    }

    public String replaceBlanks(String s){
        return s.replaceAll("\\s+","%20");
    }

    public String getSongs(String uri, List<String> songIds){
        String newURI = uri+"tracks?ids="+ String.join(",",songIds);
        return newURI;
    }

    public String getAlbums(String uri, List<String> albumIds){
        String newURI = uri+"albums?ids="+ String.join(",",albumIds);
        return newURI;
    }

    public String getArtists(String uri, List<String> artistIds){
        String newURI = uri+"artists?ids="+ String.join(",",artistIds);
        return newURI;
    }

    public String getSearchArtistUrl(String uri,  String artist){
        String newURI = uri+"search?type=artist&q=artist:"+replaceBlanks(artist);
        return newURI;
    }

    public String getSearchAlbumUrl(String uri, String song, String artist){
        String newURI = uri+"search?type=album&q=album:"+replaceBlanks(song);
        if(!artist.isEmpty()) newURI = newURI+"&artist:"+replaceBlanks(artist);
        return newURI;
    }
}

