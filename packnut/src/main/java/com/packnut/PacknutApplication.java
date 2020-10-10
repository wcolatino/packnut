package com.packnut;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class PacknutApplication extends SpringBootServletInitializer{ //Permite que seja inicializado por servidor externo;

	public static void main(String[] args) {
		SpringApplication.run(PacknutApplication.class, args);
	}

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
		return builder.sources(PacknutApplication.class);
	}

	
	
}
