package com.rainbowflavor.gorakulist.cs;

import com.rainbowflavor.gorakulist.cs.message.request.CsRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/api/v1/cs")
public class CsApiController {
    private final CsService csService;

    @PostMapping(consumes = { MediaType.MULTIPART_FORM_DATA_VALUE })
    public ResponseEntity<?> doCsRequest(@RequestPart CsRequest csRequest, @RequestPart MultipartFile image) {
        HttpStatus httpStatus = null;
        try {
            httpStatus = image != null ?
                    csService.sendCsRequest(csRequest, image.getBytes()) :
                    csService.sendCsRequest(csRequest, null);
        } catch (IOException e) {
            log.error("image get error");
            return ResponseEntity.badRequest().body("fail get image");
        }
        return ResponseEntity.status(httpStatus).build();
    }
}
