package com.rainbowflavor.gorakulist.store;
import com.rainbowflavor.gorakulist.store.dto.MachineDto;
import com.rainbowflavor.gorakulist.store.dto.StoreDto;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.util.Comparator;
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
        model.addAttribute("byName", Comparator.comparing(MachineDto::getShortName));
    }

    @GetMapping
    public String search(@ModelAttribute("searchRequest")SearchRequest searchRequest, BindingResult bindingResult, Model model) {
        List<StoreDto> storeDtos = storeService.searchStore(
            searchRequest.getCity1(), 
            searchRequest.getCity2(), 
            searchRequest.getGameCheckbox(), 
            searchRequest.getCondition());
        model.addAttribute("storeDtos", storeDtos);
        return "content/store/store";
    }

    @GetMapping("/random")
    public String storeRandom(Model model) {
        StoreDto storeDto = storeService.getStoreRandom();
        model.addAttribute("storeDto", storeDto);
        return "content/store/store-detail";
    }

    @GetMapping("/detail")
    public String storeDetailView(@RequestParam Long storeId, Model model) {
        StoreDto storeDto = storeService.getStoreDetail(storeId);
        model.addAttribute("storeDto", storeDto);
        return "content/store/store-detail";
    }

    @Data
    private static class SearchRequest{
        @NotEmpty
        private String city1;
        private String city2;
        @NotEmpty
        private String condition="or";
        @Size(max = 5)
        private Set<Long> gameCheckbox = new HashSet<>();
    }
}
