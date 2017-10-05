import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { courses} from './query';
import Sidebar from './sidebar';

class SidebarLoader extends Component {
  render() {
    const courseWrapper = graphql(courses, {
      props: ({ data: { loading, allCourses, error, refetch, subscribeToMore } }) => ({
        loadingCourses: loading,
        courses: allCourses,
        coursesError: error,
        refetchCourses:refetch,
        subscribeToMoreCourses:subscribeToMore,
      }),
    });
    const WrappedSidebar= courseWrapper(Sidebar);
    return (
      <WrappedSidebar/>
    );
  }
}

export default SidebarLoader;
