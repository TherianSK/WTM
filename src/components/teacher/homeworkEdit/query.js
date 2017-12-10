import gql from 'graphql-tag';

export const homework = gql`
  query Homework($id:ID!) {
    Homework (
      id:$id
    ) {
		id
    key: id
    comments{
      body
      difficulty
      rating
      timeSpend
    }
    course{
      id
    }
    deadline
    description
    expectedDifficulty
    expectedWorkTime
    points
    startsAt
    title
	 }
  }
`;

export const editHomework = gql`
mutation updateHomework($id:ID!,$deadline:DateTime,$description:String!,$expectedDifficulty:Int!,$expectedWorkTime:Float,$points:Int,$startsAt:DateTime,$title:String!) {
	updateHomework(
		id:$id,
    deadline:$deadline
    description:$description
    expectedDifficulty:$expectedDifficulty
    expectedWorkTime:$expectedWorkTime
    points:$points
    startsAt:$startsAt
    title:$title
	) {
		id
	}
}
`;

export const deleteHomework = gql`
	mutation ($id: ID!) {
		deleteHomework(
			id: $id,
		) {
		  id
		}
	}
`;
