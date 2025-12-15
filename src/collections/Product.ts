import type { CollectionConfig } from 'payload'
import { v4 } from 'uuid'

export const Product: CollectionConfig = {
  slug: 'product',
  fields: [
    {
      name: 'id',
      type: 'text',
      defaultValue: () => v4()
    },
    {
      name: 'name',
      type: 'text'
    },{
      name: 'description',
      type: 'text'
    },{
      name: 'group',
      type: 'relationship',
      relationTo: 'group'
    }
  ],
}