package com.underground.Undergroundify.APIHelper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.google.gson.Gson;

import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.net.URI;

@Service
public class APIHelper {
    @Autowired
    private HttpClient httpClient;
    @Autowired
    private Gson gson;

    public HttpResponse<String> getApiCall(String URI, String authToken) throws Exception{
        var httpRequest = HttpRequest.newBuilder()
                .uri(new URI(URI))
                .header("Authorization",authToken)
                .GET()
                .build();

        return httpClient.send(httpRequest, HttpResponse.BodyHandlers.ofString());
    }

}
