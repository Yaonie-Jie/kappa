<template>
	<div class="toast" v-show="msg.show">
		<div class="toast_content">
			{{msg.content}}
		</div>
	</div>

</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  data: function() {
    return {};
  },
  computed: mapState({
    msg: state => state.msg
  }),
  methods: {
    ...mapActions(["hideMsg"])
  },
  watch: {
    msg: {
      handler: function(val, oldVal) {
        if (val.show == oldVal.show) return;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.hideMsg();
        }, 1500);
      },
      deep: true
    }
  }
};
</script>
<style scoped>
.toast {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  z-index: 9999;
}
.toast_content {
  position: fixed;
  top: 4rem;
  left: 50%;
  transition: all 0.3s ease-in-out;
  transform: translateX(-50%);
  border-radius: 0.8rem;
  height: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.4rem;
  white-space: nowrap;
  background-color: rgba(51, 51, 51, 0.7);
  color: #fff;
  font-size: 0.26rem;
  word-break: break-all;
  z-index: 10000;
}
</style>