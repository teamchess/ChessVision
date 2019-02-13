import {createStackNavigator} from 'react-navigation';
import "./components/HomeScreen";

//React Navigation creates 
const App = createStackNavigator({
	Editor: {screen: EditorScreen},
	Analysis: {screen: AnalysisScreen},
	Scan: {screen: ScanScreen},
	Clock: {screen: ClockScreen},
	Profile: {screen: ProfileScreen},
});

export default App;