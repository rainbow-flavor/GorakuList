package com.rainbowflavor.gorakulist.common;

public class Response <T>{
    private String code;
    private T data;

    public Response(T data) {
        this.data = data;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public static <T>Response<T> success(T data){
        Response<T> res = new Response<>(data);
        res.setCode("N-9200");
        return res;
    }
}
