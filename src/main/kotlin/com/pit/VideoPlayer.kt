package com.pit

import kotlinx.css.*
import react.*
import react.dom.h3
import styled.css
import styled.styledDiv

interface VideoPlayerProps : RProps{
    var videoUrl: String
}

class VideoPlayer(props: VideoPlayerProps) : RComponent<VideoPlayerProps, RState>(props) {
    override fun RBuilder.render() {
        styledDiv {
            css {
                position = Position.absolute
                top = 10.px
                right = 10.px
            }
            h3 {
                +"You will like it!"
            }
            ReactPlayer {
                attrs.url = props.videoUrl
            }
        }
    }
}

fun RBuilder.videoPlayer(handler: VideoPlayerProps.() -> Unit): ReactElement {
    return child(VideoPlayer::class) {
        this.attrs(handler)
    }
}