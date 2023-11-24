type ReviewResponse = {
  [key: string]: {
    author: string
    content: string
    rating: number
  }
}

type ArticleResponse = {
  [key: string]: {
    description: string
    funfact: string
    image: string
    imageAlt: string
    title: string
  }
}

type TextsResponse = {
  [key: string]: {
    image: string
    imageAlt: string
    level: string
    snippet: string
    title: string
  }
}

type DataArray = ReviewResponse | ArticleResponse | TextsResponse

const transformFirebaseData = (data: DataArray) => {
  return Object.keys(data).map((key) => {
    const item = data[key]

    const transformedItem = Object.keys(item).reduce((acc, currKey) => {
      acc[currKey] = item[currKey as keyof typeof item]
      return acc
    }, {} as Record<string, string>)

    return transformedItem
  })
}

export default transformFirebaseData
