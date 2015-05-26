---
layout: post
author: "Ben Wiedermann"
title:  "Cannoncical post"
categories: "meta"
tags: "kramdown jekyll HTML CSS"
---

<!-- Links -->
[Kramdown]: http://kramdown.gettalong.org/quickref.html
[Jekyll]: http://jekyllrb.com/docs/home/

## Overview
{:.no_toc}

We write blog posts in [Kramdown], and GitHub uses [Jekyll] to transform the
markdown into HTML + CSS + JS. 
The markdown source of this post contains examples of common things  we'll want
to write and how to format them in kramdown. The rendered version of this post
shows how the stylesheets display the text.

## Table of contents
{:.no_toc}

* TOC
{:toc}

## Headings
Don't use H1; that heading is reserved for the title of the post. Use H2 (`##`) 
or smaller for headings.

# H1
{:.no_toc}

## H2
{:.no_toc}

### H3
{:.no_toc}

#### H4
{:.no_toc}

##### H5
{:.no_toc}

###### H6
{:.no_toc}

## Text

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, officiis,
pariatur nobis similique ipsam quas quod dignissimos fuga modi eveniet dolor
necessitatibus earum ad exercitationem voluptas omnis suscipit a totam.

**bold** *italic* `fixed-width` 

> **Blockquote.** Lorem ipsum dolor sit amet, consectetur adipisicing elit.
> Voluptas, error, laboriosam, molestiae alias consectetur omnis natus laborum
> enim tenetur nulla officiis eaque exercitationem explicabo deleniti recusandae
> non iusto et ullam.

## Lists

### ordered

   1. item
   1. item
   1. item

### unordered

   + item
   + item
   + item

### definition

term
: definition

## Asides
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero, explicabo, quaerat, mollitia, quod officiis cupiditate laborum commodi fuga eos iste provident veritatis aliquam minus cum ut doloremque voluptatem quasi voluptas?
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, ut, nulla, ducimus voluptate corrupti labore animi et doloremque alias quibusdam exercitationem quae optio assumenda at facilis maxime expedita. Consequatur, velit.
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, alias, placeat incidunt accusamus laboriosam id autem natus fugiat nobis vitae tenetur obcaecati distinctio illo ab officiis et dolor voluptatum tempora.

<aside>
  This is aside text. <strong>Text in an aside has to be in HTML</strong> :(.
</aside>

## Footnotes
A footnote. [^f1]

[^f1]: A footnote

## Code
Some code from a gist:

{% gist pathikrit/a32e17832296befd6b94 %}

Some included code:
**TODO**

Some inline code:
{% highlight ruby linenos %}
def show
  @widget = Widget(params[:id])
  respond_to do |format|
    format.html # show.html.erb
    format.json { render json: @widget }
  end
end
{% endhighlight %}

## Math
Some inline math: $x \sqsubseteq y$

Some block math:

$$
\begin{aligned}
  f(3) &= 3^2 + 2 \cdot 3 + 1
  \\
  &= 9 + 2 \cdot 3 + 1
  \\
  &= 9 + 6 + 1
  \\
  &= 15 + 1
  \\
  &= 16
\end{aligned}
$$

## Images

![grace_hopper](https://upload.wikimedia.org/wikipedia/commons/3/37/Grace_Hopper_and_UNIVAC.jpg)

## Tables

| Header1 | Header2 | Header3 |
|:--------|:-------:|--------:|
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|----
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|=====
| Foot1   | Foot2   | Foot3
