import React from 'react';

const Publication = ({ name, authors, journal, image, link }) => (
  /**
   * A React component representing a publication.
   *
   * name: the title of the publication,
   * authors: the authors of the publication,
   * journal: the journal of the publication,
   * image: the image corresponding to the publication.
   */

  <div className="publication">
    <div className="publicationImageDiv">
      <img className="publicationImage" src={image}></img>
    </div>
    <div className="publicationText">
      <p className="publicationName">
        {name}{' '}
        <a target="_blank" href={link}>
          (Link)
        </a>
      </p>
      <p className="publicationAuthors">{authors}</p>
      <p className="publicationJournal">{journal}</p>
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

export default Publications;
