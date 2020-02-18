package com.pit

import io.ktor.application.call
import io.ktor.http.ContentType
import io.ktor.http.content.resources
import io.ktor.http.content.static
import io.ktor.response.respondText
import io.ktor.routing.get
import io.ktor.routing.routing
import io.ktor.server.engine.embeddedServer
import io.ktor.server.netty.Netty
import kotlinx.html.*
import kotlinx.html.stream.createHTML

fun main(args: Array<String>) {
    val server = embeddedServer(Netty, port = 8080) {
        routing {
            get("/") {
                call.respondText(getHtml(), ContentType.Text.Html)
            }
            static {
                static("st"){
                    resources("st")
                }

            }
        }
    }
    server.start(wait = true)
}

fun getHtml(): String {
    return createHTML().html {
        body {
            div {
                video {
                    width = "640"
                    height = "480"
                    controls = true
                    autoPlay = true
                    source {
                        src = "st/friends.mp4"
                        type = "video/mp4"
                    }
                }
            }
        }
    }
}
