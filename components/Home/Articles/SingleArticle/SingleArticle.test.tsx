import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/react'
import * as stories from './SingleArticle.stories'
import ThemesProvider from '@/theme/ThemesProvider'

const { Default, WithoutFunFact } = composeStories(stories)



describe('SingleArticle Component', () => {
  test('should render the article with all props', () => {
    render(
      <ThemesProvider>
        <Default />
      </ThemesProvider>
    )

    const titleElement = screen.getByText(Default.args.title ?? '')
    expect(titleElement).toBeInTheDocument()

    const descriptionElement = screen.getByText(Default.args.description ?? '')
    expect(descriptionElement).toBeInTheDocument()

    const imageElement = screen.getByAltText(Default.args.imageAlt ?? '')
    expect(imageElement).toBeInTheDocument()

    const funfactElement = screen.getByText(Default.args.funfact ?? '')
    expect(funfactElement).toBeInTheDocument()
  })
})

test('should render the article without funfact', () => {
  render(
    <ThemesProvider>
      <WithoutFunFact />
    </ThemesProvider>
  )

  const funfactElement = screen.queryByText(Default.args.funfact ?? '')
  expect(funfactElement).toBeNull()
})
