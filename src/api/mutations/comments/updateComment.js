import {gql} from '@apollo/client'
import commentFragment from '../../fragments/comment'

export const UPDATE_COMMENT_MUTATION = gql`
  mutation updateComment($id: ID!, $text: String!) {
    updateComment(commentId: $id, text: $text) {
      ...CommentFragment
    }
  }
  ${commentFragment}
`
