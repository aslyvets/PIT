package com.pit.model

import java.util.*

data class Game(
    val name: String?,
    val author: Player?,
    val players: MutableList<Player>,
    val created: Date? = Date(),
    var question: String?
)
