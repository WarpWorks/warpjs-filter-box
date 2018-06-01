const path = require('path');

const PROJECT_ROOT = path.dirname(require.resolve('./package.json'));

const CONTAINER_CLASS = 'warpjs-filter-box-container';
const ITEM_CLASS = 'warpjs-filter-box-item';

class FilterBox {
    static init($) {
        $(document).on('keyup', `.${CONTAINER_CLASS} [data-warpjs-type="filter-box"]`, _.debounce(
            function() {
                const filterBoxValue = $(this).val().toLowerCase().trim();

                $(this).closest(`.${CONTAINER_CLASS}`).find(`.${ITEM_CLASS}`).each((index, element) => {
                    if ($(element).text().toLowerCase().indexOf(filterBoxValue) === -1) {
                        $(element).hide();
                    } else {
                        $(element).show();
                    }
                });
            },
            250
        ));
    }

    static get templatesDir() {
        return path.join(PROJECT_ROOT, 'templates');
    }

    static get CONTAINER_CLASS() {
        return CONTAINER_CLASS;
    }

    static get ITEM_CLASS() {
        return ITEM_CLASS;
    }
}

module.exports = FilterBox;
