## Set up the repository

Following [these directions](https://pages.github.com/)

  1. Create an organization, e.g., `conscious-incompetence`
  2. Create a repository called org.github.io, e.g., `conscious-incompetence.github.io`
  3. Clone it to your own machine, etc.
  4. Add some files, commit, and push
  5. Visit the URL, e.g., http://conscious-incompetence.github.io

## Get Jekyll on your own machine

See [these instructions](https://help.github.com/articles/using-jekyll-with-pages/)

Note: some of the instructions in this document are particular to Mac OS X

   1. Install Jekyll
      1. For the Mac, I first had to [install some libraries](https://stackoverflow.com/questions/6277456/nokogiri-installation-fails-libxml2-is-missing):

      ```
      brew install libxml2 libxslt
      ```

      1. Then, I ran [this command](https://github.com/sparklemotion/nokogiri/issues/1099) to install nokogiri:
      ```
      gem install nokogiri -- --use-system-libraries=true --with-xml2-include=/Applications/Xcode.app/Contents/Developer/Platforms/MacOSX.platform/Developer/SDKs/MacOSX10.10.sdk/usr/include/libxml2
      ```

      1. Finally, I could run `bundle install`

      1. At a later point, I might need to "bundle Filter gem dependencies",
         as suggested by this message:
         > Thank you for installing html-pipeline!
         > You must bundle Filter gem dependencies.
         > See html-pipeline README.md for more details.
         > https://github.com/jch/html-pipeline#dependencies

## Set up a jekyll site

   1. In a temp directory, run `jekyll new conscious-incompetence`
   2. Copy the files into the site's directory

## Writing on your local machine

   1. In the repository's top directory, run `bundle exec jekyll serve --drafts` (The `--drafts` flag will let you see posts from the _drafts directory)
   1. Write a draft in the _drafts directory

### Converting LaTeX to markdown
```
pandoc -f latex -t markdown --atx-headers <file> -o <output-file>
```

Warning: MathJaX doesn't support `\ensuremath` (because everything is assumed to be in math mode)

### Notebooks
   See [this blog post](https://cscorley.github.io/2014/02/21/blogging-with-ipython-and-jekyll/)
   This doesn't quite seem to do what you want. There may be no way to get live notebooks in Pages (but maybe there's another way to have live code?)

## Writing blog posts

### Set up your computer
The website is written 

#### Install / obtain dependencies
   1. **Git,** for version control and synchronizing with the live website. 
      + [Download](https://git-scm.com/) and install git on your machine.

   1. **This git repository,** which contains all the website files. 
      + Clone the repository to your machine.

   1. **Permission to commit** to this repository.

   1. **Jekyll**, the blog framework we use. If you want to preview your work on
   your own machine, before you upload it to the website, you'll want to install
   Jekyll. 
      + [Install jekyll](http://jekyllrb.com/docs/installation/)
      + **Installations notes for Mac OS**. On a clean version of Yosemite, 
      here are the steps I (BenW) had to go through to install Jekyll:
         1. Install XCode
         1. Install command-line tools: `xcode-select --install`
         1. Install jekyll: `sudo gem install jekyll`

#### Preview the site on your own machine
If you've cloned the repository and installed Jekyll, you should be able to
preview the site on your own machine. From the root directory of your cloned
repository, run the following command:
```
jeykyll serve --drafts
```
This command will start a server on your own machine that generates and serves
the website. The `--drafts` option means that the files in the `_drafts`
directory will be treated as posts. If you run the command without the 
`--drafts` flag, you'll see what the live website looks like.

Once the serve is running, you should be able to visit 
[127.0.0.1:4000](http://127.0.0.1:4000) to preview the site.

### Write a draft

   1. **Create a new file.*** In the `_drafts` directory create a new `.md` 
   file, with a descriptive name.

   1. **Provide some metadata**. Jekyll requires some 
   [metadata](http://jekyllrb.com/docs/frontmatter/) to appear at the
   top of every file. The metadata provides information about the file,
   including the title of the document, the author, etc. Here is some sample 
   metadata that you can copy-modify-paste into the top of your new file:

        ---
        layout: post
        author: "Ben Wiedermann"
        title:  "How to write a new post"
        ---

  1. **Start writing!**  We're using Jekyll's default markdown language,
  [kramdown](http://kramdown.gettalong.org/documentation.html). The website
  contains a [sample post](_drafts/sample-post.md) that can help you figure out
  how to write various things (e.g., tables, asides, math) in kramdown. It also
  contains links to the full documentation for all our writing tools.

  1. **Preview as you write** If you're previewing the site on your own machine,
  using the `--drafts` flag, then your new post should show up on the main page.

  1. **Commit early and often**. If you'd like to share your draft with
  someone else, push it to the repository. The draft won't show up on the live
  website, but it _will_ be publicly available in the repository.

#### Converting a LaTeX document to a post
If you have a LaTeX document that you want to convert to a post, there's a tool
called [pandoc](http://pandoc.org/) that can help. Once you've installed it, you
can run the following command to convert LaTeX to Markdown:

```
pandoc -f latex -t markdown --atx-headers <input-filename.tex> -o <output-filename.md>
```

**Warning.** The conversion is not perfect, so you'll probably have to do quite
a bit of cleanup on the generated markdown file. It's a bit of a pain, but
fortunately it's a one-time process. Here are a few issues / recommendations:

   + **ensuremath:** You'll need to remove all instances of `\ensuremath`. On
   the website, all embedded LaTeX is assumed to be in math mode. As a result,
   MathJaX (the JavaScript library that processes LaTeX) doesn't support
  `\ensuremath`. One quick way to get rid of `\ensuremath` is to put the
  following line at the top of the post:

    ```
    $$
    \renewcommand{\ensuremath}[1]{#1}
    $$
    ```

   + **macros:** Pandoc expands macros as it translates and there doesn't seem 
   to be any way to prevent it. You might want to go back and manually undo this 
   process.

### Publish a post

   1. Move your `.md` file from the `_drafts` folder to the `_posts` folder. 
   1. Rename your `.md` file, according to Jekyll's 
   [naming conventions](http://jekyllrb.com/docs/posts/): `YYYY-MM-DD-title.md`
   1. Push to the GitHub repository.

Now the post will show up on the website's main page.
