package com.underground.Undergroundify.Songs;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.net.http.HttpClient;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(path = "/api/songs/")
public class TracksController {
    @Autowired
    TracksService tracksService;

}
