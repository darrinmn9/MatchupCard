import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import MatchupCard from '../MatchupCard.vue'

describe('MatchupCard', () => {
  it('renders properly', () => {
    const wrapper = mount(MatchupCard, { props: { matchups: [] } })
    expect(wrapper.text()).toContain('Hello World')
  })
})
