package com.underground.Undergroundify.RecommendedMedia;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface RecommendedMediaRepository
        extends JpaRepository<RecommendedMedia,Long> {

    @Query("SELECT rm FROM RecommendedMedia rm WHERE rm.mediaType='track'")
    List<RecommendedMedia> getRecommendedTracks();

    @Query("SELECT rm FROM RecommendedMedia rm WHERE rm.mediaType='album'")
    List<RecommendedMedia> getRecommendedAlbums();

    @Query("SELECT rm FROM RecommendedMedia rm WHERE rm.mediaType='artist'")
    List<RecommendedMedia> getRecommendedArtists();

    @Query("SELECT rm FROM RecommendedMedia rm WHERE rm.spotifyId in (:spotifyIds)")
    List<RecommendedMedia> getRecommendedBySpotifyId(@Param("spotifyIds")List<String> spotifyIds);

    @Query("SELECT rm FROM RecommendedMedia rm WHERE rm.mediaType='track' and rm.recommendedBy=:recommendedBy")
    List<RecommendedMedia> getRecommendedUserTracks(@Param("recommendedBy")long recommendedBy);

    @Query("SELECT rm FROM RecommendedMedia rm WHERE rm.mediaType='album' and rm.recommendedBy=:recommendedBy")
    List<RecommendedMedia> getRecommendedUserAlbums(@Param("recommendedBy")long recommendedBy);

    @Query("SELECT rm FROM RecommendedMedia rm WHERE rm.mediaType='artist' and rm.recommendedBy=:recommendedBy")
    List<RecommendedMedia> getRecommendedUserArtists(@Param("recommendedBy")long recommendedBy);
}
