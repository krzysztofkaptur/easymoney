import { db } from '@/lib/db'
import { todos } from '@/lib/db'

export default async function Home() {
  // const data = await db.query.todos.findMany()
  const data = await db.select().from(todos)

  console.log(data)

  return (
    <main>
      <h1>home page</h1>
    </main>
  )
}
