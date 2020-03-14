package com.pit

import org.springframework.boot.Banner
import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class Server

fun main(args: Array<String>) {
    runApplication<Server>(*args) {
        setBannerMode(Banner.Mode.OFF)
    }
}
