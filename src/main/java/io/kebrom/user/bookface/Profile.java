package io.kebrom.user.bookface;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Profile {
	
	@Id
	private String userName;
	private String age;
	private String location;
	private String date;
	private String aboutMe;
	
	public Profile() {
		super();
	}
	
	public Profile(String userName, String age, String location, String date, String aboutMe) {
		super();
		this.userName = userName;
		this.age = age;
		this.location = location;
		this.date = date;
		this.aboutMe = aboutMe;
	}

	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getAboutMe() {
		return aboutMe;
	}
	public void setAboutMe(String aboutMe) {
		this.aboutMe = aboutMe;
	}
	
	
	
}
