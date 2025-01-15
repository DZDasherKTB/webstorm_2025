import React from "react";
import "./page.css"
const Page = () => {
  return (
    <div className="container">
      <h1>About</h1>
      <section id="about">
        <p>
          The Babel Image Archives are an application of the principle
          underlying Jorge Luis Borges' "<a href="#">The Library Of Babel</a>"
          to the visual world. Borges' short story, the inspiration for{" "}
          <a href="#">libraryofbabel.info</a>, describes a universal library
          containing every possible permutation of 410 pages of letters, thus
          everything that ever has been or ever could be written. Instead of
          letters and punctuation marks, the Image Archives permute the 4096
          colors, and rather than a page of 40 lines each with 80 characters,
          the images are pixel grids with 416 rows and 640 columns. It contains
          every image that ever has been or could be created with this color
          palette in these dimensions, including portraits of every person who
          ever lived at every moment in their life, digitized versions of every
          work of art ever created, even those lost to history, as well as every
          work of art which ever could be created, and photographs of your own
          birth, wedding, and funeral. It contains 4096<sup>266240</sup> (~10
          <sup>961755</sup>) unique images.
          <br />
          <br />
          Borges' story, as well as its <a href="#">online iteration</a>,
          demonstrate a property of the essence of language. Though it is
          commonly thought that the meaning of language bears an intrinsic
          relationship to the conscious, rational intentions of the speaker or
          writer creating an utterance, the Library of Babel reminds us that
          language is always possible in the absence of any intention toward
          signification. In fact, every word we speak or mark we make, even the
          most intimate and spontaneous, is indistinguishable from its
          mechanical reproduction in the library.
        </p>
        <img
          src="https://babelia.libraryofbabel.info/img/allegoryofchristianity.jpg"
          alt="Allegory of Christianity"
        />
      </section>

      <h1>Permutations</h1>
      <h2>Universal Slide Show</h2>
      <section id="permutations">
        <img
          src="https://babelia.libraryofbabel.info/img/babelia1882759256194412.jpg"
          alt="Universal Slideshow Image"
        />
        <p>
          The <a href="#">Universal Slideshow</a> cycles through every possible
          image in the order they appear in the Babel Image Archives. It takes
          about three seconds to load a new picture, and would traverse the
          entire collection in 10<sup>961748</sup> years. The slideshow
          typically begins at a random point and moves forward from there.
          <br />
          <br />
          The <a href="#">Coloroscopy</a>
          <br /> is a simpler permutation of the red, green, and blue values
          comprising the 16,777,216 web colors. It changes colors every
          millisecond, and would take about five hours to traverse the complete
          set. It starts from a random point and permutes in a different order
          each time, so if you don't like what you see, just hit refresh.
        </p>
      </section>

      <h1>Navigation</h1>
      <section id="navigation">
        <p>
          This site is a digital archive providing access to nearly 10
          <sup>961755</sup> images. As a result, it can be quite difficult to
          find one's way around. Each image has been assigned a number from
          which it is programmatically generated. That number is the input of a{" "}
          <a href="#">pseudo-random number generator</a> whose output is
          converted into the pixels of the image you see. It's possible to visit
          random locations in the library through the{" "}
          <a href="#">Universal Slide Show</a>, to find the location of any
          image using the <a href="#">image search</a>, to bookmark any image
          and return to it via the URL you create, or to visit an image by
          entering its location number (more on that below). Note that because
          the images are generated programmatically you will not be able to copy
          their URL or save them to disk from the context (right-click) menu.
          <br />
          <br />
          Image locations are typically almost 1,000,000 digits long, which
          makes them somewhat unwieldy. To copy an image's full location, click
          on the truncated image location beneath it (the number prefaced by
          "babelia #" in the example at right). A prompt or text area will
          appear containing full image location. You can copy the text, and/or
          type or paste any location into this field and hit enter/click Seek to
          look up an image by its location. Some browsers struggle more than
          others with allowing the copying and pasting of million-line strings.
          The proportions of the image archives stretch many aspects of the
          programming process to their limits. I have done my best to work
          around the limitations of each browser - if you experience problems, I
          find that Firefox works most smoothly.
        </p>
        <img
          src="https://babelia.libraryofbabel.info/img/borges.png"
          alt="Borges Image"
        />
      </section>

      <h1>Origins</h1>
      <section id="origins">
        <p>
          The Babel Image Archives were created by{" "}
          <a href="#">Jonathan Basile</a>, as an extension of the themes and
          code which led to the creation of <a href="#">libraryofbabel.info</a>.
          Building the library greatly increased my desire to permute, so this
          will be the first of many extensions of the Babelian project. I hope
          you'll share your own ideas and discoveries in the{" "}
          <a href="#">forum</a>. I love to hear from folks with reflections or
          questions about the site or Borges, so feel free to get in touch by
          email, at jonathan [dot] e [dot] basile [at] gmail [dot] com.
        </p>
        <img
          src="https://babelia.libraryofbabel.info/img/toporfishing.jpg"
          alt="Fishing Image"
        />
      </section>
    </div>
  );
};

export default Page;
