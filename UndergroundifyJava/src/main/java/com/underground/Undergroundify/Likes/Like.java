package com.underground.Undergroundify.Likes;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name="tbm_likes")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Like {
    @Id
    @GeneratedValue
    private long id;
    private String spotifyId;
    private String mediaType;
    private long likedBy;

    public Like(String spotifyId, String mediaType, long likedBy) {
        this.spotifyId = spotifyId;
        this.mediaType = mediaType;
        this.likedBy = likedBy;
    }

    public long getId() {
        return id;
    }

    public String getSpotifyId() { return spotifyId; }

    public void setSpotifyId(String spotifyId) {
        this.spotifyId = spotifyId;
    }

    public String getMediaType() {
        return mediaType;
    }

    public void setMediaType(String mediaType) {
        this.mediaType = mediaType;
    }

    public long getLikedBy() {
        return likedBy;
    }

    public void setLikedBy(long likedBy) {
        this.likedBy = likedBy;
    }
}
