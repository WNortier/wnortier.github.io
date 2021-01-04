<template>
  <div id="app">
    <container class="container">
      <section id="header-section">
        <div class="row flexbox">
          <div class="col-md-2 py-5"></div>
          <div class="col-md-4 text-center py-5 px-3">
            <h1 class="display-4 text-left" style="font-family: tangerine">
              Warwick Nortier
            </h1>
            <p class="lead px-1">
              Hello world! I'm a hardworking full stack web developer from Cape
              Town with a passion for coding and working with people. Listed
              below are some of my projects and my CV.
              <a
                href="https://docs.google.com/document/d/1fBssyWkHStn7B299Zjk7dkELchdSHh6GFeblH9ibWLg/edit?usp=sharing"
                title="Google-Docs"
              >
                <i
                  style="margin-right: 0.5em"
                  class="align-left fas fa-paperclip"
                ></i
                >Curriculum Vitae
              </a>
            </p>
          </div>
          <div class="col-md-4 text-center py-5 px-1">
            <div
              class="LI-profile-badge"
              data-version="v1"
              data-size="medium"
              data-locale="en_US"
              data-type="horizontal"
              data-theme="dark"
              data-vanity="warwick-n-30712434"
            >
              <a
                class="LI-simple-link"
                href="https://za.linkedin.com/in/warwick-n-30712434?trk=profile-badge"
                >Warwick N.</a
              >
            </div>
          </div>
          <div class="col-md-2 py-5"></div>
        </div>
      </section>
    </container>

    <div class="container">
      <div class="col-md-12">
        <h2>Projects</h2>
        <hr />
      </div>
      <div class="row">
        <template>
          <app-Projects
            v-for="(project, index) in projects"
            :project="project"
            :key="index"
          />
        </template>
      </div>
      <div class="col-md-12">
        <h2>Wakatime Developer Statistics</h2>
        <hr />
      </div>
      <div class="row flex-container">
        <app-Wakatime
          v-for="(wakatime, index) in wakatime"
          :wakatime="wakatime"
          :key="index"
        />
      </div>
    </div>

    <div style="margin-top: 100px"></div>

    <app-Footer />
  </div>
</template>

<script>
/* eslint-disable */

import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Wakatime from "./components/Wakatime";

import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      selectedComponent: "Projects",
      projects: [
        {
          id: 1,
          name: "Shoe-Catalogue",
          link: "https://shoecatalogue-api.herokuapp.com/client.html",
          code: "https://github.com/WNortier/shoe-catalogue-api",
          description:
            "The shoe catalogue is run as a client and is linked via APIs to edit and return info from the database which retains and persists the data.  The front-end is built using Tailwind.css."
        },
        {
          id: 2,
          name: "KonnectX",
          link: "https://konnectx.herokuapp.com/",
          code: "https://github.com/WNortier/konnectx-hackathon-app",
          description:
            "KonnectX was built in 2020 during a 3 day hack-a-thon. It uses the google maps API to mark free public wifi/sportsground locations from a database. Searches can also provide the results distance and directions on how to reach it."
        },
        {
          id: 3,
          name: "Custom HTML Video Player",
          link: "https://wnortier.github.io/custom-html-video-player/",
          code: "https://github.com/WNortier/custom-html-video-player",
          description:
            "The Custom HTML Video Player was built using the HTML5 Video API. It exposes a number of attributes and methods which make it easy to customise the player to your liking."
        },
        {
          id: 4,
          name: "Quote Generator",
          link: "https://wnortier.github.io/quote-generator/",
          code: "https://github.com/WNortier/quote-generator",
          description:
            "The Quote Generator app uses an external API to obtain the quote data. It also allows the user to post quotes to their twitter account."
        },
        {
          id: 5,
          name: "Infinity Scroll",
          link: "https://wnortier.github.io/infinity-scroll/",
          code: "https://github.com/WNortier/infinity-scroll",
          description:
            "The Infinity Scroll is an image feed which allows the user to scroll seemingly infinitely. This is due to the feed constantly updating with new images from the API as the user scrolls."
        },
        {
          id: 6,
          name: "ChatCord",
          link: "https://github.com/WNortier/chatcord",
          code: "https://chatcord-2020.herokuapp.com/",
          description:
            "ChatCord is a realtime chat web application with chatrooms.  It was built on the backend using NodeJS with the Express module and the socket.io websockets package."
        }
      ],
      wakatime: [
        {
          site: "https://wakatime.com",
          src:
            "https://wakatime.com/share/@f42aeeff-e8cf-47c5-8253-1ea66bf1534d/fe62bd2f-5bc8-4bfa-89f6-8aee0132d45d.png"
        },
        {
          site: "https://wakatime.com",
          src:
            "https://wakatime.com/share/@f42aeeff-e8cf-47c5-8253-1ea66bf1534d/00f5210e-a27d-44d7-8ef4-44ccad0a9ca5.png"
        }
      ]
    };
  },
  components: {
    "app-Footer": Footer,
    "app-Projects": Projects,
    "app-Wakatime": Wakatime
  },
  created() {
    var self = this;
    axios
      // .get("https://api.github.com/users/wnortier/repos?&per_page=100")
      .get("https://api.github.com/users/wnortier")
      .then(res => {
        console.log(res);
      })
      .catch(error => console.log(error));
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
}

footer {
  color: white;
  text-align: center;
}

.flex-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
