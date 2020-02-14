plugins {
    id("org.jetbrains.kotlin.js") version "1.3.70-eap-184"
}

group = "com.pit"
version = "0.1-SNAPSHOT"

repositories {
    maven { setUrl("https://dl.bintray.com/kotlin/kotlin-eap") }
    maven("https://kotlin.bintray.com/kotlin-js-wrappers/")
    mavenCentral()
    jcenter()
}

dependencies {
    implementation(kotlin("stdlib-js"))

    //React
    implementation("org.jetbrains:kotlin-react:16.9.0-pre.89-kotlin-1.3.60")
    implementation("org.jetbrains:kotlin-react-dom:16.9.0-pre.89-kotlin-1.3.60")
    implementation(npm("react", "16.12.0"))
    implementation(npm("react-dom", "16.12.0"))
    implementation(npm("styled-components"))
    implementation(npm("react-player"))
    implementation(npm("inline-style-prefixer"))

    implementation("org.jetbrains:kotlin-styled:1.0.0-pre.90-kotlin-1.3.61")
}

kotlin.target.browser { }