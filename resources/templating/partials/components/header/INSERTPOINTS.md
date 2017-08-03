
## INSERTPOINTS

### Include: Page

``` hbs
{{! @INSERT :: START @id: header, @tag: component-partial }}
{{#with header-bp}}
	{{> c-header}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-import //
@import "components/_c-header";
// @INSERT :: END
// @INSERT :: START @tag: scss-self-contained-import //
@import "../templating/partials/components/header/scss/_c-header";
// @INSERT :: END
```
