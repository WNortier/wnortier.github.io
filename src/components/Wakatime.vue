<template>
  <div>
    <div class="flex-item">
      <img height="385" :src="wakatime.src" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["wakatime"]
};
</script>

<style scoped>
.flex-item {
  width: 530px;
  margin: 1rem;
  border: 0.85px solid lightgrey;
}

img {
  height: auto;
  width: 100%;
}

@media (max-width: 500px) {
  .flex-item {
    width: 380px;
    margin: 1rem;
    border: 0.85px solid lightgrey;
  }
}

@media (min-width: 501px) and (max-width: 768px) {
  .flex-item {
    width: 320px;
    margin: 1rem;
    border: 0.85px solid lightgrey;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .flex-item {
    width: 420px;
    margin: 1rem;
    border: 0.85px solid lightgrey;
  }
}
</style>
