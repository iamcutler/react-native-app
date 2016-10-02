/**
 * Created by allancutler on 4/27/16.
 */

import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Image,
    View
} from 'react-native';
import { ASSET_DOMAIN } from '../config';
import VziImage from './VziImage';

export class DashboardSupplierImage extends Component {
    static propTypes = {
        source: React.PropTypes.string
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <VziImage
                    source={this.props.source}
                    styles={styles.supplierImg}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    supplierImg: {
        width: 150,
        height: 50,
        resizeMode: 'contain'
    }
});
