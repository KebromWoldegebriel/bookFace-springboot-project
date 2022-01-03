package io.kebrom.user.bookface;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class PublicPost {
		
	
		@Id
		private String postID; 
		private String userName;
		private String publicPost; 
		private String date;
		
		
		
		public PublicPost() {
			super();
		}

		public PublicPost(String postID, String userName, String publicPost, String date, String userPhoto) {
			super();
			this.postID = postID;
			this.userName = userName;
			this.publicPost = publicPost;
			this.date = date;
		}

		public String getPostID() {
			return postID;
		}

		public void setPostID(String postID) {
			this.postID = postID;
		}

		public String getUserName() {
			return userName;
		}

		public void setUserName(String userName) {
			this.userName = userName;
		}

		public String getPublicPost() {
			return publicPost;
		}

		public void setPublicPost(String publicPost) {
			this.publicPost = publicPost;
		}

		public String getDate() {
			return date;
		}

		public void setDate(String date) {
			this.date = date;
		}

	
		
		
		




		
}
