package io.kebrom.user.bookface;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class ProfilePicture {
	@Id
	private String userName;
	private String photoPath;
	
	public ProfilePicture() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ProfilePicture(String userName, String photoPath) {
		this.userName = userName;
		this.photoPath = photoPath;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getPhotoPath() {
		return photoPath;
	}
	public void setPhotoPath(String photoPath) {
		this.photoPath = photoPath;
	}
	
	

}
