<template>
  <div class="col-sm-6 col-md-4">
    <div class="card h-75 my-5">
      <div class="card-body d-flex flex-column">
        <h4 class="card-title">{{project.name}}</h4>
        <h6 class="card-subtitle text-muted"></h6>
        <p class="card-text">{{project.description}}</p>
        <div class="mt-auto justify-content-around">
          <a :href="project.link" title="Project" class="float-left" target="_blank"><i style="margin-right: 0.5em;"
              class="fas fa-link m-1"></i>Project</a>
          <a :href="project.code" title="Code" class="float-right" target="_blank"><i style="margin-right: 0.5em;"
              class="fas fa-code m-1"></i>Code</a>
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
</style>