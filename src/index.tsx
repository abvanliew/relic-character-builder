import { createRoot } from 'react-dom/client';
import App from './App';
import { Tab } from 'views/tabs';
import 'style/index.css';

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<App tab={Tab.Home} />);