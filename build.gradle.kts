import com.moowork.gradle.node.npm.NpxTask

repositories {
    jcenter()
    mavenCentral()
    maven("https://dl.bintray.com/kotlin/ktor")
    maven("https://dl.bintray.com/kotlin/kotlinx")
}

buildscript {
    dependencies {
        classpath("org.jetbrains.kotlin:kotlin-gradle-plugin:1.3.70")
    }
}

plugins {
    id("com.github.node-gradle.node") version "2.2.1"
    kotlin("multiplatform") version "1.3.70"
}

node {
    version = "12.15.0"
    npmVersion = "6.13.6"
    nodeModulesDir = file("${project.projectDir}/src/angular")
    npmWorkDir = file("${project.buildDir}/npmWorkDir")
}

tasks.register<NpxTask>("ngBuild"){
    dependsOn("npmInstall")
    println("installing angular project")
    command = "ng"
    setArgs(listOf("build"))
}


kotlin {
    jvm {}
}

val ktorVersion = "1.3.0"
val logbackVersion = "1.2.3"

kotlin.sourceSets["jvmMain"].dependencies {
    implementation(kotlin("stdlib-jdk8"))
    implementation("io.ktor:ktor-server-netty:$ktorVersion")
    implementation("io.ktor:ktor-websockets:$ktorVersion")
    implementation("io.ktor:ktor-html-builder:$ktorVersion")
    implementation("ch.qos.logback:logback-classic:$logbackVersion")
}


val run by tasks.creating(JavaExec::class) {
    group = "application"
    main = "com.pit.MainKt"
    kotlin {
        val main = targets["jvm"].compilations["main"]
        dependsOn(main.compileAllTaskName)
        classpath(
            { main.output.allOutputs.files },
            { configurations["jvmRuntimeClasspath"] }
        )
    }
}
