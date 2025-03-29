# Text Diff Tool

## About the Project

The Text Diff Tool is a simple and intuitive tool for comparing two texts and identifying the differences between them. It is ideal for developers, writers, editors, and anyone who needs to analyze changes between versions of texts or code.

With this tool, you can clearly and organizedly visualize added, removed, and unchanged lines, similar to the `git diff` format.

### Privacy

This tool works entirely in your browser. **No data is sent to any backend or server**, ensuring your privacy and security.

## Usage Examples

### Example 1: Text Comparison

**Text 1:**
```
Hello, world!
This is a sample text.
Let's compare the differences.
```

**Text 2:**
```
Hello, world!
This is an updated sample text.
Let's compare the changes.
```

**Result:**
```
  Hello, world!
- This is a sample text.
+ This is an updated sample text.
  Let's compare the changes.
```

### Example 2: Code Comparison

**Original Code:**
```javascript
function sum(a, b) {
  return a + b;
}
```

**Updated Code:**
```javascript
function sum(a, b, c = 0) {
  return a + b + c;
}
```

**Result:**
```
  function sum(a, b, c = 0) {
+   return a + b + c;
-   return a + b;
  }
```

With the Text Diff Tool, you can easily identify changes and understand the differences between two texts or pieces of code. Try it now and see how simple and efficient it is!

## Try the Tool

You can use the Text Diff Tool directly in your browser by visiting the following URL:

[https://lai32290.github.io/text-diff/](https://lai32290.github.io/text-diff/)
