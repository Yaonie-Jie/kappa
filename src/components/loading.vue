<template>
    <div class="loading" v-show="loading">
        <div class="loading-inner">
            <img class="loading_icon" src="~images/loading.gif">
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: mapState({
    loading: state => state.loading
  })
};
</script>
<style scoped>
.loading {
  position: fixed;
  width: 7.5rem;
  left: 50%;
  margin-left: -3.75rem;
  top: 1.2rem;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0);
  z-index: 100;
}
.loading-inner {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0.25rem 0.3rem 0.15rem;
  border-radius: 0.16rem;
}
.loading_icon{
  width: .8rem;
}

</style>