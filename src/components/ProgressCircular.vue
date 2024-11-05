<script>
/*
 * based on https://vuetifyjs.com/en/components/progress-circular/
 * https://github.com/vuetifyjs/vuetify/tree/master/packages/vuetify/src/components/VProgressCircular
 */
const RADIUS = 20
const CIRCUMFERENCE = 2 * Math.PI * RADIUS
const WIDTH = 6
const SIZE = 100
const DIAMETER = (RADIUS / (1 - WIDTH / SIZE)) * 2
const STROKE_WIDTH = (WIDTH / SIZE) * DIAMETER

export default {
  props: {
    value: {
      type: Number,
      required: true,
      validator(value) {
        return 0 <= value <= 100 && Number.isInteger(value)
      }
    }
  },
  data() {
    return {
      RADIUS,
      CIRCUMFERENCE,
      WIDTH,
      SIZE,
      DIAMETER,
      STROKE_WIDTH
    }
  },
  computed: {
    strokeDashOffset() {
      return `${((100 - this.value) / 100) * this.CIRCUMFERENCE}px`
    },
    isHalfComplete() {
      return this.value >= 50
    },
    percentageDisplay() {
      return `${this.value.toFixed(0)}%`
    }
  }
}
</script>

<template>
  <div class="progress-circular">
    <svg xmlns="http://www.w3.org/2000/svg" :viewBox="`0 0 ${DIAMETER} ${DIAMETER}`">
      <circle
        class="progress-circular-underlay"
        fill="transparent"
        cx="50%"
        cy="50%"
        :r="RADIUS"
        :stroke-width="STROKE_WIDTH"
        :stroke-dasharray="CIRCUMFERENCE"
        stroke-dashoffset="0"
      />
      <circle
        :class="
          isHalfComplete
            ? 'progress-circular-favorite-overlay'
            : 'progress-circular-underdog-overlay'
        "
        fill="transparent"
        cx="50%"
        cy="50%"
        :r="RADIUS"
        :stroke-width="STROKE_WIDTH"
        :stroke-dasharray="CIRCUMFERENCE"
        :stroke-dashoffset="strokeDashOffset"
        stroke-linecap="round"
      />
    </svg>
    <div
      :style="{
        color: isHalfComplete ? 'green' : 'rgba(0, 0, 0, 0.36)',
        'font-weight': isHalfComplete ? 'bold' : 'normal'
      }"
      class="progress-circular-content"
    >
      {{ percentageDisplay }}
    </div>
  </div>
</template>

<style scoped>
.progress-circular {
  width: 70px;
  height: 70px;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  position: relative;
  vertical-align: middle;
}

.progress-circular > svg {
  width: 100%;
  height: 100%;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
  transform: rotate(calc(270deg));
}

.progress-circular-underlay {
  color: rgba(0, 0, 0, 0.12);
  stroke: rgba(0, 0, 0, 0.12);
  z-index: 1;
}

.progress-circular-underdog-overlay {
  color: rgba(0, 0, 0, 0.36);
  stroke: rgba(0, 0, 0, 0.36);
  z-index: 2;
}

.progress-circular-favorite-overlay {
  color: green;
  stroke: green;
  z-index: 2;
}

.progress-circular-content {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}
</style>
