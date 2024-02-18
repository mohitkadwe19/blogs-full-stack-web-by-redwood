import { useAuth } from 'src/auth'
const formattedDate = (datetime: ConstructorParameters<typeof Date>[0]) => {
  const parsedDate = new Date(datetime)
  const month = parsedDate.toLocaleString('default', { month: 'long' })
  return `${parsedDate.getDate()} ${month} ${parsedDate.getFullYear()}`
}

// Just a temporary type. We'll replace this later
interface Props {
  comment: {
    name: string
    createdAt: string
    body: string
  }
}

const Comment = ({ comment }: Props) => {
  const { hasRole } = useAuth()
  const moderate = () => {
    if (confirm('Are you sure?')) {
      // TODO: delete comment
    }
  }
  return (
    <div className="bg-gray-200 p-8 rounded-lg relative">
      <header className="flex justify-between">
        <h2 className="font-semibold text-gray-700">{comment.name}</h2>
        <time className="text-xs text-gray-500" dateTime={comment.createdAt}>
          {formattedDate(comment.createdAt)}
        </time>
      </header>
      <p className="text-sm mt-2">{comment.body}</p>
      {hasRole('moderator') && (
        <button
          type="button"
          onClick={moderate}
          className="absolute bottom-2 right-2 bg-red-500 text-xs rounded text-white px-2 py-1"
        >
          Delete
        </button>
      )}
    </div>
  )
}

export default Comment
