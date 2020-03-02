<template>
  <div id="app">
    <section id="header-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6 text-center py-5">
            <h1 class="display-4 text-left" style="font-family: tangerine">Warwick Nortier</h1>
            <p class="lead">
              Hello world! I'm a hardworking full stack web developer from Cape Town with a passion for coding and
              working with people.
              Listed below are some of my projects and my CV.
              <a href="https://docs.google.com/document/d/1fBssyWkHStn7B299Zjk7dkELchdSHh6GFeblH9ibWLg/edit?usp=sharing"
                title="Google-Docs">
                <i style="margin-right: 0.5em;" class="align-left fas fa-paperclip"></i>Curriculum Vitae
              </a>
            </p>
          </div>
          <div class="col-md-6 text-center py-5">
            <div class="LI-profile-badge" data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical"
              data-theme="light" data-vanity="warwick-nortier-30712434">
              <a class="LI-simple-link"
                href="https://za.linkedin.com/in/warwick-nortier-30712434?trk=profile-badge">Warwick Nortier</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="container">
      <div class="col-md-12">
        <h2>Projects</h2>
        <hr />
      </div>
      <div class="row">
        <template>
          <app-Projects v-for="(project, index) in projects" :project="project" :key="index" />
        </template>
      </div>
    </div>

    <div style="margin-top:100px;"></div>

    <app-Footer />
  </div>
</template>

<script>
/* eslint-disable */

import Footer from "./components/Footer";
import Projects from "./components/Projects";

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
          link: "",
          code: "",
          description:
            "The shoe catalogue is run as a client and is linked via APIs to edit and return info from the database which retains and persists the data.  Front-end is built using Tailwind.css."
        },
        {
          id: 2,
          name: "KonnectX",
          link: "",
          code: "",
          description:
            "KonenctX uses the google maps API to mark free wifi and sportsground locations from a database along with the approximate distance and directions on how to reach them."
        },
        {
          id: 3,
          name: "Waiter-Availability",
          link: "",
          code: "",
          description:
            "The waiter app is built on the backend using NodeJS with the Express module.  An account called admin@gmail.com is required to view the admin section."
        },
        {
          id: 4,
          name: "Registrations",
          link: "",
          code: "",
          description:
            "The registrations app is built on the backend using NodeJS with the Express module.  Have fun printing and editing registration numbers!"
        },
        {
          id: 5,
          name: "Loop-Lab",
          link: "https://wnortier.github.io/bootstrap-4-codealong-site/",
          code: "",
          description:
            "Loop-Lab is not my original work - it is a 'code-along' project I completed part of a Bootstrap 4 training course.  I always strive to create responsive and professional front-end designs."
        },
        {
          id: 6,
          name: "Phone-Bills",
          link: "https://wnortier.github.io/phone-bills-working-with-dom/",
          code: "",
          description:
            "A collection of phone bill widgets hooked up to the DOM with Javascript and tested using the Mocha test framework and Chai assertion library."
        }
      ]
    };
  },
  components: {
    "app-Footer": Footer,
    "app-Projects": Projects
  },
  created() {
    var self = this;
    axios
      .get("https://api.github.com/users/wnortier/repos")
      .then(res => {
        let response = res.data;
        console.log(response)
        let shoeCatalogueProject = response.filter(function(e) {
          return e.name.includes("shoe");
        });
        let konnectxProject = response.filter(function(e) {
          return e.name.includes("Konnect");
        });
        let waitersProject = response.filter(function(e) {
          return e.name.includes("waiter");
        });
        let registrationsProject = response.filter(function(e) {
          return e.name.includes("registra");
        });
        let loopLabProject = response.filter(function(e) {
          return e.name.includes("codealong");
        });
        let phoneBillsProject = response.filter(function(e) {
          return e.name.includes("phone");
        });
        self.projects[0].code = shoeCatalogueProject[0].html_url;
        self.projects[0].link = shoeCatalogueProject[0].description;
        self.projects[1].code = konnectxProject[0].html_url;
        self.projects[1].link = konnectxProject[0].description;
        self.projects[2].code = waitersProject[0].html_url;
        self.projects[2].link = waitersProject[0].description;
        self.projects[3].code = registrationsProject[0].html_url;
        self.projects[3].link = registrationsProject[0].description;
        self.projects[4].code = loopLabProject[0].html_url;
        self.projects[4].link = loopLabProject[0].description;
        self.projects[5].code = phoneBillsProject[0].html_url;
        self.projects[5].link = phoneBillsProject[0].description;
        console.log(self.projects)
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
</style>
