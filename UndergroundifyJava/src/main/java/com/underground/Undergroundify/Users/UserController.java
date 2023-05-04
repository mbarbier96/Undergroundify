package com.underground.Undergroundify.Users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="/api/users/")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping(path = "getAllUsers/")
    public List<User> getUsers(){
        return userService.getUsers();
    }

    @PostMapping(path = "createUser/")
    public User createUser(@RequestBody User user){
        return userService.postUser(user);
    }
}
