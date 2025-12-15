import type { CollectionConfig } from 'payload'
import { v4 } from 'uuid'

export const Group: CollectionConfig = {
  slug: 'group',
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
    }
  ],
}