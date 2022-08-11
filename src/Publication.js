import React from 'react';

const Publication = ({ name, authors, journal, image, link, year, me_author_index}) => (
  /**
   * A React component representing a publication.
   *
   * name: the title of the publication,
   * authors: the authors of the publication,
   * journal: the journal of the publication,
   * image: the image corresponding to the publication.
   */

  <div className="publication">
    {/* <div className="publicationImageDiv">
      <img className="publicationImage" src={image}></img>
    </div> */}
    <div className="publicationText">
      <p className="publicationName">
        {name}{' '}
        <a target="_blank" href={link}>
          (Link)
        </a>
      </p>
      <p className="publicationAuthors">{bold_name(authors, me_author_index)}</p>
      <p className="publicationJournal">{journal}</p>
      <p className='publicationYear'>{year}</p>
    </div>
  </div>
);

const Publications = ({ publications }) => (
  /**
   * A React component representing the publications section
   * of the webpage. Displays all publications in a list of
   * Publication components.
   *
   * publications: an array of json objects corresponding to each publication.
   */

  <div className="publications" id="publications" aos-duration="500">
    <h1 className="publicationsTitle">Publications</h1>

    {/* <hr className='hrStyleBlue'></hr> */}
    <div>
      {publications.map(publication => (
        <Publication {...publication} />
      ))}
    </div>
  </div>
);

const bold_name = (authors, me_author_index) => Array(authors.slice(0, me_author_index), <b>{authors[me_author_index]}</b>, authors.slice(me_author_index+1))

export default Publications;
