import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

group = "com.pit"
version = "0.1-SNAPSHOT"

plugins {
    kotlin("jvm") version "1.3.61"
}

repositories {
    jcenter()
    mavenCentral()
}

dependencies {
    implementation(group = "org.jetbrains.kotlinx", name = "kotlinx-html-jvm", version ="0.7.1")
    implementation(group = "org.jetbrains.kotlinx", name = "kotlinx-html-js",  version ="0.7.1")
    implementation(group = "io.ktor", name = "ktor", version = "1.3.0")
    implementation(group = "io.ktor", name = "ktor-server-netty", version = "1.3.0")
    implementation(kotlin("stdlib-jdk8"))
}

val compileKotlin: KotlinCompile by tasks
compileKotlin.kotlinOptions {
    jvmTarget = "1.8"
}
val compileTestKotlin: KotlinCompile by tasks
compileTestKotlin.kotlinOptions {
    jvmTarget = "1.8"
}
