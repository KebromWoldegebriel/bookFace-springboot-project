package io.kebrom.templates.bookface;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class BookFaceTemplatesController  {
	
	@GetMapping("/index.html")
	public String index()
	{
		return "index";
	}	
	
	
	@GetMapping("/profile.html")
	public String profile()
	{
		return "profile";
	}	
	
	@GetMapping("/signUp.html")
	public String signUp()
	{
		return "signUp";
	}
	
	@GetMapping("/editProfile.html")
	public String editProfile()
	{
		return "editProfile";
	}
	
	
	@GetMapping("/members.html")
	public String members()
	{
		return "members";
	}	
	
	@GetMapping("/memberProfile.html")
	public String indvidualMembers()
	{
		return "memberProfile";
	}	
	
	@GetMapping("/sendPrivateMessage.html")
	public String SendPrivateMessage()
	{
		return "sendPrivateMessage";
	}
	
	@GetMapping("/viewPrivateMessage.html")
	public String viewPrivateMessage()
	{
		return "viewPrivateMessage";
	}	
	
	@GetMapping("/publicPost.html")
	public String publicPost()
	{
		return "publicPost";
	}	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
