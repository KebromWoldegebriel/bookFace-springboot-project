package io.kebrom.user.bookface;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.multipart.MultipartFile;


@Service
public class RestApiService {
	
	@Autowired
	private RestApiReository restRepo;
	
	@Autowired
	private profileapiRepository profileRepo;
	
	@Autowired
	private profileApiPictureRepository profilePictureRepo;
	
	@Autowired
	private PrivateMessageRepository privateMessageRepo;
	

	@Autowired
	private publicPostRepository publicPostRepo;
	
	
	
	
	

	
	public credentials getUser(String userName) {
		System.out.println( restRepo.findById(userName).orElse(null));
		return  restRepo.findById(userName).orElse(null);
		
	}


	

	public String addCredentials(credentials cred) {
		credentials temp =  restRepo.findById(cred.getUserName()).orElse(null);
		if(temp==null) {
			System.out.println("I am here");
			 restRepo.save(cred);
			return "OK";
			
		} else {
			System.out.println("Account Already exits");
			return "Not Ok";
		}
	}
	
	
	
	public String editProfile(Profile profile) {
		profileRepo.save(profile);
		return "Ok";
	}
	




	public void upLoadFile(MultipartFile file, @PathVariable String userName) throws IllegalStateException, IOException {
		file.transferTo(new File("/Users/kebromwoldegebriel/Documents/workspace-spring-tool-suite-4-4.12.1.RELEASE/bookFace-project/src/main/resources/static/Images/"+file.getOriginalFilename()));
		profilePictureRepo.save(new  ProfilePicture(userName, file.getOriginalFilename()));
			
	}




	public String[] getprofile(String userName) {
		// TODO Auto-generated method stub
		Profile        profile = profileRepo.findById(userName).orElse(null);
		ProfilePicture pic     =  profilePictureRepo.findById(userName).orElse(null); 
		
		if(profile!=null&&pic!=null) {	
			return new String[]{profile.getLocation(), profile.getDate(),profile.getAge(),profile.getAboutMe(),pic.getPhotoPath()};
		}
		else if(profile!=null) {
			return new String[]{profile.getLocation(),profile.getDate(),profile.getAge(),profile.getAboutMe()};
		}
		else if(pic!=null) {
			return new String[]{pic.getPhotoPath()};
		}
			return null;
		
		
	}

	public List<Profile> getMembers() {
		List<Profile> members = new ArrayList<>();
		profileRepo.findAll()
		.forEach(members::add);
		return members;
	}
	
	public List<ProfilePicture> getMembersPicture() {
		List<ProfilePicture> membersPic = new ArrayList<>();
		 profilePictureRepo.findAll()
		.forEach(membersPic::add);
		return membersPic;
	}




	public String addMessage(PrivateMessage message) {
		privateMessageRepo.save(message);
		return "Ok";
	}




	public List<PrivateMessage> getPrivateMessages(String to) {
		return privateMessageRepo.findAllByToIgnoreCase(to);
	}




	public String deletePrivateMessage(String messageID) {
		privateMessageRepo.deleteById(messageID);
		return "Ok";
	}


	public String addPublicPost(PublicPost publicPost) {
		publicPostRepo.save(publicPost);
		return "Ok";
	}




	public List<PublicPost> getPosts() {
		List<PublicPost> publicPosts = new ArrayList<>();
		publicPostRepo.findAll()
		.forEach(publicPosts::add);
		return publicPosts;
	}




	
}
