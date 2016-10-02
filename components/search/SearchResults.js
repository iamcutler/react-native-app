/**
 * Created by allancutler on 4/29/16.
 */

import React, {
    Component
} from 'react';
import {
    StyleSheet,
    ListView,
    View,
    Text,
    ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import { NavBar } from './../NavBar';
import { SearchResultsList } from './SearchResultsList';
import { SEARCH_PAGE_SIZE } from '../../constants/constants';
import {
    fetchInitialResults,
    clearSearch,
    performSearch
} from '../../actions/search';

// Map Redux store state to props for view list component
const mapStateToProps = (state) => {
    return {
        search: state.search
    };
};
const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const { dispatch } = dispatchProps;
    const { search } = stateProps;

    return {
        ...stateProps,
        ...ownProps,
        // callback function as prop to paginate list
        paginateResults() {
            dispatch(performSearch(search.queryString, {
                searchName: null,
                pageNumber: (+search.results.pagination.currentPageNumber + 1),
                pageSize: SEARCH_PAGE_SIZE
            }, true));
        }
    };
};

const SearchResultsListView = connect(
    mapStateToProps,
    null,
    mergeProps
)(SearchResultsList);

export class SearchResults extends Component {
    static contextTypes = {
        store: React.PropTypes.object
    };

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        const { store } = this.context;

        this.unsubscribe = store.subscribe(() => {
            this.forceUpdate();
        });
    }

    componentWillUnmount() {
        const { store } = this.context;

        store.dispatch(clearSearch());
        this.unsubscribe();
    }

    render() {
        return (
            <View style={styles.container}>
                <NavBar
                    title="Search Results"/>

                <SearchResultsListView/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
