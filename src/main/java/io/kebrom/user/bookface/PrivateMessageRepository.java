package io.kebrom.user.bookface;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


public interface PrivateMessageRepository extends CrudRepository<PrivateMessage, String> {
	
	//With this one line of code I created a were (select * from PrivateMessage where to=[anything]
	//Amazing 
	List<PrivateMessage> findAllByToIgnoreCase(String to);
}
