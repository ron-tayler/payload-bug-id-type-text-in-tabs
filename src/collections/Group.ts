import type { CollectionConfig } from 'payload'
import { v4 } from 'uuid'

export const Group: CollectionConfig = {
  slug: 'group',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: '1',
          fields: [
            {
              name: 'id',
              type: 'text',
              defaultValue: () => v4()
            },
          ]
        },
        {
          label: '1',
          fields: [
            {
              name: 'name',
              type: 'text'
            },
          ]
        },
      ]
    },
    {
      name: 'description',
      type: 'text'
    }
  ],
}