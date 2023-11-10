import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SingleArticle from './SingleArticle'
import ThemesProvider from '@/theme/ThemesProvider'

const sampleArticle = {
  image: '/path-to-image.jpg',
  imageAlt: 'Image Alt Text',
  title: 'Sample Article Title',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  funfact: 'Did you know? This is a fun fact!',
}

describe('SingleArticle Component', () => {
  test('should render the article with all props', () => {
    render(
      <ThemesProvider>
        <SingleArticle {...sampleArticle} />
      </ThemesProvider>
    )

    const titleElement = screen.getByText(sampleArticle.title)
    expect(titleElement).toBeInTheDocument()

    const descriptionElement = screen.getByText(sampleArticle.description)
    expect(descriptionElement).toBeInTheDocument()

    const imageElement = screen.getByAltText(sampleArticle.imageAlt)
    expect(imageElement).toBeInTheDocument()

    const funfactElement = screen.getByText(sampleArticle.funfact)
    expect(funfactElement).toBeInTheDocument()
  })
})

test('should render the article without funfact', () => {
  render(
    <ThemesProvider>
      <SingleArticle {...sampleArticle} funfact={''} />
    </ThemesProvider>
  )

  const funfactElement = screen.queryByText(sampleArticle.funfact)
  expect(funfactElement).toBeNull()
})
