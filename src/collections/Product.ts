import type { CollectionConfig } from 'payload'

export const Product: CollectionConfig = {
  slug: 'product',
  fields: [
    {
      name: 'name',
      type: 'text'
    },{
      name: 'description',
      type: 'text'
    }
  ],
}