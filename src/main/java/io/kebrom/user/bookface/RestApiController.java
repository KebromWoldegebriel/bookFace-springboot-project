package io.kebrom.user.bookface;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
@RestController
public class RestApiController {
	
	@Autowired
	private RestApiService RestService;
	
	//login request 
	@RequestMapping("/login/{userName}")
	public credentials getTopic(@PathVariable String userName) {
		  return  RestService.getUser(userName);
	}
	//Post request 
	@PostMapping(value="/signUp")
	public String addTopic(@RequestBody credentials cred) {
		System.out.println(cred.getUserName());
		System.out.println(cred.getPassWord());
		return  RestService.addCredentials(cred);
	}
	@PostMapping(value="/editProfile")
	public String editProfile(@RequestBody Profile profile) {
		System.out.println(profile.getUserName());
		System.out.println(profile.getAge());
		System.out.println(profile.getLocation());
		System.out.println(profile.getDate());
		System.out.println(profile.getAboutMe());

		return  RestService.editProfile(profile);
	}
	@PostMapping(value = "/upload/{userName}")
	public ResponseEntity<?> upLoad(@RequestParam("file") MultipartFile file, @PathVariable String userName) throws IllegalStateException, IOException  {
		System.out.println("IMG");
//		String fileName = file.getOriginalFilename();
		 RestService.upLoadFile(file,userName);
		return ResponseEntity.ok("ok");
	}
	
	@RequestMapping("/getProfile/{userName}")
	public String[] getProfile(@PathVariable String userName) {
		  return  RestService.getprofile(userName);
	}
	
	@RequestMapping("/getMembers")
	public List<Profile> geMembers() {
		  return  RestService.getMembers();
	}
	
	
	@RequestMapping("/getMembersPicture")
	public List<ProfilePicture> getMembersPicture() {
		  return  RestService.getMembersPicture();
	}
	
	
	@PostMapping(value="/privateMessage")
	public String addTopic(@RequestBody PrivateMessage message) {
		
		return  RestService.addMessage(message);
	}
	
	@PostMapping(value="/deletePrivateMessage/{messageID}")
	public String deletePrivateMessage(@PathVariable String messageID) {
		
		return  RestService.deletePrivateMessage(messageID);
	}
	
	
	@RequestMapping("/getPrivateMessages/{to}")
	public List<PrivateMessage> getPrivateMessages(@PathVariable String to) {
		  return  RestService.getPrivateMessages(to);
	}
	
	@PostMapping(value="/publicPost")
	public String publicPost(@RequestBody PublicPost publicPost) {
		System.out.println(publicPost.getPublicPost());
		return  RestService.addPublicPost(publicPost);
	}
	
	@RequestMapping("/getPosts")
	public List<PublicPost> getPosts() {
		  return  RestService.getPosts();
	}

	
	
	

}
