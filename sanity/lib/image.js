import createImageUrlBuilder from '@sanity/image-url'

import { dataset, projectId } from '../env'

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ 
  projectId: process.env.NEXT_PUBLIC_SANITY_DATASET,
  dataset: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
 })

export const urlFor = (source) => {
  return builder.image(source)
}
