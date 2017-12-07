
import gql from 'graphql-tag';

export const addComment = gql`
mutation createComment($body: String!,$userId: ID!,$homeworkId: ID!,$rating:Int!) {
	createComment(
		body:$body,
		homeworkId: $homeworkId,
		userId: $userId,
		rating:$rating,
	) {
		id
	}
}
`;

export const data = gql`
query Me {
		user {
			id
			email
			isTeacher
			courses{
				id
				title
				homeworks{
					id
					title
					description
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
`;
