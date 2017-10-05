import gql from 'graphql-tag';

export const homeworks = gql`
  query Homeworks {
       allHomework (orderBy: id_DESC) {
		id
    key: id
		title
		description
	 }
  }
`;
