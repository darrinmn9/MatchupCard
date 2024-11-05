import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import MatchupCard from '../MatchupCard.vue'

describe('MatchupCard', () => {
  it('renders and navigates properly', async () => {
    const wrapper = mount(MatchupCard, {
      props: {
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
    })
    expect(wrapper.text()).toContain('OAK')
    expect(wrapper.text()).toContain('DET')

    await wrapper.get('button[aria-label="Go to next matchup"]').trigger('click')

    expect(wrapper.text()).toContain('DAL')
    expect(wrapper.text()).toContain('PHI')

    await wrapper.get('button[aria-label="Go to next matchup"]').trigger('click')

    expect(wrapper.text()).toContain('HOU')
    expect(wrapper.text()).toContain('SF')

    await wrapper.get('button[aria-label="Go to previous matchup"]').trigger('click')

    expect(wrapper.text()).toContain('DAL')
    expect(wrapper.text()).toContain('PHI')
  })
})
