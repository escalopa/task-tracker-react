import {useMutation} from '@apollo/client'
import {SIGN_IN} from 'api/mutations/auth/signIn'
import {CURRENT_USER} from 'api/query/currentUser'
import {ACCESS_TOKEN, REFRESH_TOKEN} from 'constants/tokens'

const useSignIn = () => {
  const [mutation, {data, error, loading}] = useMutation(SIGN_IN, {
    refetchQueries: ({
      data: {
        signin: {accessToken, refreshToken}
      }
    }) => {
      localStorage.setItem(ACCESS_TOKEN, accessToken)
      localStorage.setItem(REFRESH_TOKEN, refreshToken)
      return [CURRENT_USER]
    }
  })

  const signIn = async (email, password) => {
    await mutation({variables: {email: email, password: password}})
  }

  return {
    signIn,
    data,
    loading,
    error
  }
}

export default useSignIn