import gql from 'graphql-tag';

export const courses = gql`
  query Courses {
       allCourses (orderBy: id_DESC) {
		id
    key: id
		title
	 }
  }
`;
