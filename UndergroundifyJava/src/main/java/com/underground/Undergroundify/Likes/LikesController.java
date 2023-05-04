package com.underground.Undergroundify.Likes;

import com.underground.Undergroundify.RecommendedMedia.RecommendedMedia;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "api/likes/")
public class LikesController {
    @Autowired
    private LikeService likeService;

    @PostMapping(path = "postUserLike/")
    public Like recommendMedia(@RequestBody Like like){
        return likeService.postLike(like);
    }

    @GetMapping(path = "deleteUserLike")
    public void deleteUserLike(@RequestParam long id){ likeService.deleteUserLike(id); }
}
