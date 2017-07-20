# CSS Module

css-loader?modules (the query parameter modules) enables the CSS Modules spec.

It means your module's CSS is local scoped CSS by default. You can switch it off with :global(...) for selectors and/or rules. 

you'll find that only second h1 is red, because its CSS is local scoped, and both h2 is blue, because its CSS is global scoped.