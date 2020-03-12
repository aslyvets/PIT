package com.pit.config

import io.ktor.http.cio.websocket.Frame
import io.ktor.http.cio.websocket.readText
import io.ktor.routing.Routing
import io.ktor.websocket.webSocket
import kotlinx.coroutines.channels.SendChannel

var currentOngoing: SendChannel<Frame>? = null

suspend fun sendPlay() {
    currentOngoing!!.send(Frame.Text("play"))
}

fun Routing.configureWebsocket() {
    webSocket("/echo") {
        currentOngoing = outgoing
        for (frame in incoming) {
            when (frame) {
                is Frame.Text -> {
                    val text = frame.readText()
                    println(text)
                    outgoing.send(Frame.Text("YOU SAID: $text"))
                }
            }
        }
    }
}
