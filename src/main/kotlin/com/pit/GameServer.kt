package com.pit

import com.pit.config.*
import com.pit.model.Game
import com.pit.model.JoinRequest
import io.ktor.application.call
import io.ktor.application.install
import io.ktor.features.CallLogging
import io.ktor.features.ContentNegotiation
import io.ktor.features.DefaultHeaders
import io.ktor.http.content.resources
import io.ktor.http.content.static
import io.ktor.jackson.jackson
import io.ktor.request.receive
import io.ktor.response.respond
import io.ktor.routing.Routing
import io.ktor.routing.get
import io.ktor.routing.post
import io.ktor.server.engine.embeddedServer
import io.ktor.server.netty.Netty
import io.ktor.websocket.WebSockets


fun main() {
    val activeGames = ActiveGames()
    val server = embeddedServer(Netty, host = host, port = port) {
        install(DefaultHeaders)
        corsConfig()
        install(CallLogging)
        install(WebSockets)
        install(ContentNegotiation) {
            jackson {
            }
        }
        install(Routing) {
            configureWebsocket()
            post("/createGame") {
                val game = call.receive<Game>()
                activeGames.addGame(game)
                call.respond(game)
            }
            post("/join") {
                val joinRequest = call.receive<JoinRequest>()
                activeGames.join(joinRequest)
                println(activeGames)
                call.respond(joinRequest)
            }
            get("/games"){
                println(activeGames.games)
                call.respond(activeGames.games.values)
            }

            get("/play") {
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
