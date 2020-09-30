/**
 * App Styles
 */
import Colors from './colors';
import Fonts from './fonts';
import Sizes from './sizes';

const appStylesBase = {

    // Text Styles
    appContainer: {
        flex: 1,
    },
    baseText: {
        fontSize: Fonts.base.size,
        color: Colors.blue,
    },
    boldText: {
        fontSize: Fonts.base.size,
        color: Colors.blue,
    },
    
   
    emptyView: {
        text: {
            fontFamily: Fonts.base.family,
            fontSize: 15,
            color: '#A0ABBE',
            textAlign: 'center',
        },
        progress: {
            backgroundColor: 'transparent',
            margin: Sizes.padding
        },
        error: {
            retry: {
                backgroundColor: 'transparent',
                alignSelf: 'center',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }
        }
    },

    fabButton: {
        position: 'absolute',
        bottom: 90,
        right: 32,
        width: 50,
        height: 50,
        justifyContent: 'center',
        shadowColor: Colors.fabButton,
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    fabIcon: {
        fontSize: 36,
        color: Colors.fabButton,
    },

}
export default {
    // Import app styles base
    ...appStylesBase
}