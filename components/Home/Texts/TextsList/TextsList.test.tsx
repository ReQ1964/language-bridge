// textsList.test.js
import { render, screen } from '@testing-library/react'
import ThemesProvider from '@/theme/ThemesProvider'
import { composeStories } from '@storybook/react'
import * as stories from './TextsList.stories'

const { Default, Loading, Error } = composeStories(stories)

describe('TextsList', () => {
  it('should render TextsList component with sample texts', () => {
    render(
      <ThemesProvider>
        <Default />
      </ThemesProvider>
    )

    const headingElement = screen.getByText(/popular texts/i)
    expect(headingElement).toBeInTheDocument()
    Default.args.texts?.forEach((text) => {
      const titleElement = screen.getByText(text.title)
      const snippetElement = screen.getByText(text.snippet)
      const imageElement = screen.getByAltText(text.imageAlt)

      expect(titleElement).toBeInTheDocument()
      expect(snippetElement).toBeInTheDocument()
      expect(imageElement).toBeInTheDocument()
    })
  })

  it('should render error message, when error is true', () => {
    render(
      <ThemesProvider>
        <Error />
      </ThemesProvider>
    )
    const errorText = screen.getByText('Failed to download the texts')
    expect(errorText).toBeInTheDocument()
  })

  it('should render a loading icon, when error is true', () => {
    render(
      <ThemesProvider>
        <Loading />
      </ThemesProvider>
    )
    const loadingIcon = screen.getByTestId('loading-icon')
    expect(loadingIcon).toBeInTheDocument()
  })
})
