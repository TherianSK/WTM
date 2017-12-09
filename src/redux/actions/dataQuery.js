
import gql from 'graphql-tag';

export const addComment = gql`
mutation createComment($body: String!,$userId: ID!,$homeworkId: ID!,$rating:Int!,$difficulty:Int!,$timeSpend:Float!) {
	createComment(
		body:$body,
		homeworkId: $homeworkId,
		userId: $userId,
		rating:$rating,
		difficulty:$difficulty
		timeSpend:$timeSpend
	) {
		id
	}
}
`;


export const addCourse = gql`
mutation createCourse($title: String!,$teacherId: ID!) {
	createCourse(
		title:$title,
		teacherId: $teacherId
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
`;

export const setStudents = gql`
mutation updateCourse($id:ID!,$users:[ID!]) {
	updateCourse(
		id:$id,
		usersIds:$users
	) {
		id
	}
}
`;
