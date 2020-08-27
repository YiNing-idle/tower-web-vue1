<template>
  <div style="display:inline-block;">
    <label class="radio-label">工程状态: </label>
    <el-select v-model="status" clearable>
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      options: [{
        value: 1,
        label: '未开始'
      }, {
        value: 2,
        label: '进行中'
      }, {
        value: 3,
        label: '已完成'
      }]
    }
  },
  computed: {
    status: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>
