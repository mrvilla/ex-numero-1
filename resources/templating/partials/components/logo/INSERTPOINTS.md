
## INSERTPOINTS

### Include: Page

``` hbs
{{! @INSERT :: START @id: logo, @tag: component-partial }}
{{#with logo-bp}}
	{{> c-logo}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-import //
@import "components/_c-logo";
// @INSERT :: END
// @INSERT :: START @tag: scss-self-contained-import //
@import "../templating/partials/components/logo/scss/_c-logo";
// @INSERT :: END
```
