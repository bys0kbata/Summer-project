package volunteering.SPP.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import volunteering.SPP.DBEntity.DBUser;
import volunteering.SPP.Services.UserService;
import volunteering.SPP.annotations.CurrentUser;

@RestController
@RequestMapping("/profile")
public class ProfileController {

    @Autowired
    private UserService userService;

    @GetMapping()
    public DBUser profile(@CurrentUser DBUser dbUser) {
        return dbUser;
    }
    @PutMapping
    public void update(@RequestBody DBUser dbUser){

        userService.update(dbUser);
    }
}

