# bootstrap-styles
bootstrap css (styles only)

```shell
npm install bootstrap-styles --save-dev
```

## css:
```js
// The following line can be included in your src/index.js or App.vue or App.jsx

import 'bootstrap-styles/css/bootstrap.min.css';
```

## scss
```scss
/* The following line can be included in a src/styles.scss */

@import "~bootstrap-styles/scss/bootstrap";
```

then in js
```js
import './styles.scss'

```

## customizing

```scss
// Configuration
@import "bootstrap-styles/scss/functions";
@import "bootstrap-styles/scss/variables";
@import "bootstrap-styles/scss/variables-dark";
@import "bootstrap-styles/scss/maps";
@import "bootstrap-styles/scss/mixins";
@import "bootstrap-styles/scss/utilities";

// Layout & components
@import "bootstrap-styles/scss/root";
@import "bootstrap-styles/scss/reboot";
@import "bootstrap-styles/scss/type";
@import "bootstrap-styles/scss/images";
@import "bootstrap-styles/scss/containers";
@import "bootstrap-styles/scss/grid";
@import "bootstrap-styles/scss/tables";
@import "bootstrap-styles/scss/forms";
@import "bootstrap-styles/scss/buttons";
@import "bootstrap-styles/scss/transitions";
@import "bootstrap-styles/scss/dropdown";
@import "bootstrap-styles/scss/button-group";
@import "bootstrap-styles/scss/nav";
@import "bootstrap-styles/scss/navbar";
@import "bootstrap-styles/scss/card";
@import "bootstrap-styles/scss/accordion";
@import "bootstrap-styles/scss/breadcrumb";
@import "bootstrap-styles/scss/pagination";
@import "bootstrap-styles/scss/badge";
@import "bootstrap-styles/scss/alert";
@import "bootstrap-styles/scss/progress";
@import "bootstrap-styles/scss/list-group";
@import "bootstrap-styles/scss/close";
@import "bootstrap-styles/scss/toasts";
@import "bootstrap-styles/scss/modal";
@import "bootstrap-styles/scss/tooltip";
@import "bootstrap-styles/scss/popover";
@import "bootstrap-styles/scss/carousel";
@import "bootstrap-styles/scss/spinners";
@import "bootstrap-styles/scss/offcanvas";
@import "bootstrap-styles/scss/placeholders";

// Helpers
@import "bootstrap-styles/scss/helpers";

// Utilities
@import "bootstrap-styles/scss/utilities/api";
```
