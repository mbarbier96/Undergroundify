package com.underground.Undergroundify.Likes;


import com.underground.Undergroundify.RecommendedMedia.RecommendedMedia;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LikesRepository extends JpaRepository<Like,Long> {

    @Query("SELECT l FROM Like l WHERE l.spotifyId in (:spotifyIds)")
    List<Like> getLikesBySpotifyId(@Param("spotifyIds")List<String> spotifyIds);

    @Query("SELECT l FROM Like l WHERE l.mediaType='track' and l.likedBy=:likedBy")
    List<Like> getTrackLikesByUser(@Param("likedBy")long likedBy);

    @Query("SELECT l FROM Like l WHERE l.mediaType='album' and l.likedBy=:likedBy")
    List<Like> getAlbumsLikesByUser(@Param("likedBy")long likedBy);

    @Query("SELECT l FROM Like l WHERE l.mediaType='artist' and l.likedBy=:likedBy")
    List<Like> getArtistsLikesByUser(@Param("likedBy")long likedBy);
}
