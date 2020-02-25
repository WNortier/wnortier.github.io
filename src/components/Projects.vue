<template>
  <div class="col-sm-6 col-md-4">
    <div class="card h-75 my-5">
      <div class="card-body d-flex flex-column">
        <h4 class="card-title">{{project.name}}</h4>
        <h6 class="card-subtitle text-muted"></h6>
        <p class="card-text">{{project.description}}</p>
        <div class="mt-auto card-buttons">
          <a
            class="btn btn-outline-primary"
            target="_blank"
            title="Link opens in new tab"
            :href="project.link"
          >View Project</a>
          <!-- <a
            class="btn btn-outline-primary pull-right my-3"
            target="_blank"
            title="Link opens in new tab"
            :href="project.link"
          >View Project</a> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ["project"],

};
</script>

<style scoped>
/* .card-buttons {
  position: relative;
  bottom: 100;
} */
</style>