# warpjs-filter-box

## Usage

In `webpack`, add the following folder to the partial directories:

    const FilterBox = require('@warp-works/warpjs-filter-box');

    ...
    module: {
      loaders: [
        ...,
        {
          test: /\.hbs$/,
          loader: 'handlebars-loader',
          query: {
            ...
            partialDirs: {
              ...,
              FilterBox.templatesDir,
            }
          }
        }
      ]
    }

In your template, you can now use:

    <div class="warpjs-filter-box-container">

      <div class="pull-right">
        {{>warpjs-filter-box-template placeholder="Filter my items"}}
      </div>

      <table>
        <tbody>
          <tr class="warpjs-filter-box-item">
            ...
          </tr>
        </tbody>
      </table>
    </div>

The filter-box will apply the filtering to items with the class
`warpjs-filter-box-item` in the same `warpjs-filter-box-container` as the filter
box.

Those classes are exported for convenience with:

    FilterBox.CONTAINER_CLASS
    FilterBox.ITEM_CLASS

This simple implementation will call `$(element).text()` and compare
`.val()` in lower case.


In your client code, to enable the listeners, all you have to do is:

    const FilterBox = require('@warp-works/warpjs-filter-box');

    FilterBox.init($);
