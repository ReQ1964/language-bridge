import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from './ArticlesList.stories'
import ThemesProvider from '@/theme/ThemesProvider'

const { Default } = composeStories(stories)

describe('ArticlesList', () => {
  beforeEach(() => {
    render(
      <ThemesProvider>
        <Default />
      </ThemesProvider>
    )
  })

  it('should render the ArticlesList component with articles', () => {
    const articles = Default.args.articles

    if (articles) {
      expect(screen.getByText(articles[0].title)).toBeInTheDocument()
      expect(screen.getByText(articles[1].title)).toBeInTheDocument()

      expect(screen.getByAltText(articles[0].imageAlt)).toBeInTheDocument()
      expect(screen.getByAltText(articles[1].imageAlt)).toBeInTheDocument()
    } else {
      throw new Error('Articles are undefined')
    }
  })

  it('should render the correct number of articles', () => {
    const articlesRendered = screen.getAllByText(/sample article/i)
    expect(articlesRendered.length).toBe(2)
  })
})
