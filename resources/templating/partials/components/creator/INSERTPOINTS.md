
## INSERTPOINTS

### Include: Page

``` hbs
{{! @INSERT :: START @id: creator, @tag: component-partial }}
{{#with creator-bp}}
	{{> c-creator}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-import //
@import "components/_c-creator";
// @INSERT :: END
// @INSERT :: START @tag: scss-self-contained-import //
@import "../templating/partials/components/creator/scss/_c-creator";
// @INSERT :: END
```
