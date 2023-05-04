package com.underground.Undergroundify.RecommendedMedia;

import com.underground.Undergroundify.Likes.Like;
import com.underground.Undergroundify.Likes.LikesRepository;
import com.underground.Undergroundify.SpotifyAPI.ResponseDtos.AlbumDto;
import com.underground.Undergroundify.SpotifyAPI.ResponseDtos.ArtistDto;
import com.underground.Undergroundify.SpotifyAPI.ResponseDtos.TrackDto;
import com.underground.Undergroundify.SpotifyAPI.SpotifyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.sound.midi.Track;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class RecommendedMediaService {
    @Autowired
    private RecommendedMediaRepository recommendedMediaRepository;
    @Autowired
    private LikesRepository likesRepository;
    @Autowired
    private SpotifyService spotifyService;

    public RecommendedMedia postRecommendMedia(RecommendedMedia recommendedMedia){
        var res = recommendedMediaRepository.save(recommendedMedia);
        return res;
    }

    public List<TrackDto> getRecommendedSongs(String auth) throws Exception {
        List<RecommendedMedia> rmList = recommendedMediaRepository.getRecommendedTracks();
        var spotifyRes = convertRecommendedToTracks(rmList,auth);

        return spotifyRes;
    }

    public List<AlbumDto> getRecommendedAlbums(String auth) throws Exception {
        List<RecommendedMedia> rmList = recommendedMediaRepository.getRecommendedAlbums();
        var spotifyRes = convertRecommendedToAlbums(rmList,auth);

        return spotifyRes;
    }

    public List<ArtistDto> getRecommendedArtists(String auth) throws Exception {
        List<RecommendedMedia> rmList = recommendedMediaRepository.getRecommendedArtists();
        var spotifyRes = convertRecommendedToArtists(rmList,auth);

        return spotifyRes;
    }

    public List<TrackDto> getUserLikedTracks(String auth, long likedBy) throws Exception {
        var likeIdList = getUserMediaSpotifyLikeIds(MediaType.TRACK,likedBy);
        List<RecommendedMedia> rmList = recommendedMediaRepository.getRecommendedBySpotifyId(likeIdList);
        var spotifyRes = convertRecommendedToTracks(rmList, auth);

        return spotifyRes;
    }

    public List<AlbumDto> getUserLikedAlbums(String auth, long likedBy) throws Exception {
        var likeIdList = getUserMediaSpotifyLikeIds(MediaType.ALBUM,likedBy);
        List<RecommendedMedia> rmList = recommendedMediaRepository.getRecommendedBySpotifyId(likeIdList);
        var spotifyRes = convertRecommendedToAlbums(rmList, auth);

        return spotifyRes;
    }

    public List<ArtistDto> getUserLikedArtists(String auth, long likedBy) throws Exception {
        var likeIdList = getUserMediaSpotifyLikeIds(MediaType.ARTIST,likedBy);
        List<RecommendedMedia> rmList = recommendedMediaRepository.getRecommendedBySpotifyId(likeIdList);
        var spotifyRes = convertRecommendedToArtists(rmList, auth);

        return spotifyRes;
    }

    private List<String> getUserMediaSpotifyLikeIds(MediaType mediaType, long likedBy){
        List<Like> likeList = new ArrayList<>();
        if(mediaType==MediaType.TRACK){
            likeList = likesRepository.getTrackLikesByUser(likedBy);
        }
        if(mediaType==MediaType.ALBUM){
            likeList = likesRepository.getAlbumsLikesByUser(likedBy);
        }
        if(mediaType==MediaType.ARTIST){
            likeList = likesRepository.getArtistsLikesByUser(likedBy);
        }
        List<String> likeIdList = likeList.stream().map(Like::getSpotifyId).collect(Collectors.toList());
        return likeIdList;
    }

    private List<TrackDto> convertRecommendedToTracks(List<RecommendedMedia> rmList, String auth) throws Exception{
        var mediaBySpotifyId = getRmHashMap(rmList);

        List<String> trackIdList = rmList.stream().map(RecommendedMedia::getSpotifyId).collect(Collectors.toList());
        var spotifyRes = spotifyService.getSongList(auth,trackIdList);
        for(TrackDto track: spotifyRes) track.recommendedMedia = mediaBySpotifyId.get(track.trackId);

        var likes = likesRepository.getLikesBySpotifyId(trackIdList);
        var likeMap = getLikesMap(likes);
        for(TrackDto track: spotifyRes) track.likes = likeMap.getOrDefault(track.trackId,new ArrayList<Like>());

        return spotifyRes;
    }

    private List<AlbumDto> convertRecommendedToAlbums(List<RecommendedMedia> rmList, String auth) throws Exception{
        var mediaBySpotifyId = getRmHashMap(rmList);

        List<String> idList = rmList.stream().map(RecommendedMedia::getSpotifyId).collect(Collectors.toList());
        var spotifyRes = spotifyService.getAlbumList(auth,idList);
        for(AlbumDto album: spotifyRes) album.recommendedMedia = mediaBySpotifyId.get(album.albumId);

        var likes = likesRepository.getLikesBySpotifyId(idList);
        var likeMap = getLikesMap(likes);
        for(AlbumDto album: spotifyRes) album.likes = likeMap.getOrDefault(album.albumId,new ArrayList<Like>());

        return spotifyRes;
    }

    private List<ArtistDto> convertRecommendedToArtists(List<RecommendedMedia> rmList, String auth) throws Exception{
        var mediaBySpotifyId = getRmHashMap(rmList);

        List<String> idList = rmList.stream().map(RecommendedMedia::getSpotifyId).collect(Collectors.toList());
        var spotifyRes = spotifyService.getArtistList(auth,idList);
        for(ArtistDto dto: spotifyRes) dto.recommendedMedia = mediaBySpotifyId.get(dto.artistId);

        var likes = likesRepository.getLikesBySpotifyId(idList);
        var likeMap = getLikesMap(likes);
        for(ArtistDto dto: spotifyRes) dto.likes = likeMap.getOrDefault(dto.artistId,new ArrayList<Like>());

        return spotifyRes;
    }

    private HashMap<String, RecommendedMedia> getRmHashMap(List<RecommendedMedia> rmList){
        HashMap<String,RecommendedMedia> mediaBySpotifyId = new HashMap<>();
        for (RecommendedMedia rm: rmList)mediaBySpotifyId.put(rm.getSpotifyId(),rm);
        return mediaBySpotifyId;
    }

    public List<TrackDto> getRecommendedTracksByUser(String auth, long recommendedBy) throws Exception {
        List<RecommendedMedia> rmList = recommendedMediaRepository.getRecommendedUserTracks(recommendedBy);
        if (rmList.size()==0) return new ArrayList<TrackDto>();
        HashMap<String,RecommendedMedia> mediaBySpotifyId = new HashMap<>();
        for (RecommendedMedia rm: rmList)mediaBySpotifyId.put(rm.getSpotifyId(),rm);

        List<String> trackIdList = rmList.stream().map(RecommendedMedia::getSpotifyId).collect(Collectors.toList());
        var spotifyRes = spotifyService.getSongList(auth,trackIdList);
        for(TrackDto track: spotifyRes) track.recommendedMedia = mediaBySpotifyId.get(track.trackId);

        return spotifyRes;
    }

    public HashMap<String,List<Like>> getLikesMap(List<Like> likes){
        HashMap<String,List<Like>> map = new HashMap<>();
        for(Like like : likes){
            var list = map.getOrDefault(like.getSpotifyId(),new ArrayList<Like>());
            list.add(like);
            map.put(like.getSpotifyId(),list);
        }
        return map;
    }

    public List<AlbumDto> getRecommendedAlbumsByUser(String auth, long recommendedBy) throws Exception {
        List<RecommendedMedia> rmList = recommendedMediaRepository.getRecommendedUserAlbums(recommendedBy);
        if (rmList.size()==0) return new ArrayList<AlbumDto>();
        HashMap<String,RecommendedMedia> mediaBySpotifyId = new HashMap<>();
        for (RecommendedMedia rm: rmList)mediaBySpotifyId.put(rm.getSpotifyId(),rm);

        List<String> albumIdList = rmList.stream().map(RecommendedMedia::getSpotifyId).collect(Collectors.toList());
        var spotifyRes = spotifyService.getAlbumList(auth,albumIdList);
        for(AlbumDto album: spotifyRes) album.recommendedMedia = mediaBySpotifyId.get(album.albumId);

        return spotifyRes;
    }

    public List<ArtistDto> getRecommendedArtistsByUser(String auth, long recommendedBy) throws Exception {
        List<RecommendedMedia> rmList = recommendedMediaRepository.getRecommendedUserArtists(recommendedBy);
        if (rmList.size()==0) return new ArrayList<ArtistDto>();
        HashMap<String,RecommendedMedia> mediaBySpotifyId = new HashMap<>();
        for (RecommendedMedia rm: rmList)mediaBySpotifyId.put(rm.getSpotifyId(),rm);

        List<String> artistIdList = rmList.stream().map(RecommendedMedia::getSpotifyId).collect(Collectors.toList());
        var spotifyRes = spotifyService.getArtistList(auth,artistIdList);
        for(ArtistDto artist: spotifyRes) artist.recommendedMedia = mediaBySpotifyId.get(artist.artistId);

        return spotifyRes;
    }

    public void deleteRecommendedMedia(long id){
       recommendedMediaRepository.deleteById(id);
    }
}
