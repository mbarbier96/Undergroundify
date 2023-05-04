package com.underground.Undergroundify.APIHelper;

public class APIParams {
    private String key;
    private String value;


    public APIParams(String key, String value) {
        this.key = key;
        this.value = value;
    }

    public String getKey() {
        return key;
    }

    public String getValue() {
        return value;
    }
}
