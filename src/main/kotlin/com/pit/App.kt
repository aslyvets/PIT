package com.pit

import react.RBuilder
import react.RComponent
import react.RProps
import react.RState
import react.dom.h1

interface AppState : RState {
    var currentVideo: String
}

class App : RComponent<RProps, AppState>() {
    override fun AppState.init() {
        currentVideo = "https://www.youtube.com/watch?v=JJG4C_20pDs"
    }

    override fun RBuilder.render() {
        h1 {
            +"PIT"
        }
        videoPlayer {
            videoUrl = state.currentVideo
        }
    }
}