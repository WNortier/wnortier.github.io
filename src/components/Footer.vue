/* eslint-disable */
<template>
  <div>
    <footer id="main-footer" class="flex">
      <div class="container">
        <div class="row">
          <div class="col-md-4 text-center py-4"></div>
          <div class="col-md-4 text-center py-4">
            <h4>
              {{ built }}
              <img width="34" height="34" src="../assets/logo.png" alt />
            </h4>
            <hr />
            <p id="year">{{ getYear }}</p>
          </div>
          <!-- <div class="col-md-4 text-center py-4">
            <h4>Contact</h4>
            <hr />
            <i class="fas fa-phone"></i><a class="px-3" style="color:white" href="tel:+27825058736">0825058736</a>
            </div> -->
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
/* eslint-disable */

export default {
  data() {
    return {
      built: "Built with Vue CLI"
    };
  },
  computed: {
    getYear: function() {
      return new Date().getFullYear();
    }
  }
};
</script>
<style scoped>
footer {
  border-top: 1px solid grey;
  background-color: rgb(40, 142, 197);
  width: 100%;
}
</style>
