<script>
import MatchupCardBody from '@/components/MatchupCardBody.vue'

export default {
  components: {
    MatchupCardBody
  },
  props: {
    matchups: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      currentMatchupIndex: 0
    }
  },
  computed: {
    canGoPrevious() {
      return this.currentMatchupIndex > 0
    },
    canGoNext() {
      return this.currentMatchupIndex < this.matchups.length - 1
    },
    currentMatchup() {
      return this.matchups[this.currentMatchupIndex]
    }
  },
  methods: {
    goToPreviousMatchup() {
      if (this.canGoPrevious) {
        this.currentMatchupIndex--
      }
    },
    goToNextMatchup() {
      if (this.canGoNext) {
        this.currentMatchupIndex++
      }
    }
  }
}
</script>

<template>
  <div class="matchup-card">
    <header class="card-header">
      <div class="card-title-group">
        <img
          width="14px"
          height="18px"
          src="https://cdn.fantasypros.com/images/test/hot-icon@3x.png"
          alt=""
          style="margin-right: 12px"
        />
        <h3 class="card-title">HOT MATCHUPS</h3>
      </div>
      <div>
        <button
          class="button-carrot"
          type="button"
          aria-label="Go to previous matchup"
          :disabled="!canGoPrevious"
          @click="goToPreviousMatchup"
        >
          ‹
        </button>
        <button
          class="button-carrot"
          type="button"
          aria-label="Go to next matchup"
          :disabled="!canGoNext"
          @click="goToNextMatchup"
        >
          ›
        </button>
      </div>
    </header>
    <MatchupCardBody class="card-body" :matchup="currentMatchup"></MatchupCardBody>
    <footer class="flex-center card-footer">
      <a href="https://www.fantasypros.com" target="_blank" style="text-decoration: none"
        >View Matchup</a
      >
    </footer>
  </div>
</template>

<style scoped>
.matchup-card {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow:
    0 8px 16px rgba(0, 0, 0, 0.2),
    0 4px 8px rgba(0, 0, 0, 0.12);
  padding: 4px 0;
}

.card-header {
  padding: 8px 20px;
  margin-bottom: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-title-group {
  display: flex;
  align-items: center;
}

.card-title {
  display: inline;
  font-weight: bold;
}

.button-carrot {
  all: unset;
  display: inline-block;
  cursor: pointer;
  font-weight: normal;
  font-size: 1.75rem;
  margin: 0 8px;
}

.button-carrot:disabled {
  cursor: not-allowed;
}

.card-body {
  margin: 24px 32px;
}

.card-footer {
  border-top: 1px solid rgba(0, 0, 0, 0.125);
  align-items: center;
  padding: 8px;
}
</style>
