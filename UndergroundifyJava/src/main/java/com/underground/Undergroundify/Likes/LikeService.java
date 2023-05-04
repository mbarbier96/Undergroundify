package com.underground.Undergroundify.Likes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class LikeService {
    @Autowired
    private LikesRepository likesRepository;

    public Like postLike(Like like){
        return likesRepository.save(like);
    }

    public void deleteUserLike(Long id){
        likesRepository.deleteById(id);
    }
}
