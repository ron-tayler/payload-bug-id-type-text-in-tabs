import type { CollectionConfig } from 'payload'

export const Group: CollectionConfig = {
  slug: 'group',
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