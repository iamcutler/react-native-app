/**
 * Created by allancutler on 4/30/16.
 */

import React, {
    Component
} from 'react';
import {
    StyleSheet,
    Image,
    View
} from 'react-native';

export class ItemDetailSlider extends Component {
    constructor() {
        super();

        this.state = {
            itemImages: []
        };
    }

    componentWillMount() {
        const images = [
                this.props.item.imageUrl,
                ...(this.props.item.images ? this.props.item.images : [])
            ].reduce((acc, img) => {
                if(img) {
                    acc.push(img);
                }

                return acc;
            }, []);

        this.setState({
            itemImages: images
        });
    }

    _renderSupplierLogo() {
        if(this.props.item.supplierLogo) {
            return (
                <Image
                    style={styles.supplierLogo}
                    source={{uri: `${this.props.item.supplierLogo}`}}
                />
            );
        }
    }

    render() {
        return(
            <View style={styles.sliderContainer}>
                {this._renderSupplierLogo()}

                <View style={styles.slideWrapper}>
                    <Image
                        style={styles.mainImage}
                        source={{uri: this.state.itemImages[0]}}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    sliderContainer: {
        backgroundColor: '#FFF',
        paddingVertical: 20,
        paddingHorizontal: 20
    },
    slideWrapper: {
        width: 180,
        height: 150,
        alignSelf: 'center'
    },
    mainImage: {
        width: 180,
        height: 150,
        resizeMode: 'contain'
    },
    supplierLogo: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 80,
        height: 50,
        resizeMode: 'contain'
    }
});
