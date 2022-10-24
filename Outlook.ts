import {app} from 'electron';
import TrayApplication from '@mvanderlugt/electron-wrapper/dist/TrayApplication';

const main = new TrayApplication(app, 'Outlook', 'https://outlook.office365.com/');
main.launch()
