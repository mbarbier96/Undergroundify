package com.underground.Undergroundify.Mappers;

import com.underground.Undergroundify.SpotifyAPI.ResponseDtos.AlbumDto;
import com.underground.Undergroundify.SpotifyAPI.ResponseDtos.ArtistDto;
import com.underground.Undergroundify.SpotifyAPI.ResponseDtos.TrackDto;
import com.underground.Undergroundify.SpotifyAPI.ResponseObjects.Albums.AlbumItem;
import com.underground.Undergroundify.SpotifyAPI.ResponseObjects.Artists.ArtistItem;
import com.underground.Undergroundify.SpotifyAPI.ResponseObjects.Tracks.TrackItem;

import java.util.List;

public interface IMapper {
    public List<TrackDto> mapToDtoTracks(List<TrackItem> trackItemList);
    public TrackDto mapToDto(TrackItem trackItem);
    public List<ArtistDto> mapToDtoArtists(List<ArtistItem> artistItemList);
    public ArtistDto mapToDto(ArtistItem artistItem);
    public List<AlbumDto> mapToDtoAlbums(List<AlbumItem> albumListResponse);
    public AlbumDto mapToDto(AlbumItem albumItem);
}
