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

