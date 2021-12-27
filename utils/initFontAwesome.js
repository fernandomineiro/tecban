import { library } from '@fortawesome/fontawesome-svg-core';
import { faLink
        ,faPowerOff
        ,faShieldAlt
        ,faUniversity
        ,faUser
        ,faExchangeAlt
        ,faCommentDollar } from '@fortawesome/free-solid-svg-icons';

function initFontAwesome() {
  library.add(faLink);
  library.add(faUser);
  library.add(faPowerOff);
  library.add(faUniversity);
  library.add(faShieldAlt);
  library.add(faExchangeAlt);
  library.add(faCommentDollar);
}

export default initFontAwesome;
