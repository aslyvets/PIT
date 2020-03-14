package com.pit

import com.pit.model.Game
import com.pit.model.JoinRequest
import com.pit.model.PostQuestion

class ActiveGames {
    val games = mutableMapOf<String, Game>()

    fun addGame(game: Game) {
        games[game.name!!] = game
    }

    fun join(joinRequest: JoinRequest): Game {
        val game = games[joinRequest.gameName!!]
        game!!.players.add(joinRequest.player!!)
        return game
    }

    fun postQuestion(postQuestion: PostQuestion): Game {
        val game = games[postQuestion.gameName!!]!!
        game.question = postQuestion.question!!
        return game
    }

    override fun toString(): String {
        return "ActiveGames(games=$games)"
    }

}
