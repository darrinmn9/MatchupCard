<script>
export default {
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
    },
    matchupDateTimeDisplay() {
      return `${this.currentMatchup.schedule.day.slice(0, 3)} ${this.currentMatchup.schedule.time}`
    },
    homeTeam() {
      return this.currentMatchup.teams.find((team) => team.home)
    },
    awayTeam() {
      return this.currentMatchup.teams.find((team) => !team.home)
    }
  },
  methods: {
    goToPrevious() {
      if (this.canGoPrevious) {
        this.currentMatchupIndex--
      }
    },
    goToNext() {
      if (this.canGoNext) {
        this.currentMatchupIndex++
      }
    },
    teamRecordDisplay(team) {
      return `${team.wins}-${team.losses}-${team.ties}`
    },
    decimalToPercentDisplay(decimal) {
      return `${decimal.toFixed(2) * 100}%`
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
          @click="goToPrevious"
        >
          ‹
        </button>
        <button
          class="button-carrot"
          type="button"
          aria-label="Go to next matchup"
          :disabled="!canGoNext"
          @click="goToNext"
        >
          ›
        </button>
      </div>
    </header>
    <div class="card-body">
      <div class="teams-container">
        <div>
          <h4 class="team-text">{{ awayTeam.abbrev.toUpperCase() }}</h4>
          <div>{{ teamRecordDisplay(awayTeam) }}</div>
        </div>
        <div class="divider-text-center">at</div>
        <div>
          <h4 class="team-text">{{ homeTeam.abbrev.toUpperCase() }}</h4>
          <div>{{ teamRecordDisplay(homeTeam) }}</div>
        </div>
      </div>
      <div class="flex-center matchup-date">{{ matchupDateTimeDisplay }}</div>
      <hr class="matchup-divider" />
      <div class="expert-consensus">
        <div>{{ decimalToPercentDisplay(currentMatchup.analysis.awayPct) }}</div>
        <div class="divider-text-center">Expert Consensus</div>
        <div>{{ decimalToPercentDisplay(currentMatchup.analysis.homePct) }}</div>
      </div>
    </div>
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
  text-align: center;
}

.teams-container {
  display: flex;
  justify-content: space-evenly;
}

.matchup-date {
  margin: 16px 0;
}

.team-text {
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 24px;
}

.divider-text-center {
  width: 100px;
  text-wrap: wrap;
}

.matchup-divider {
  margin: 24px 16px;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.125);
}

.expert-consensus {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.card-footer {
  border-top: 1px solid rgba(0, 0, 0, 0.125);
  align-items: center;
  padding: 8px;
}
</style>
