<template>
  <div class="dashboard-container">
    <div class="dashboard-text">{{ v }}</div>
  </div>
</template>

<script>

export default {
  name: 'Dashboard',
  data: function() {
    return {
      v: 'Welcome!'
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
