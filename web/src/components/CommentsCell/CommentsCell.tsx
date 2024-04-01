import { gql } from '@apollo/client'
import type { CommentsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import Comment from 'src/components/Comment'

export const QUERY = gql`
  query CommentsQuery {
    comments {
      id
      name
      body
      postId
      createdAt
    }
  }
`

export const Loading: React.FC = () => <div>Loading...</div>

export const Empty: React.FC = () => (
  <div className="text-center text-gray-500">No comments yet</div>
)

export const Failure: React.FC<CellFailureProps> = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success: React.FC<CellSuccessProps<CommentsQuery>> = ({ comments }) => {
  return (
    <div className="space-y-8">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  )
}
