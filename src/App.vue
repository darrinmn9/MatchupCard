<script>
import MatchupCard from './components/MatchupCard.vue'

export default {
  components: {
    MatchupCard
  },
  data() {
    return {
      matchups: [
        {
          teams: [
            { name: 'Oakland', abbrev: 'Oak', wins: 2, losses: 1, ties: 1, home: false },
            { name: 'Detroit', abbrev: 'Det', wins: 2, losses: 1, ties: 1, home: true }
          ],
          schedule: { day: 'Sunday', time: '4pm' },
          analysis: { homePct: 0.6, awayPct: 0.4 }
        },
        {
          teams: [
            { name: 'Dallas', abbrev: 'Dal', wins: 1, losses: 3, ties: 0, home: false },
            { name: 'Philadelphia', abbrev: 'Phi', wins: 4, losses: 0, ties: 0, home: true }
          ],
          schedule: { day: 'Sunday', time: '4:25pm' },
          analysis: { homePct: 0.15, awayPct: 0.85 }
        },
        {
          teams: [
            { name: 'Houston', abbrev: 'Hou', wins: 2, losses: 2, ties: 0, home: false },
            { name: 'San Francisco', abbrev: 'SF', wins: 3, losses: 1, ties: 0, home: true }
          ],
          schedule: { day: 'Monday', time: '8:25pm' },
          analysis: { homePct: 0.35, awayPct: 0.65 }
        }
      ]
    }
  }
}
</script>

<template>
  <div class="main-container">
    <MatchupCard :matchups="matchups" style="width: 400px" />
  </div>
</template>

<style scoped>
.main-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
