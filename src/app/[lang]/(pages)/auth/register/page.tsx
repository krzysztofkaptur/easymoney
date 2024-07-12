import { getDictionary } from '@/lib/i18n/get-dictionary'

import { RegisterContent } from './sections'

import { RegisterPageProps } from './types'

export default async function Register({
  params: { lang },
}: RegisterPageProps) {
  const t = await getDictionary(lang)

  return <RegisterContent t={t.register} />
}
