import com.moowork.gradle.node.npm.NpxTask
import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

repositories {
    jcenter()
    mavenCentral()
    maven("https://dl.bintray.com/kotlin/kotlinx")
}

val springBootVersion = "2.2.3.RELEASE"

plugins {
    id("io.spring.dependency-management") version "1.0.9.RELEASE"
    id("org.springframework.boot") version "2.2.3.RELEASE"
    id("com.github.node-gradle.node") version "2.2.1"
    kotlin("jvm") version "1.3.70"
    kotlin("plugin.spring") version "1.3.70"
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

dependencies {
    implementation(kotlin("stdlib-jdk8"))
    implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
    runtime(group = "org.jetbrains.kotlin", name = "kotlin-reflect", version = "1.3.70")
    compile("org.springframework.boot:spring-boot-starter-websocket:$springBootVersion")
}

tasks.withType<KotlinCompile> {
    kotlinOptions {
        freeCompilerArgs = listOf("-Xjsr305=strict")
        jvmTarget = "1.8"
    }
}
