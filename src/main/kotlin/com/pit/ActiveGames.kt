package com.pit

import com.pit.model.Game
import com.pit.model.JoinRequest
import com.pit.model.PostQuestion

class ActiveGames {
    val games = mutableMapOf<String, Game>()

    fun addGame(game: Game) {
        games[game.name!!] = game
    }

    fun join(joinRequest: JoinRequest) {
        val game = games[joinRequest.gameName!!]
        game!!.players.add(joinRequest.player!!)
    }

    fun postQuestion(postQuestion: PostQuestion) {
        val game = games[postQuestion.gameName!!]!!
        game.question = postQuestion.question!!
    }

    override fun toString(): String {
        return "ActiveGames(games=$games)"
    }


}
