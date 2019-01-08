/**
 * Configure the behaviour of HotKeys
 * @param {Object} configuration Configuration object
 * @see Configuration.init
 */
import Configuration from './lib/Configuration';

function configure(configuration = {}) {
  Configuration.init(configuration);
}

export default configure;
