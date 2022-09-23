const defaultText = (
`# This is heading Level 1
## Heading Level 2

[An example link which links to GitHub repository of this project.](https://github.com/SalmandaAK/fcc-markdown-previewer)

This is a function \`howToCreateCodeBlock()\`.

    function howToCreateCodeBlock() {
        return "Indent the line with tab or four spaces"
    }

To create unordered list:
* You can use asterisks,
- You can use hypens,
+ Or plus symbols.
    
To create ordered list:
1. Just start with number.
2. You can start with any number and still converted as the correct number in html.
736374. This number still show up as 3.

> This is a blockquote. _Insert some long quotes here to see the text is wrapped into the last line_.

![Google Logo](https://www.google.com/images/errors/logo_sm.gif)

**Bold text**
_Italic text_
___Bold italic text___
~strike through~

Put at least three hypens, asterisks, or underscores to create horizontal rule, like this:

---
***
___
If you use hypens, you need to add a blank because three hypens under a text will turns that text into a heading.`
)

const examplesText = (
`# Heading Level 1
## Heading Level 2
### Heading Level 3
#### Heading Level 4
##### Heading Level 5
###### Up to Heading level 6
   
[link](src)
    
> Blockquotes
    
\`inlineCode()\`
    
    Code block: add four space or a tab before text
    on each line.

>     Blockquote with preformatted text:
>     add > followed by five spaces before the text

Unordered List:
- hypen
* asterisk
+ plus symbol
    
Ordered List:
1. number
2. etc.
   
![image alt text](src)
    
**bold text**
_italic text_
___bold italic text___
    
Horizontal rule:
___
***`
)

const text = {
    getDefault() {
        return defaultText;
    },
    getExamples() {
        return examplesText;
    }
}

export default text;