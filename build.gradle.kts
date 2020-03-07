import com.moowork.gradle.node.npm.NpxTask

repositories {
    jcenter()
    mavenCentral()
    maven("https://dl.bintray.com/kotlin/ktor")
    maven("https://dl.bintray.com/kotlin/kotlinx")
}

plugins {
    id("com.github.node-gradle.node") version "2.2.1"
    kotlin("jvm") version "1.3.70"
}

node {
    version = "12.15.0"
    npmVersion = "6.13.6"
    nodeModulesDir = file("${project.projectDir}/src/angular")
    npmWorkDir = file("${project.buildDir}/npmWorkDir")
}

tasks.register<NpxTask>("ngBuild") {
    dependsOn("npmInstall")
    println("installing angular project")
    command = "ng"
    setArgs(listOf("build"))
}

val ktorVersion = "1.3.0"
val logbackVersion = "1.2.3"

dependencies {
    implementation(kotlin("stdlib-jdk8"))
    implementation("io.ktor:ktor-server-netty:$ktorVersion")
    implementation("io.ktor:ktor-websockets:$ktorVersion")
    implementation("io.ktor:ktor-html-builder:$ktorVersion")
    implementation("io.ktor:ktor-jackson:$ktorVersion")
    implementation("ch.qos.logback:logback-classic:$logbackVersion")
}
