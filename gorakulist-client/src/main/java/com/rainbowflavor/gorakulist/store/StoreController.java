package com.rainbowflavor.gorakulist.store;

import com.rainbowflavor.gorakulist.store.dto.MachineDto;
import com.rainbowflavor.gorakulist.store.dto.SearchStoreDto;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotEmpty;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Slf4j
@Controller
@RequiredArgsConstructor
@RequestMapping("/store")
public class StoreController {

    private final StoreService storeService;

    @ModelAttribute
    public void loadGameType(Model model){
        List<MachineDto> parents = storeService.getMachineParent();
        model.addAttribute("parentCategory", parents);
    }

    @GetMapping
    public String storeSearchView(Model model){
        SearchRequest searchRequest = new SearchRequest();
        searchRequest.setCondition("or");
        model.addAttribute(searchRequest);
        return "content/store/store";
    }

    @GetMapping("/search")
    public String storeSearch(@Validated @ModelAttribute("searchRequest") SearchRequest searchRequest, BindingResult bindingResult, Model model) {
        if(bindingResult.hasErrors()){
            log.warn("[StoreController] binding result={}",bindingResult);
            return "content/store/store";
        }
        List<SearchStoreDto> searchStoreDtos = storeService.searchStore(
                searchRequest.getCity1(),
                searchRequest.getCity2(),
                searchRequest.getGameCheckbox(),
                searchRequest.getCondition());
        model.addAttribute("searchStores", searchStoreDtos);
        return "content/store/store";
    }

    @GetMapping("/detail")
    public String storeDetailView() {
        return "content/store/store-detail";
    }

    @Data
    private static class SearchRequest{
        @NotEmpty
        private String city1;
        private String city2;
        @NotEmpty
        private String condition;
        private Set<Long> gameCheckbox = new HashSet<>();
    }
}
