import gql from 'graphql-tag';
export const addHomework = gql`
mutation createHomework($courseId:ID!,$deadline:DateTime,$description:String!,$expectedDifficulty:Int!,$expectedWorkTime:Float,$points:Int,$startsAt:DateTime,$title:String!) {
  createHomework(
    courseId:$courseId,
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
