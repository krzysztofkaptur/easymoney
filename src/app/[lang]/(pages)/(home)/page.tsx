import { db, todos } from '@/lib/db'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import {
  Avatar,
  Badge,
  Calendar,
  Card,
  Checkbox,
  Combobox,
  DatePicker,
  Drawer,
  DropdownMenu,
  FAQ,
  Image,
  InputGroup,
  Modal,
  Pagination,
  Select,
  Skeleton,
  Switch,
  Table,
  Tabs,
  Text,
  Textarea,
  ThemeToggle,
  Toast,
  Tooltip,
} from '@/components'

import type { Locale } from '@/lib/i18n'

type Props = {
  params: { lang: Locale }
}

export default async function Home({ params: { lang } }: Props) {
  const data = await db.select().from(todos)
  const t = await getDictionary(lang)

  console.log(data)

  return (
    <main>
      <InputGroup name='test' label='Test' />
      {/* <ThemeToggle />
      <Avatar src='https://github.com/shadcn.png' alt='@shadcn' fallback='CN' />
      <Badge text='badge' />
      <Image src='/images/next.svg' alt='' width={100} height={20} />
      <Text variant='h1'>{t.home.title}</Text>
      <Card />
      <Modal />
      <FAQ />
      <Checkbox />
      <Combobox />
      <DropdownMenu />
      <Pagination />
      <Select />
      <Drawer />
      <Textarea />
      <Switch />
      <Tabs />
      <Toast />
      <Tooltip />
      <Calendar />
      <DatePicker />
      <Table />
      <Skeleton /> */}
    </main>
  )
}
