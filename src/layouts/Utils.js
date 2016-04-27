import React, {
	Component,
	View,
	StyleSheet,
	Text,
	StatusBar,
} from 'react-native';
import Toast from '../components/base/Toast';
import * as codePushUtils from '../utils/codePushSync';


class Utils extends Component {
	componentDidMount() {
		const {actions} = this.props;
		actions.getReducerFromAsyncStorage();
		// if (__DEV__) {
		// 	actions.checkToken('your secretKey', ()=> {
		// 		actions.toast('登陆成功');
		// 	});
		// }
		codePushUtils.init();
	}


	componentWillReceiveProps(nextProps) {
		if (this.props.toast.id !== nextProps.toast.id) {
			this.toast.show(nextProps.toast.text, nextProps.toast.timeout);
		}
	}


	render() {
		return (
			<View style={styles.container}>
				<StatusBar barStyle="light-content"/>
				<Toast ref={ (view)=> this.toast=view }/>
			</View>
		);
	}
}


const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 0,
		left: 0
	}
});


export const LayoutComponent = Utils;
export function mapStateToProps(state) {
	const {utils = {}} = state;
	return {
		...utils
	}
}
