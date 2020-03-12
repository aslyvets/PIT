package com.pit

import com.pit.model.Game
import com.pit.model.JoinRequest

class ActiveGames {
    val games = mutableMapOf<String, Game>()

    fun addGame(game: Game) {
        games[game.name!!] = game
    }

    fun join(joinRequest: JoinRequest) {
        val game = games[joinRequest.gameName!!]
        game!!.players.add(joinRequest.player!!)
    }

    override fun toString(): String {
        return "ActiveGames(games=$games)"
    }


}
