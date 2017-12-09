import gql from 'graphql-tag';

export const courses =  gql`
query Courses($userId:ID!) {
  allCourses (
    filter:{
      teacher:{
        id:$userId
      }
    }
  )
  {
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
}`;

export const subscription = gql`
subscription {
  Course(filter: {mutation_in: [CREATED,UPDATED,DELETED]}){
    mutation
    node {

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
