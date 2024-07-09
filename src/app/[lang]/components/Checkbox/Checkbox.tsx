'use client'

import { Checkbox as UiCheckbox } from '@/app/[lang]/components/ui'

export function Checkbox() {
  return (
    <div className='flex items-center space-x-2'>
      <UiCheckbox id='terms' />
      <label
        htmlFor='terms'
        className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
      >
        Accept terms and conditions
      </label>
    </div>
  )
}
