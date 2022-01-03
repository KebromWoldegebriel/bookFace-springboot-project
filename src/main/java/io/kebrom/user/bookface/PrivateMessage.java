package io.kebrom.user.bookface;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class PrivateMessage {
	
	@Id
	private String messageId;
	private String to;
	private String from;
	private String message;
	private String date;
	
	
	public PrivateMessage() {
		super();
	}


	public PrivateMessage(String messageId, String to, String from, String message, String date) {
		super();
		this.messageId = messageId;
		this.to = to;
		this.from = from;
		this.message = message;
		this.date = date;
	}


	public String getMessageId() {
		return messageId;
	}


	public void setMessageId(String messageId) {
		this.messageId = messageId;
	}


	public String getTo() {
		return to;
	}


	public void setTo(String to) {
		this.to = to;
	}


	public String getFrom() {
		return from;
	}


	public void setFrom(String from) {
		this.from = from;
	}


	public String getMessage() {
		return message;
	}


	public void setMessage(String message) {
		this.message = message;
	}


	public String getDate() {
		return date;
	}


	public void setDate(String date) {
		this.date = date;
	}
	
	
	
	
}
