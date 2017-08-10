
### Include: Page

``` hbs
{{! @INSERT :: START @id: picture, @tag: component-partial }}
{{#with picture-bp.variations.default}}
	{{> c-picture}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-import //
@import "components/_c-picture";
// @INSERT :: END //

// @INSERT :: START @tag: scss-self-contained-import //
@import "../templating/partials/components/picture/scss/_c-picture";
// @INSERT :: END //
```