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

Some **bold** text.

Some *italic* text.

Some `fixed-width` text.

## Lists

### ordered

   1. item
   1. item
   1. item

### unordered

   + item
   + item
   + item

## Footnotes
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, tempora, quas,
odio ipsum voluptates optio tempore incidunt reprehenderit omnis fuga
consequatur deserunt qui pariatur accusamus enim velit perspiciatis? Molestias,
dolore![^f1]

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
**TODO**

## Images

**TODO**
