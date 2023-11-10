import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from './ArticlesList.stories'
import ThemesProvider from '@/theme/ThemesProvider'

const { Default } = composeStories(stories)

const articles = [
  {
    image: '/path-to-img1.jpg',
    imageAlt: 'Image Alt Text 1',
    title: 'Sample Article Title 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    funfact: 'Did you know? This is a fun fact!',
  },
  {
    image: '/path-to-img2.jpg',
    imageAlt: 'Image Alt Text 2',
    title: 'Sample Article Title 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
]

describe('ArticlesList', () => {
  beforeEach(() => {
    render(
      <ThemesProvider>
        <Default />
      </ThemesProvider>
    )
  })
  it('should render the ArticlesList component with articles', () => {
    expect(screen.getByText(articles[0].title)).toBeInTheDocument()
    expect(screen.getByText(articles[1].title)).toBeInTheDocument()

    expect(screen.getByAltText(articles[0].imageAlt)).toBeInTheDocument()
    expect(screen.getByAltText(articles[0].imageAlt)).toBeInTheDocument()
  })

  it('should render the correct number of articles', () => {
    const articlesRendered = screen.getAllByText(/sample article/i)
    expect(articlesRendered.length).toBe(2)
  })
})
