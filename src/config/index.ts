import loadConfig from './loadConfig';
import configSchema from './configSchema';

const config = () => loadConfig(configSchema, process.env);

export default config;
