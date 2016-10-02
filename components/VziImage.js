/**
 * Created by allancutler on 5/1/16.
 */

const REGEX_IMAGE = /^http[s]?\:\/\//;

import React, {
    Component
} from 'react';
import {
    Image
} from 'react-native';
import { ASSET_DOMAIN } from '../config';

export default class VziImage extends Component {
    static propTypes = {
        source: React.PropTypes.string,
        styles: React.PropTypes.number
    };

    constructor(props) {
        super(props);
    }

    _renderImage(source = '') {
        if(!REGEX_IMAGE.test(source)) {
            source = `${ASSET_DOMAIN}/${source}`;
        }

        return (
            <Image
                style={this.props.styles}
                source={{uri: source}}
            />
        );
    }

    render() {
        if(this.props.source) {
            return this._renderImage(this.props.source);
        }

        return (
            <Image
                style={this.props.styles}
                source={require('../images/image-placeholder.png')}
            />
        );
    }
}
