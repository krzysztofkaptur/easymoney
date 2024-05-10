import { InputGroup } from '@/components/InputGroup/input-group'

export default function Home() {
  return (
    <main>
      <InputGroup label="Email" name="email" />
      <InputGroup label="Password" name="password" type="password" />
    </main>
  )
}
