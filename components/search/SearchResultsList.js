/**
 * Created by allancutler on 5/6/16.
 */

import React, {
    Component
} from 'react';
import {
    StyleSheet,
    ListView,
    View,
    Text,
    ActivityIndicatorIOS
} from 'react-native';
import { SEARCH_PAGE_SIZE } from '../../constants/constants';
import { SearchResultItem } from './SearchResultItem';
import { performSearch } from '../../actions/search';
import { SceneNotifier } from '../SceneNotifier';

let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

export class SearchResultsList extends Component {
    static propTypes = {
        search: React.PropTypes.object,
        paginateResults: React.PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.search.isLoading) {
            return (
                <SceneNotifier
                    loading={true}
                />
            );
        }

        if(this.props.search.results.items.length) {
            return (
                <View style={styles.container}>
                    <ListView
                        showsVerticalScrollIndicator={false}
                        dataSource={ds.cloneWithRows(this.props.search.results.items)}
                        renderRow={(rowData) => <SearchResultItem item={rowData}/>}
                        renderSeparator={(sectionID, rowID) => <View key={`${sectionID}-${rowID}`} style={styles.listSeparator}/>}
                        pageSize={SEARCH_PAGE_SIZE}
                        onEndReachedThreshold={30}
                        onEndReached={this.props.paginateResults}
                        renderFooter={() => {
                            return (
                                <View style={styles.paginationLoader}>
                                    <ActivityIndicatorIOS
                                        animating={true}
                                        size={'small'}
                                    />
                                </View>
                            )
                        }}
                    />
                </View>
            );
        }

        return (
            <SceneNotifier
                message={`No results found for ${this.props.search.queryString}`}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    listSeparator: {
        backgroundColor: '#e1e1e1',
        height: 1,
        marginVertical: 20,
        marginHorizontal: 10
    },
    paginationLoader: {
        paddingBottom: 10
    }
});
