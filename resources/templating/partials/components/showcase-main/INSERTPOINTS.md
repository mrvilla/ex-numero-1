
## INSERTPOINTS

### Include: Page

``` hbs
{{! @INSERT :: START @id: showcase-main, @tag: component-partial }}
{{#with showcase-main-bp}}
	{{> c-showcase-main}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-import //
@import "components/_c-showcase-main";
// @INSERT :: END
// @INSERT :: START @tag: scss-self-contained-import //
@import "../templating/partials/components/showcase-main/scss/_c-showcase-main";
// @INSERT :: END
```
