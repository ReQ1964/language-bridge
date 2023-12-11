import { render } from '@testing-library/react'
import ThemesProvider from '@/theme/ThemesProvider'
import { composeStories } from '@storybook/react'
import * as stories from './OutsideProviders.stories'

const { Default } = composeStories(stories)

describe('OutsideProviders Component', () => {
  it('should render properly', () => {
    render(
      <ThemesProvider>
        <Default />
      </ThemesProvider>
    )
  })
})
