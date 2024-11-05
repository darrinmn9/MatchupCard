<script>
import ProgressCircular from '@/components/ProgressCircular.vue'
export default {
  components: {
    ProgressCircular
  },
  props: {
    matchup: {
      type: Object,
      required: true
    }
  },
  computed: {
    matchupDateTimeDisplay() {
      return `${this.matchup.schedule.day.slice(0, 3)} ${this.matchup.schedule.time}`
    },
    homeTeam() {
      return this.matchup.teams.find((team) => team.home)
    },
    awayTeam() {
      return this.matchup.teams.find((team) => !team.home)
    }
  },
  methods: {
    teamRecordDisplay(team) {
      return `${team.wins}-${team.losses}-${team.ties}`
    },
    decimalToPercentNumber(decimal) {
      return decimal.toFixed(2) * 100
    }
  }
}
</script>

<template>
  <div style="text-align: center">
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
      <ProgressCircular :value="decimalToPercentNumber(matchup.analysis.awayPct)" />
      <div class="divider-text-center">Expert Consensus</div>
      <ProgressCircular :value="decimalToPercentNumber(matchup.analysis.homePct)" />
    </div>
  </div>
</template>

<style scoped>
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
</style>
