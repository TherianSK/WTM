import gql from 'graphql-tag';

export const students = gql`
query allUsers($isTeacher:Boolean!) {
  allUsers(
    filter:{
      isTeacher:$isTeacher
    }
  )
  {
    id
    key: id
    email
    courses{
      id
      title
    }
  }

}
`;
