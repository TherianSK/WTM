import gql from 'graphql-tag';

export const homework = gql`
  query Homework($id:ID!) {
    Homework (
      id:$id
    ) {
		id
    key: id
		title
    comments{
      user{
        id
      }
    }
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
`;
