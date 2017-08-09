
## INSERTPOINTS

### Include: Page

``` hbs
{{! @INSERT :: START @id: footer, @tag: component-partial }}
{{#with footer-bp}}
	{{> c-footer}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-import //
@import "components/_c-footer";
// @INSERT :: END
// @INSERT :: START @tag: scss-self-contained-import //
@import "../templating/partials/components/footer/scss/_c-footer";
// @INSERT :: END
```
