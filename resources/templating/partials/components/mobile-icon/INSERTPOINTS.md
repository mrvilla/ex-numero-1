
## INSERTPOINTS

### Include: Page

``` hbs
{{! @INSERT :: START @id: mobile-icon, @tag: component-partial }}
{{#with mobile-icon-bp}}
	{{> c-mobile-icon}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-import //
@import "components/_c-mobile-icon";
// @INSERT :: END
// @INSERT :: START @tag: scss-self-contained-import //
@import "../templating/partials/components/mobile-icon/scss/_c-mobile-icon";
// @INSERT :: END
```
