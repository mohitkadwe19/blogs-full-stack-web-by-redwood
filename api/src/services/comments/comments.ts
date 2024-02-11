import type { Prisma } from '@prisma/client'
import type { ResolverArgs } from '@redwoodjs/graphql-server'

import { db } from 'src/lib/db'
import { CommentRelationResolvers } from 'types/graphql'

export const comments = () => {
  return db.comment.findMany()
}

export const comment = ({ id }: QueryResolvers['comment'] => {
  return db.comment.findUnique({
    where: { id },
  })
}

export const Comment: CommentRelationResolvers = {
  post: (_obj, { root }) => {
    return db.comment.findUnique({ where: { id: root?.id } }).post()
  },
}

export const deleteComment = ({ id }: Prisma.CommentWhereUniqueInput) => {
  return db.comment.delete({
    where: { id },
  })
}

interface CreateCommentArgs {
  input: Prisma.CommentCreateInput
}

export const createComment = ({ input }: CreateCommentArgs) => {
  return db.comment.create({
    data: input,
  })
}
