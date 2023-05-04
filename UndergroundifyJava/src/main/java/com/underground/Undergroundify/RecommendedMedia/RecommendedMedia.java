package com.underground.Undergroundify.RecommendedMedia;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.underground.Undergroundify.Likes.Like;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="tbm_recommended_media")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class RecommendedMedia {
    @Id
    @GeneratedValue
    private long id;
    private String spotifyId;
    private String mediaType;
    private long recommendedBy;
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="dd-MM-yyyy")
    private Date recommendedDate;

    public RecommendedMedia(String spotifyId, String mediaType, long recommendedBy, Date recommendedDate) {
        this.spotifyId = spotifyId;
        this.mediaType = mediaType;
        this.recommendedBy = recommendedBy;
        this.recommendedDate = recommendedDate;
    }

    public long getId() {
        return id;
    }

    public String getSpotifyId() {
        return spotifyId;
    }

    public void setSpotifyId(String spotifyId) {
        this.spotifyId = spotifyId;
    }

    public String getMediaType() {
        return mediaType;
    }

    public void setMediaType(String mediaType) {
        this.mediaType = mediaType;
    }

    public long getRecommendedBy() {
        return recommendedBy;
    }

    public void setRecommendedBy(long recommendedBy) {
        this.recommendedBy = recommendedBy;
    }

    public Date getRecommendedDate() {
        return recommendedDate;
    }

    public void setRecommendedDate(Date recommendedDate) {
        this.recommendedDate = recommendedDate;
    }
}
