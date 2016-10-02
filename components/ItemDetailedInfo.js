/**
 * Created by allancutler on 4/30/16.
 */

import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export class ItemDetailedInfo extends Component {
    static propTypes = {
        item: React.PropTypes.object.isRequired
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>
                    Detailed Information
                </Text>

                <View style={styles.detailedContainer}>
                    <View>
                        <View>
                            <Text style={styles.detailedInfoLabel}>ID:</Text>
                            <Text style={styles.detailedInfoValue}>{this.props.item.id}</Text>
                        </View>
                        <View>
                            <Text style={styles.detailedInfoLabel}>Name:</Text>
                            <Text style={styles.detailedInfoValue}>{this.props.item.name}</Text>
                        </View>
                    </View>

                    <View>
                        <View>
                            <Text style={styles.detailedInfoLabel}>Part Number:</Text>
                            <Text style={styles.detailedInfoValue}>{this.props.item.partNumber}</Text>
                        </View>
                        <View>
                            <Text style={styles.detailedInfoLabel}>Price:</Text>
                            <Text style={styles.detailedInfoValue}>{this.props.item.price}</Text>
                        </View>
                        <View>
                            <Text style={styles.detailedInfoLabel}>Tax:</Text>
                            <Text style={styles.detailedInfoValue}>{this.props.item.tax}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20
    },
    headerText: {
        fontSize: 20,
        fontFamily: 'Open Sans',
        alignSelf: 'center',
        marginBottom: 10
    },
    detailedContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    detailedInfoLabel: {
        fontFamily: 'OpenSans-Semibold'
    },
    detailedInfoValue: {
        color: '#8f8f8f'
    }
});
