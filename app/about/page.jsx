"use client";
import React from "react";
import colorfulAnimal from "../../public/colourful-animal.jpg";
import borgesPhoto from "../../public/borges.jpg";
import donateIcon from "../../public/donate.png";
import stackedBooks from "../../public/stacked-books.jpg";
import Image from "next/image";
import "./about.css";
import Link from "next/link";
const MainContent = () => {
  return (
    <main className="main-content georgia-font">
      <section className="about-section">
        <h1 className="font-bold text-lg">About</h1>
        <div className="content-with-image">
          <div className="text-content">
            <p>
              The Library of Babel is a place for scholars to do research, for
              artists and writers to seek inspiration, for anyone with curiosity
              or a sense of humor to reflect on the weirdness of existence - in
              short, it's just like any other library. If completed, it would
              contain every possible combination of 1,312,000 characters,
              including lower case letters, space, comma, and period. Thus, it
              would contain every book that ever has been written, and every
              book that ever could be - including every play, every song, every
              scientific paper, every legal decision, every constitution, every
              piece of scripture, and so on. At present it contains all possible
              pages of 3200 characters, about 10<sup>4677</sup> books.
            </p>

            <p>
              Since I imagine the question will present itself in some visitors'
              minds (a certain amount of distrust of the virtual is inevitable)
              I'll head off any doubts: any text you find in any location of the
              library will be in the same place in perpetuity. We do not simply
              generate and store books as they are requested - in fact, the
              storage demands would make that impossible. Every possible
              permutation of letters is accessible at this very moment in one of
              the library's books, only awaiting its discovery. We encourage
              those who find strange concatenations among the variations of
              letters to write about their discoveries in the{" "}
              <a href="#forum">forum</a>, so future generations may benefit from
              their research.
            </p>
          </div>
          <Image
            src="/colourful-animal.jpg"
            alt="Colorful abstract animal"
            className="side-image"
            height={1000}
            width={1000}
          />
        </div>

        <div className="donate-section flex justify-center">
          <Image src={donateIcon} alt="Donate" className="donate-icon " />
        </div>

        <h2>Borges</h2>
        <div className="content-with-image borges-section">
          <Image
            src={borgesPhoto}
            alt="Jorge Luis Borges"
            className="borges-photo"
          />
          <div className="text-content">
            <p>
              Jorge Luis Borges is without doubt one of the most influential and
              innovative authors of the twentieth century. He is best known for
              his many short stories, each of which creates a sort of
              ontological thought experiment in a few brief pages. He wrote
              poetry and non-fiction as well, reflecting on his immense
              knowledge of world literature. "
              <a href="#library">The Library of Babel</a>" ("
              <a href="#biblioteca">La Biblioteca de Babel</a>") is one of his
              best-known and most loved pieces, from the 1941 collection{" "}
              <i>The Garden of Branching Paths</i>. It describes a version of a
              universal library, containing books with every possible
              combination of 410 pages of letters, thus containing every book
              that ever has been and every book that ever could be written,
              drowned out by an immense quantity of nonsense.
            </p>

            <p>
              Borges was Argentinian, and aligned himself with many of the
              country's right-leaning politicians. He began losing his sight in
              his thirties, and was appointed director of the national library
              after Perón's exile, despite being completely blind. The librarian
              who narrates "The Library of Babel" references this condition:
              "Now that my eyes can hardly make out what I myself have written,
              I am preparing to die..."
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 dick">
          <div className="quote-section inline-block">
            <p>
              When I first launched this website, it included here a quotation
              from Borges' 1939 essay "<a href="#total">The Total Library</a>"
              ("
              <a href="#total-es">La Biblioteca Total</a>"), precursor to his
              short story, where he describes the contents of the universal
              library. It would include everything: the minute history of the
              future, <i>The Egyptians</i> of Aeschylus, the precise number of
              times the waters of the Ganges have reflected the flight of a
              falcon, the secret and true name of Rome, the encyclopedia Novalis
              would have written, Borges' dreams and daydreams in the dawn of
              August 14th, 1934, the demonstration of Pierre Fermat's theorem,
              the unwritten chapters of <i>Edwin Drood</i>, those same chapters
              translated into the language of the Garamantes, Uitzen's Books of
              Iron, the premature epiphanies of Stephen Dedalus that would mean
              nothing before a cycle of a thousand years, the gnostic gospel of
              Basilides, the song the sirens sang, the faithful catalogue of the
              library, and the demonstration of the falsehood of this catalog.
            </p>
            <br />
            <p>
              A similar list in "The Library of Babel" adds "the translation of
              every book into every language, the interpolations of every book
              into all books," and "the true story of your death."
            </p>
          </div>

          <div className="legal-section inline-block">
            <p>
              As I said, this quotation was included when the site launched, but
              unfortunately the lawyers of Borges' literary estate asked for it
              to be removed. His estate has opposed every genuine tribute to
              Borges' legacy out of the misguided notion that they will profit
              more from his books if no one else can so much as reference them.
              For a sense of the absurd lengths to which they have carried this
              quest, take a look at what they have done to the brilliant work of{" "}
              <a href="#pablo">Pablo Katchadjian</a>, <i>El Aleph engordado</i>,
              and pause for a moment to honor the{" "}
              <a href="#norman">lost legacy of Norman Thomas di Giovanni</a>.
            </p>

            <p>
              Borges co-authored translations of the majority of his work into
              English with his friend di Giovanni, with whom he shared a
              generous 50/50 profit-sharing agreement. After Borges' death, the
              publisher, in collaboration with his estate, allowed these works
              to go out of print and commissioned the Hurley translations in
              order to keep more of the profits for themselves. He was also
              prevented from re-publishing his work or publishing translations
              he wrote subsequent to Borges' death. We can at least take solace
              in the certainty that Borges' legacy will outlast these heirs,
              despite their best efforts.
            </p>
          </div>
        </div>
        <h2>Creators</h2>
        <div className="creators-section">
          <div className="text-content">
            <p>
              libraryofbabel.info is the creation of Jonathan Basile (
              <a href="https://jonothingEB/jonathanbasile.info">
                @jonothingEB/jonathanbasile.info
              </a>
              ), along with the help of my friends and family. I was drawn to
              the idea by an interest in literature and iterability, which I
              suppose I might as well call iterature. I hope you find the
              library aids your meditations, and please let me know via the{" "}
              <a href="#forum">forum</a> or email (jonathan [dot] e [dot] basile
              [at] gmail [dot] com) what thoughts it brings. I am currently a
              Ph.D. student in Emory's Comparative Literature department, and
              have mostly shifted my focus from programming to writing. You can
              find links to my work on my <a href="#website">website</a>,
              including a book based on this project,{" "}
              <i>
                Tar for Mortar: "The Library of Babel" and the Dream of Totality
              </i>
              .
            </p>
            <h2>Not sure where to begin?</h2>
            <p>
              Visit the <a href="#reference">Reference Hex</a>.
            </p>
          </div>
          <Image
            src={stackedBooks}
            alt="Stack of old books"
            className="books-image"
          />
        </div>

        <div className="back-link">
          <Link href="/">Back to Portal</Link>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
