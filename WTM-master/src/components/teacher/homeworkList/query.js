import gql from 'graphql-tag';

export const homeworks = gql`
  query Homeworks {
       allHomework (orderBy: deadline_ASC) {
		id
    key: id
		title
		description
    deadline
	 }
  }
`;

export const deadlines = gql`
  query Homeworks($id:[ID]!) {
       allHomework (
         orderBy: deadline_ASC
         filter:{
           id_in:$id
         }
       ) {
		id
    key: id
		title
		description
    deadline
	 }
  }
`;

export const deleteCourse = gql`
	mutation ($id: ID!) {
		deleteCourse(
			id: $id,
		) {
		  id
		}
	}
`;
