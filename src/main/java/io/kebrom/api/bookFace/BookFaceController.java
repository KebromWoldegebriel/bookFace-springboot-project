package io.kebrom.api.bookFace;



import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class BookFaceController {
	
	@RequestMapping("/login")
	public String hello() {
		return "hello world";
	}

}
