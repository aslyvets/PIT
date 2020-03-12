package com.pit

import com.pit.model.Game

class ActiveGames{
   private val games = mutableListOf<Game>()

    fun addGame(game: Game){
        games.add(game)
    }

}
