package com.pit

import org.springframework.messaging.handler.annotation.MessageMapping
import org.springframework.messaging.handler.annotation.SendTo
import org.springframework.stereotype.Controller


@Controller
class WebsocketController {
    @MessageMapping("/question")
    @SendTo("/topic/game")
    fun question(question: String): Question {
        return Question(question)
    }

    data class Question(val question: String)
}

