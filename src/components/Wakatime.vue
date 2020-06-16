<template>
  <div class="col-md-6 col-sm-4">
    <div class="card h-auto my-5">
      <div class="card-body d-flex flex-column">
        <a :href="wakatime.site"><img height="385" :src="wakatime.src"/></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["wakatime"]
};
</script>

<style lang="stylus"></style>
