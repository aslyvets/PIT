package com.pit

import io.ktor.application.call
import io.ktor.application.install
import io.ktor.features.CORS
import io.ktor.features.CallLogging
import io.ktor.features.ContentNegotiation
import io.ktor.features.DefaultHeaders
import io.ktor.html.respondHtml
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpMethod
import io.ktor.http.cio.websocket.Frame
import io.ktor.http.cio.websocket.readText
import io.ktor.http.content.resources
import io.ktor.http.content.static
import io.ktor.jackson.jackson
import io.ktor.response.respond
import io.ktor.routing.Routing
import io.ktor.routing.get
import io.ktor.routing.post
import io.ktor.server.engine.embeddedServer
import io.ktor.server.netty.Netty
import io.ktor.websocket.WebSockets
import io.ktor.websocket.webSocket
import kotlinx.coroutines.channels.SendChannel
import kotlinx.html.a
import kotlinx.html.body
import kotlinx.html.div
import kotlinx.html.h1
import java.util.*

var currentOngoing: SendChannel<Frame>? = null

private suspend fun sendPlay() {
    while (true) {
        if (needToSendPlay) {
            currentOngoing!!.send(Frame.Text("play"))
            needToSendPlay = false
        }
    }
}

fun main() {
    val host = "192.168.178.64"
    val port = 8888

    val server = embeddedServer(Netty, host = host, port = port) {
        install(DefaultHeaders)
        install(CallLogging)
        install(WebSockets)
        install(ContentNegotiation) {
            jackson {
            }
        }
        install(CORS) {
            method(HttpMethod.Options)
            method(HttpMethod.Get)
            method(HttpMethod.Post)
            method(HttpMethod.Put)
            method(HttpMethod.Delete)
            method(HttpMethod.Patch)
            header(HttpHeaders.AccessControlAllowOrigin)
            header(HttpHeaders.Authorization)
            allowCredentials = true
            anyHost()
        }
        install(Routing) {
            webSocket("/echo") {
                currentOngoing = outgoing
                for (frame in incoming) {
                    when (frame) {
                        is Frame.Text -> {
                            val text = frame.readText()
                            outgoing.send(Frame.Text("YOU SAID: $text"))
                        }
                    }
                }
            }
            get("/") {
                call.respondHtml {
                    body {
                        h1 { +"Cool Server" }
                    }
                }
            }
            post("/createGame") {
                println("****************")
                println("I WANT TO CREATE A GAME")
                call.respond(Game("alex"))
            }
            get("/play") {
                needToSendPlay = true
                call.respondHtml {
                    body {
                        div {
                            a {
                                href = "http://$host:$port/play"
                                +"play"
                            }
                        }
                    }
                }
                sendPlay()
            }
            static {
                static("/") {
                    resources("/")
                }

            }
        }
    }

    server.start()

    val address = "http://$host:$port"
    println("=============================================")
    println("The server is started at $address")
}

var needToSendPlay = false

data class Game(val name: String, val created: Date = Date())
