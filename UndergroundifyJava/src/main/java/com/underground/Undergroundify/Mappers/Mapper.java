package com.underground.Undergroundify.Mappers;

import com.underground.Undergroundify.SpotifyAPI.ResponseDtos.AlbumDto;
import com.underground.Undergroundify.SpotifyAPI.ResponseDtos.ArtistDto;
import com.underground.Undergroundify.SpotifyAPI.ResponseDtos.TrackDto;
import com.underground.Undergroundify.SpotifyAPI.ResponseObjects.Albums.AlbumItem;
import com.underground.Undergroundify.SpotifyAPI.ResponseObjects.Artists.ArtistItem;
import com.underground.Undergroundify.SpotifyAPI.ResponseObjects.Tracks.TrackItem;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class Mapper implements IMapper {
    @Override
    public List<TrackDto> mapToDtoTracks(List<TrackItem> trackListResponse) {
        List<TrackDto> dtoList = new ArrayList<>();
        for(TrackItem trackItem: trackListResponse){
            dtoList.add(mapToDto(trackItem));
        }
        return dtoList;
    }

    @Override
    public TrackDto mapToDto(TrackItem trackItem) {
        TrackDto trackDto = new TrackDto();
        List<ArtistDto> artistDtoList = new ArrayList<>();
        trackDto.trackId = trackItem.id;
        trackDto.trackName = trackItem.name;
        trackDto.albumId = trackItem.album.id;
        trackDto.albumName = trackItem.album.name;
        trackDto.album = mapToDto(trackItem.album);
        trackDto.popularity = trackItem.popularity;
        trackDto.previewUrl = trackItem.preview_url;
        for(ArtistItem artistItem : trackItem.artists) artistDtoList.add(mapToDto(artistItem));
        trackDto.artists = artistDtoList;

        return trackDto;
    }

    @Override
    public List<ArtistDto> mapToDtoArtists(List<ArtistItem> artistListResponse) {
        List<ArtistDto> dtoList = new ArrayList<>();
        for(ArtistItem artistItem: artistListResponse){
            dtoList.add(mapToDto(artistItem));
        }
        return dtoList;
    }

    @Override
    public ArtistDto mapToDto(ArtistItem artistItem) {
        ArtistDto artistDto = new ArtistDto();
        artistDto.artistId = artistItem.id;
        artistDto.artistName = artistItem.name;
        artistDto.popularity = artistItem.popularity;
        artistDto.images = artistItem.images;
        return artistDto;
    }

    @Override
    public List<AlbumDto> mapToDtoAlbums(List<AlbumItem> albumListResponse) {
        List<AlbumDto> dtoList = new ArrayList<>();
        for(AlbumItem albumItem: albumListResponse){
            dtoList.add(mapToDto(albumItem));
        }
        return dtoList;
    }

    @Override
    public AlbumDto mapToDto(AlbumItem albumItem) {
        AlbumDto albumDto = new AlbumDto();
        List<ArtistDto> artistDtoList = new ArrayList<>();
        albumDto.albumId = albumItem.id;
        albumDto.albumName = albumItem.name;
        albumDto.albumReleaseDate = albumItem.release_date;
        albumDto.albumImages = albumItem.images;
        albumDto.albumType = albumItem.album_type;
        for(ArtistItem artistItem : albumItem.artists) artistDtoList.add(mapToDto(artistItem));
        albumDto.artists = artistDtoList;

        return albumDto;
    }

}
