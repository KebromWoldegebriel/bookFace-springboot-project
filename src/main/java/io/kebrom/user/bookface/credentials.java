package io.kebrom.user.bookface;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class credentials {
	
	@Id
	private String userName;
	private String passWord;
	
	
	
	public credentials() {
		super();
	}

	public credentials(String userName, String passWord) {
		super();
		this.userName = userName;
		this.passWord = passWord;
	}
	
	public String getUserName() {
		return userName;
	}
	
	public void setUserName(String userName) {
		this.userName = userName;
	}
	
	public String getPassWord() {
		return passWord;
	}
	

	public void setPassWord(String passWord) {
		this.passWord = passWord;
	} 

}
