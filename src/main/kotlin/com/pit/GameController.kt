package com.pit

import com.pit.model.Game
import com.pit.model.JoinRequest
import com.pit.model.PostQuestion
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController

@RestController
class GameController(val webSocketService: WebsocketController) {
    val activeGames = ActiveGames()

    @PostMapping("/createGame")
    fun createGame(@RequestBody game: Game): ResponseEntity<String> {
        activeGames.addGame(game)
        return ResponseEntity.ok("")
    }

    @PostMapping("/join")
    fun joinGame(@RequestBody joinRequest: JoinRequest): ResponseEntity<Game> {
        val game = activeGames.join(joinRequest)
        return ResponseEntity.ok().body(game)
    }

    @PostMapping("/question")
    fun postQuestion(@RequestBody question: PostQuestion): ResponseEntity<Game> {
        val game = activeGames.postQuestion(question)
        webSocketService.question(question.question!!)
        return ResponseEntity.ok().body(game)
    }

    @GetMapping("/games")
    fun games(): ResponseEntity<MutableCollection<Game>> {
        return ResponseEntity.ok().body(activeGames.games.values)
    }
}
