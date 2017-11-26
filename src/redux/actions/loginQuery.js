import gql from 'graphql-tag';

export const signinUser = gql`
mutation ($email: String!, $password: String!) {
	signinUser(email: {email: $email, password: $password}) {
		token
		user {
			id
			email
			isTeacher
			teaching{
				id
				title
				homeworks{
					id
					title
					deadline
					expectedDifficulty
					expectedWorkTime
					points
					startsAt
					course{
						id
						title
					}
				}
			}
			courses{
				id
				title
				homeworks{
					id
					title
					deadline
					expectedDifficulty
					expectedWorkTime
					points
					startsAt
					course{
						id
						title
					}
				}
			}
		}
	}
}
`;
export const register = gql`
mutation createUser($isTeacher: Boolean!, $authProvider: AuthProviderSignupData! ) {
	createUser(
		authProvider:$authProvider
		isTeacher:$isTeacher
	) {
		id
	}
}
`;
